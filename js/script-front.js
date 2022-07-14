//toggle sidebar right and left
$bxInfo = document.getElementById('bxInfo')
$top_bar = document.getElementById('top_bar')
$bxChat = document.getElementById('bxChat')
$closeInfo = document.getElementById('closeInfo')
$closeMsgAuto = document.getElementById('closeMsgAuto')
$contMsgAuto = document.getElementById('contMsgAuto')
$contInfo = document.getElementById('contInfo')
$showmsg = document.getElementById('showmsg')
$bxDrawer = document.getElementById('bxDrawer')

$bxPerfil = document.getElementById('bxPerfil')
$openPerfil = document.getElementById('openPerfil')
$closePerfil = document.getElementById('closePerfil')

$toggleMenu = document.getElementById('toggleMenu')
$bxDropDown = document.getElementById('bxDropDown')

$bxContacts = document.getElementById('bxContacts')
$openNewChats = document.getElementById('openNewChats')
$closeNewChats = document.getElementById('closeNewChats')

$bxMsgMassive = document.getElementById('bxMsgMassive')
$openMsgMassive = document.getElementById('openMsgMassive')
$closeMsgMassive = document.getElementById('closeMsgMassive')

$bxMsgMassiveCRM = document.getElementById('bxMsgMassiveCRM')
$openMsgMassiveCRM = document.getElementById('openMsgMassiveCRM')
$closeMsgMassiveCRM = document.getElementById('closeMsgMassiveCRM')

$bxFilterGroup = document.getElementById('bxFilterGroup')
$openFilterGroup = document.getElementById('openFilterGroup')
$closeFilterGroup = document.getElementById('closeFilterGroup')

$bxMsgExcel = document.getElementById('bxMsgExcel')
$openMsgExcel = document.getElementById('openMsgExcel')
$closeMsgExcel = document.getElementById('closeMsgExcel')

$bxAnswer = document.getElementById('bxAnswer')
$openAnswers = document.getElementById('openAnswers')
$closeAnswers = document.getElementById('closeAnswers')

$bxSettings = document.getElementById('bxSettings')
$openSettings = document.getElementById('openSettings')
$closeSettings = document.getElementById('closeSettings')


$showmsg.addEventListener("click", handleShowMsg);
function handleShowMsg() {
    $bxChat.classList.remove("wsp");
    $contMsgAuto.classList.remove("hide")
    $bxInfo.classList.remove("hide");
}
$closeMsgAuto.addEventListener("click", handleCloseMsg);
function handleCloseMsg() {
    $bxChat.classList.add("wsp");
    $contMsgAuto.classList.add("hide");
    $bxInfo.classList.add("hide");
}
$top_bar.addEventListener("click", handleOpenInfo);
function handleOpenInfo() {
    $bxChat.classList.remove("wsp");
    $contInfo.classList.remove("hide");
    $bxInfo.classList.remove("hide");
}
$closeInfo.addEventListener("click", handleCloseInfo);
function handleCloseInfo() {
    $bxChat.classList.add("wsp");
    $contInfo.classList.add("hide");
    $bxInfo.classList.add("hide");
}

$openNewChats.addEventListener("click", handleOpenNewChats);
function handleOpenNewChats() {
    $bxContacts.classList.remove("hide");
    $bxDrawer.setAttribute("style", "left:0px;");
    $bxDrawer.setAttribute("transition-style", "in:wipe:right");
}
$closeNewChats.addEventListener("click", handleCloseNewChats);
function handleCloseNewChats() {
    $bxDrawer.setAttribute("style", "left:-420px;");
    $bxDrawer.setAttribute("transition-style", "out:wipe:left");
    setTimeout(function () {
        $bxContacts.classList.add("hide");
    }, 500);
    $bxChat.classList.add("wsp");
    $contMsgAuto.classList.add("hide");
    $bxInfo.classList.add("hide");

}

$openPerfil.addEventListener("click", handleOpenPerfil);
function handleOpenPerfil() {
    $bxPerfil.classList.remove("hide");
    $bxDrawer.setAttribute("style", "left:0px;");
    $bxDrawer.setAttribute("transition-style", "in:wipe:right");
}
$closePerfil.addEventListener("click", handleClosePerfil);
function handleClosePerfil() {
    $bxDrawer.setAttribute("style", "left:-420px;");
    $bxDrawer.setAttribute("transition-style", "out:wipe:left");
    setTimeout(function () {
        $bxPerfil.classList.add("hide");
    }, 500);
}

$openMsgMassive.addEventListener("click", handleOpenMsgMassive);
function handleOpenMsgMassive() {
    $bxMsgMassive.classList.remove("hide");
    $bxDrawer.setAttribute("style", "left:0px;");
    $bxDrawer.setAttribute("transition-style", "in:wipe:right");
}
$closeMsgMassive.addEventListener("click", handleCloseMsgMassive);
function handleCloseMsgMassive() {
    $bxDrawer.setAttribute("style", "left:-420px;");
    $bxDrawer.setAttribute("transition-style", "out:wipe:left");
    setTimeout(function () {
        $bxMsgMassive.classList.add("hide");
    }, 500);
}

$openMsgMassiveCRM.addEventListener("click", handleOpenMsgMassiveCRM);
function handleOpenMsgMassiveCRM() {
    $bxMsgMassiveCRM.classList.remove("hide");
    $bxDrawer.setAttribute("style", "left:0px;");
    $bxDrawer.setAttribute("transition-style", "in:wipe:right");
}
$closeMsgMassiveCRM.addEventListener("click", handleCloseMsgMassiveCRM);
function handleCloseMsgMassiveCRM() {
    $bxDrawer.setAttribute("style", "left:-420px;");
    $bxDrawer.setAttribute("transition-style", "out:wipe:left");
    setTimeout(function () {
        $bxMsgMassiveCRM.classList.add("hide");
    }, 500);
}

$openFilterGroup.addEventListener("click", handleOpenFilterGroup);
function handleOpenFilterGroup() {
    $bxFilterGroup.classList.remove("hide");
    $bxDrawer.setAttribute("style", "left:0px;");
    $bxDrawer.setAttribute("transition-style", "in:wipe:right");
}
$closeFilterGroup.addEventListener("click", handleCloseFilterGroup);
function handleCloseFilterGroup() {
    $bxDrawer.setAttribute("style", "left:-420px;");
    $bxDrawer.setAttribute("transition-style", "out:wipe:left");
    setTimeout(function () {
        $bxFilterGroup.classList.add("hide");
    }, 500);
}

$openMsgExcel.addEventListener("click", handleOpenMsgExcel);
function handleOpenMsgExcel() {
    $bxMsgExcel.classList.remove("hide");
    $bxDrawer.setAttribute("style", "left:0px;");
    $bxDrawer.setAttribute("transition-style", "in:wipe:right");
}
$closeMsgExcel.addEventListener("click", handleCloseMsgExcel);
function handleCloseMsgExcel() {
    $bxDrawer.setAttribute("style", "left:-420px;");
    $bxDrawer.setAttribute("transition-style", "out:wipe:left");
    setTimeout(function () {
        $bxMsgExcel.classList.add("hide");
    }, 500);
}

$openAnswers.addEventListener("click", handleOpenAnswers);
function handleOpenAnswers() {
    $bxAnswer.classList.remove("hide");
    $bxDrawer.setAttribute("style", "left:0px;");
    $bxDrawer.setAttribute("transition-style", "in:wipe:right");
}
$closeAnswers.addEventListener("click", handleCloseAnswers);
function handleCloseAnswers() {
    $bxDrawer.setAttribute("style", "left:-420px;");
    $bxDrawer.setAttribute("transition-style", "out:wipe:left");
    setTimeout(function () {
        $bxAnswer.classList.add("hide");
    }, 500);
}

$openSettings.addEventListener("click", handleOpenSettings);
function handleOpenSettings() {
    $bxSettings.classList.remove("hide");
    $bxDrawer.setAttribute("style", "left:0px;");
    $bxDrawer.setAttribute("transition-style", "in:wipe:right");
}
$closeSettings.addEventListener("click", handleCloseSettings);
function handleCloseSettings() {
    $bxDrawer.setAttribute("style", "left:-420px;");
    $bxDrawer.setAttribute("transition-style", "out:wipe:left");
    setTimeout(function () {
        $bxSettings.classList.add("hide");
    }, 500);
}

$toggleMenu.addEventListener("click", handleMenu)
function handleMenu() {
    $menudrop = document.getElementById('menuDrop')
    $bxDropDown.classList.toggle("show")
    $menudrop.classList.toggle("circle")
}

$(document).click(function (e) {
    $('#menuDrop').not($('#menuDrop').has($(e.target))).children('.menuDrop').removeClass('show')
    $('#menuDrop').not($('#menuDrop').has($(e.target))).removeClass('circle')
});

// textArea AutoResize
// let tx = document.getElementById('message');
// for (let i = 0; i < tx.length; i++) {
//     tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
//     tx[i].addEventListener("input", OnInput, false);
// }

// function OnInput(e) {
//     this.style.height = 'auto';
//     this.style.height = (this.scrollHeight) + 'px';
// }

$("textarea").each(function () {
    // this.setAttribute("style", "height:" + (this.scrollHeight) + "px;");
}).on("input", function () {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
});