$(document).ready(function () {

    // search 
    $('#search').keyup(function () {
        search();
    });


    // send message and get random reply after seconds
    $('#send').click(function () {
        send();
    });

    // send message but enter
    $('#message').keydown(function () {
        if (event.which === 13 && !event.shiftKey) {
            send();
        }
    });

    // click on a user select, change chat and messages
    $('.contact').click(function () {
        console.log($(this));
        changeChat($(this));
    });

    // click on show info chat
    $('.contactActive').click(function () {
        showInfo();
    });

});

// function search
function search() {
    var search = $('#search').val().toLowerCase();
    // search a contact
    $('.contact').each(function () {
        var user = $(this).find('p').text().toLowerCase();
        if (user.includes(search)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}

function send() {

    //var text = $('#message').val();
    var text = document.getElementById("message").value;
    var chat = $('.MCchat.ShowChat');
    var bubble = $('.template .MCbox.MCmsgOut').clone();
    var contact = $('.contact.activeContact');
    var info = $('.BCtopHeader.showTopHeader');
    var date = new Date;
    var time = addZero(date.getHours()) + ':' + addZero(date.getMinutes());

    console.log(contact);

    if (text !== '') {

        bubble.find('span.MCmsj').html(text);
        bubble.find('span.MCmsgHour').text(time);
        chat.append(bubble);
        contact.prependTo('.chatList');
        scrollBottom();
        if (text.length > 14) {
            contact.find('p.resumeChat').text(text.substring(0, 14) + ' [...]');
        } else {
            contact.find('p.resumeChat').text(text);
        }
        contact.find('span.contactHour').text(time);
        info.find('span').text(time);
        $("#message").val("");

        messageAudio("./audio/sent.wav");
        setTimeout(receive, 3000);
    }
}


function receive() {
    var text = ['Si seguro.', '¡Estoy de camino!', 'Nos vemos.', '¿De qué estás hablando?', '¡Esto es increíble!', 'Lo siento, estoy ocupado mañana...', 'No me importa.'];
    var textIndex = text[getRandomIntInclusive(0, text.length - 1)];
    var chat = $('.MCchat.ShowChat');
    var bubble = $('.template .MCbox.MCmsgIn').clone();
    var contact = $('.contact.activeContact');
    var date = new Date;
    var time = addZero(date.getHours()) + ':' + addZero(date.getMinutes());

    bubble.find('span.MCmsj').html(textIndex);
    bubble.find('span.MCmsgHour').text(time);
    chat.append(bubble);
    scrollBottom();
    if (textIndex.length > 14) {
        contact.find('p.resumeChat').text(textIndex.substring(0, 14) + ' [...]');
    } else {
        contact.find('p.resumeChat').text(textIndex);
    }
    messageAudio("./audio/recived.wav");
}


function addZero(number) {
    if (number < 10) {
        number = '0' + number;
    }
    return number;
}

function scrollBottom() {
    var chatHeight = $('.MCchat.ShowChat').height();
    $('.MCcontentChat').scrollTop(chatHeight);
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function messageAudio(sent) {
    const snd = new Audio(sent);
    return snd.play();
}

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

function create_new() {

    let element = localStorage.getItem('element');
    console.log(element);
    if (element === null) {
        element = 10;
    } else {
        element++;
    }
    new_contact(element);
    new_topbar(element);
    new_chat(element);

    localStorage.setItem("element", element);
}


function new_contact(element) {

    var chatlist = $('.chatList');
    var contact = $('.template .contact.notActiveContact').clone();
    contact.attr("data-element", element);
    //contact.find('img').attr("src","url_image");
    contact.find('.nameContact').html("Kevin Arnold");
    contact.find('span.contactHour').html("23/5/2022");
    contact.find('p.resumeChat').html("resumen chat");

    chatlist.append(contact);
}

function new_topbar(element) {

    var topbar_list = $('#top_bar');
    var top_bar = $('.template .BCtopHeader').clone();
    top_bar.attr("data-element", element);
    //top_bar.find('img').attr("src","url_image");
    top_bar.find('p.one').html("Kevin Arnold");
    top_bar.find('span').html('23/5/2022'); //ultima conexion

    topbar_list.append(top_bar);
}

function new_chat(element) {

    var chat_list = $('.MCcontentChat');
    var chat = $('.template .MCchat').clone();
    chat.attr("data-element", element);

    chat_list.append(chat);
}


//select2 data
var Select2 = function () {
    //== Private functions
    var optionSelect = function () {
        // loading data from array
        var data = [{
            id: 0,
            text: 'Enhancement'
        }, {
            id: 1,
            text: 'Bug'
        }, {
            id: 2,
            text: 'Duplicate'
        }, {
            id: 3,
            text: 'Invalid'
        }, {
            id: 4,
            text: 'Wontfix'
        }];

        $('#m_select2_5').select2({
            placeholder: "Seleciona algo",
            data: data
        });

    }

    //== Public functions
    return {
        init: function () {
            optionSelect();
        }
    };
}();

//== Initialization
jQuery(document).ready(function () {
    Select2.init();
});
