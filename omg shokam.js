// ==UserScript==
// @name         omg shokam
// @namespace    http://tampermonkey.net/
// @version      0.1
// @icon         https://isphs.hci.edu.sg/data/photos/%7B21FFCAF7-04B4-4266-931D-17A5C82EEB8E%7D.jpg
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
