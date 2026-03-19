// ==UserScript==
// @name         YouTube Auto Continue
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Auto-dismiss "Video paused. Continue watching?" prompt on YouTube playlists
// @match        https://www.youtube.com/watch*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    function dismissPausePrompt() {
        const dialog = document.querySelector('yt-confirm-dialog-renderer[dialog]');
        if (!dialog || dialog.hidden || !dialog.offsetParent) return;

        const text = dialog.querySelector('.line-text');
        // Change this follow by your display language
        if (!text || !text.textContent.includes('Video paused')) return;

        const btn = dialog.querySelector('#confirm-button button');
        if (btn) {
            btn.click();
            console.log('[YouTube Auto Continue] Dismissed pause prompt');
        }
    }

   setInterval(dismissPausePrompt, 1000);
})();
