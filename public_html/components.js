/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function init()
{
    var panel = document.getElementById("panel");
    
    panel.innerHTML = "Document Components...";
    panel.innerHTML += "<br>No. forms: " + document.forms.length;
    panel.innerHTML += "<br>No. links: " + document.links.length;
    panel.innerHTML += "<br>No. anchors: " + document.anchors.length;
    panel.innerHTML += "<br>No. images: " + document.images.length;
    panel.innerHTML += "<br>First image URL: " + document.images[0].src;
}

document.addEventListener("DOMContentLoaded", init, false);

