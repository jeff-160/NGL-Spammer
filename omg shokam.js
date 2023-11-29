// ==UserScript==
// @name         omg shokam
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  omg shokam
// @author       WAP Industries
// @match        https://ngl.link/junenlom1
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(()=>{
        const T = document.querySelector('textarea[placeholder="send me anonymous messages..."]'),
            B = document.querySelector(".submit");

        T.value = "omg shokam"
        B.click()
    }, 500)

})();
