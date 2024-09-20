// ==UserScript==
// @name         NGL Spammer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  NGL Spammer 
// @author       jeff160
// @match        your_link_here
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.alert = ()=>{}

    setTimeout(()=>{
        document.querySelector(".dice-button")?.click()
        document.querySelector(".submit")?.click()
    }, 1000)
})();
