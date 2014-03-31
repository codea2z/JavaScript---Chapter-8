/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function init()
{
    var panel = document.getElementById("panel");
    
    panel.innerHTML += "Linked from: " + document.referrer;
    panel.innerHTML += "<br>Title: " + document.title;
    panel.innerHTML += "<br>URL: " + document.URL;
    panel.innerHTML += "<br>Domain: " + document.domain;
    panel.innerHTML += "<br>Las modified: " + document.lastModified;
}

document.addEventListener("DOMContentLoaded", init, false);

