function hideInfo() {
    let wsp = document.getElementById("Wsp");
    wsp.classList.add("hideInfo");
}
function showInfo() {
    let wsp = document.getElementById("Wsp");
    wsp.classList.remove("hideInfo");
}

// texrArea AutoResize
let tx = document.getElementsByTagName('textarea');
for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
    tx[i].addEventListener("input", OnInput, false);
}

function OnInput(e) {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
}