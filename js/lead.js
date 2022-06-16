$(document).ready(function () {

    document.getElementById("pipeline").onchange = function () {

        let data = this.options[this.selectedIndex].getAttribute("stage");
        let stage = document.getElementById('stage');
        //eliminar elementos que estan agregados
        for (i = stage.length - 1; i >= 0; i--) {
            stage.remove(i);
        }

        if (data) {
            data = JSON.parse(data);

            //agregar nuevo elementos
            data.forEach(element => {
                let opt = document.createElement('option');
                opt.value = element.id;
                opt.innerText = element.name;
                stage.appendChild(opt);
            });
        }
    };
});

const modal = document.getElementById('myModal');
const button = document.querySelector('.register_user');
const close = document.querySelectorAll(".close")[0];
const save_api = document.querySelector('.api');
const send_lead = document.getElementById("sendLead");

save_api.onclick = function () {

    let api = prompt("Please enter your api GHL");
    if (api != null) {
        set_api(api);
    }

}

const openModal = function () {
    modal.style.display = "block"
    //verificar si existe un api añadida
    if (localStorage.getItem("api_key")) {
        console.log("Api registrada");
        get_contact();
        pipelines();
        tags();
        users();
    } else {
        alert("No existe una API registrada");
    }
}
const closeModal = function () {
    modal.style.display = "none"
}
//event listeners
button.addEventListener('click', openModal, false);
close.addEventListener('click', closeModal, false);
send_lead.onclick = function () {
    sendLead();
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}


//========================================API GHL================================================
function set_api(api) {
    //localStorage.setItem("api_key", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6IjNraEF6WjhoY1hNa2UwVzRSMUN1IiwiY29tcGFueV9pZCI6ImpCNkNNdE84Q2JpUzNvaGdJY2Z5IiwidmVyc2lvbiI6MSwiaWF0IjoxNjQyODc5Njc0OTk1LCJzdWIiOiJaSnBSWFcwOUh2R1lNS2xNbzV4ZyJ9.p-xQHM0HuHMhBdWiRYzlKhokYYjBJDVYqQq-KI6aIuc");
    localStorage.setItem("api_key", api);

}

async function pipelines() {

    var api = localStorage.getItem('api_key');

    if (!api) {
        return;
    }

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + api);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    var data;

    await fetch("https://rest.gohighlevel.com/v1/pipelines/", requestOptions)
        .then(response => response.text())
        .then(result => data = JSON.parse(result))
        .catch(error => console.log('error', error));

    var pipeline = document.getElementById('pipeline');

    data = data.pipelines;

    removeAllChildNodes(pipeline);

    console.log(data);

    var opt = document.createElement('option');
    opt.value = "0";
    opt.innerHTML = "Seleccione un Pipeline";
    pipeline.appendChild(opt);

    data.forEach((element) => {
        opt = document.createElement('option');
        opt.value = element.id;
        opt.innerHTML = element.name;
        opt.setAttribute("stage", JSON.stringify(element.stages));
        pipeline.appendChild(opt);
    });

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

async function tags() {

    var api = localStorage.getItem('api_key');

    if (!api) {
        return;
    }

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + api);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    var data;

    await fetch("https://rest.gohighlevel.com/v1/tags/", requestOptions)
        .then(response => response.text())
        .then(result => data = JSON.parse(result))
        .catch(error => console.log('error', error));

    var tags = document.getElementById('tags');

    data = data.tags;

    removeAllChildNodes(tags);

    console.log(data);

    data.forEach((element) => {
        var opt = document.createElement('option');
        opt.value = element.id;
        opt.innerHTML = element.name;
        tags.appendChild(opt);
    });
}

async function users() {

    var api = localStorage.getItem('api_key');

    if (!api) {
        return;
    }

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + api);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    var data;

    await fetch("https://rest.gohighlevel.com/v1/users/", requestOptions)
        .then(response => response.text())
        .then(result => data = JSON.parse(result))
        .catch(error => console.log('error', error));

    var user = document.getElementById('users');

    data = data.users;
    console.log(data);

    data.forEach((element) => {
        var opt = document.createElement('option');
        opt.value = element.id;
        opt.innerHTML = element.name;
        user.appendChild(opt);
    });

}

function get_contact() {

    var infoSelect = document.querySelector('.info_user.display_flex');
    var name_user = infoSelect.childNodes[3];
    name_user = name_user.childNodes[1];
    document.getElementById('phone_user').value = infoSelect.dataset.element;
    document.getElementById('name_user').value = name_user.innerHTML;

}

async function sendLead() {

    let tags = $('#tags').find(':selected');
    let send_tags = "";
    let array_tags = [];

    for (let index = 0; index < tags.length; index++) {
        send_tags = send_tags + tags[index].innerText.toLowerCase() + ",";
        array_tags.push(tags[index].innerText.toLowerCase());

    }
    console.log(array_tags);
    console.log(send_tags);

    var api = localStorage.getItem('api_key');

    if (!api) {
        alert("Not API KEY");
        return;
    }

    let pipeline = document.getElementById('pipeline').value;
    let stage = document.getElementById('stage').value;
    let user = document.getElementById('users').value;
    let monetary = document.getElementById('monetary').value;

    let name = document.getElementById('name_user').value;
    let email = document.getElementById('email_user').value;
    let phone = document.getElementById('phone_user').value;

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + api);
    myHeaders.append("Content-Type", "application/json");

    raw = JSON.stringify({
        "title": name,
        "email": email,
        "phone": phone,
        "status": "open",
        "stageId": stage,
        "assignedTo": user,
        "monetaryValue": monetary,
        "source": "whatsapp",
        "name": name,
        "tags": array_tags
    });

    requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    await fetch("https://rest.gohighlevel.com/v1/pipelines/" + pipeline + "/opportunities/", requestOptions)
        .then(response => response.text())
        .then(result => {

            console.log(result);
            document.getElementById('name_user').value = "";
            document.getElementById('email_user').value = "";
            document.getElementById('phone_user').value = "";
            alert("Registrado");

        })
        .catch(error => console.log('error', error));


}