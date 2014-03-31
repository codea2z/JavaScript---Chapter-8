/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function init()
{
    var panel = document.getElementById("panel");
    var item1 = document.getElementById("item1");
    var elems = document.getElementsByTagName("li");
    var item2 = elems[4];
    
    panel.innerHTML += "Total No. List Items: " + elems.length;
    panel.innerHTML += "<br>Specific item 1: " + item1.innerHTML +
                       "<br>Specific item 2: " + item2.innerHTML;
    
}

document.addEventListener("DOMContentLoaded", init, false);

