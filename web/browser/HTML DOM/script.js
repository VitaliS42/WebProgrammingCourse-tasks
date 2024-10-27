console.log('The script.js is started!');

document.getElementById("paragraph-container-block").innerText = "Your task for now is to have a good time"

let anchorSocket = document.querySelector("code")
anchorSocket.innerHTML = '<a href="#">I am a child element!</a>';

let removableHeader = document.querySelector("h1")
removableHeader.remove()

function colorist(){document.querySelector("body").classList.add("orange")}
document.querySelector("a").addEventListener("click",colorist)