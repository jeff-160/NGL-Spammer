// ==UserScript==
// @name         omg shokam
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  omg shokam
// @author       You
// @match        https://ngl.link/junenlom
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(()=>{
        const T = document.querySelector('textarea[placeholder="send me anonymous messages..."]'),
            B = document.querySelector(".submit");

        T.click()
        T.value = "omg shokam"
        B.click()
    }, 1000)

})();
