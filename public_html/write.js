/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function init()
{
    var panel = document.getElementById("panel");
    panel.innerHTML += document.title;
    
    var pop = open("", "", "top=200,left=100,width=450,height=100");
    
    pop.document.write("<title>Popup Window</title>");
    pop.document.write("Dynamic popup content");
    pop.document.close();
}

document.addEventListener("DOMContentLoaded", init, false);

