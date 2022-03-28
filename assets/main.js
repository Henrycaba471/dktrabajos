"use strict";

const btnWhatsapp = document.getElementById("whatsapp"),
    btnInsta = document.getElementById("insta"),
    btnFacebook = document.getElementById("facebook");

    btnWhatsapp.addEventListener("click", sendMessage);

    function sendMessage(){
        const url = `https://api.whatsapp.com/send?phone=573016429794&text=Hola, Estoy interesado en una asesoria`;
        window.open(url);
    }

    btnInsta.addEventListener("click", addInsta);

    function addInsta() {
        const url = `https://www.instagram.com/invites/contact/?i=1l5y1c9xpdlg3&utm_content=o0axac1`;
        window.open(url);
    }

    btnFacebook.addEventListener("click", addFacebook);

    function addFacebook() {
        const url = `https://www.facebook.com/Dkasesoriasytrabajos-101140395896436/`;
        window.open(url);
    }