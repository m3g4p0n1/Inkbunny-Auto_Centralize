// ==UserScript==
// @name         IB | Auto centralize
// @namespace    https://github.com/m3g4p0n1/Inkbunny-Auto_Centralize
// @version      2023-12-26
// @description  Should scroll and resize the picture so it's fully within your screen.
// @author       m3g4p0n1
// @match        https://inkbunny.net/s/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=inkbunny.net
// @grant        none
// ==/UserScript==

'use strict'


scroll(0,230)

var iterations = 0

function isComic()
{
    var stopRun = false
    for (let i in document.getElementsByTagName('div'))
    {
        console.log(document.getElementsByTagName('div')[i].textContent)
        if (document.getElementsByTagName('div')[i].textContent == "Type:\n\t\t\t\t\t\t\t\t\tComic\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")
        {
            //change to "false" if you want to affect comics.
            stopRun = true
            break}
        
    }
    if(!stopRun)
    {
        checkIMG()
    }
}

function checkIMG(){

    //Some images don't have the 'magicbox' id, idk why or how to deal with that.
    var image = document.getElementById('magicbox')


    if (image.height >= image.width)
    {
        image.style.setProperty('width','auto')
        image.style.setProperty('height','80vh')
    }

    if (image.width > image.height && image.height >= '800')
    {
        image.style.setProperty('width','80vh')
        image.style.setProperty('height','auto')
    }

    if (iterations < 5)
    {
        // Idk how to reliably detect when the picture finished loading, so I repeat the same function a few times to make sure it resizes :v
        setTimeout(checkIMG,500)
        iterations += 1
    }
}
isComic()
