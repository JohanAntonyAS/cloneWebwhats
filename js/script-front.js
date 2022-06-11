//toggle infoBox
function hideInfo() {
    let wsp = document.getElementById("Wsp");
    wsp.classList.add("hideInfo");
}
function showInfo() {
    let wsp = document.getElementById("Wsp");
    wsp.classList.remove("hideInfo");
}

// textArea AutoResize
let tx = document.getElementsByTagName('textarea');
for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
    tx[i].addEventListener("input", OnInput, false);
}

function OnInput(e) {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
}

//cambio de chats

$(document).ready(function () {
    // click on a user select, change chat and messages
    $('.contact').click(function () {
        changeChat($(this));
    });

});

function changeChat(userSelect) {
    var contactSelect = $('.contact.activeContact');
    var dataElement = userSelect.attr('data-element');
    var info = $(".BCtopHeader[data-element='" + dataElement + "']");
    var infoSelect = $('.BCtopHeader.showTopHeader');
    var chat = $(".MCchat[data-element='" + dataElement + "']");
    var chatSelect = $('.MCchat.ShowChat');
    if (!userSelect.hasClass('activeContact')) {
        userSelect.removeClass('notActiveContact').addClass('activeContact');
        contactSelect.removeClass('activeContact').addClass('notActiveContact');
        info.removeClass('hideTopHeader').addClass('showTopHeader');
        infoSelect.removeClass('showTopHeader').addClass('hideTopHeader');
        chat.removeClass('hideChat').addClass('ShowChat');
        chatSelect.removeClass('ShowChat').addClass('hideChat');
    }
}