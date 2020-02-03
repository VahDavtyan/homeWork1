

let div = document.getElementById('box');
div.addEventListener('click', createElement)


function createElement() {
    let node = document.createElement ('div')
    let textNode = document.createTextNode ('water')
    node.appendChild(textNode)
    div.appendChild(node)
};


