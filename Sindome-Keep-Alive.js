// ==UserScript==
// @name         iOS Sindome Keep Alive
// @namespace    http://tampermonkey.net/
// @version      2026-06-16
// @description  Add an audio tag & method to start/stop the source in order to keep the web client alive in the background.
// @author       zxq / huzzahfurthermore
// @match        https://play.sindome.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Set direct audio URL. It MUST end in .mp3
    var audioSource = "https://lambda.vgmtreasurechest.com/soundtracks/doom-original-game-soundtrack-2016-windows-ps4-xbox-one-switch/kqxodyhp/02.%20Rip%20%26%20Tear.mp3";
    // Grab <head> element
    var head = document.head;
    // Grab button holder
    var buttonHolder = document.getElementsByClassName("mini-controls")[0];
    // Create audio HTML
    var audioHTML = `<audio id="btn-audio" onended="this.play();" autobuffer onload="songT=false;"> <source src="${audioSource}" type="audio/mpeg"> </audio>`;
    // Create new button HTML
    var btnHTML = '<button class="btn btn-primary btn-xs" type="button" title="toggle audio" onclick="try{songT=!songT}catch{songT=true}var aud=document.getElementById(`btn-audio`);aud.volume=0.1;if(songT){aud.play();}else{aud.pause();}"><span class="hidden-xs">🎤</span></button>';
    // Add audioHTML to head
    head.innerHTML += audioHTML;
    // Add btnHTML to buttonHolder
    buttonHolder.innerHTML += btnHTML;
})();
