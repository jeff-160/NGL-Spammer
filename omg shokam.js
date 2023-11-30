// ==UserScript==
// @name         omg shokam
// @namespace    http://tampermonkey.net/
// @version      0.1
// @icon         https://isphs.hci.edu.sg/data/photos/%7B21FFCAF7-04B4-4266-931D-17A5C82EEB8E%7D.jpg
// @description  omg shokam
// @author       WAP Industries
// @match        https://ngl.link/junenlom2/3words
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(()=>{
        document.querySelector(".dice-button").click()
        document.querySelector(".submit").click()
    }, 500)

})();