const btnEnsayo = document.getElementById("ensayo"),
btnTrabajos = document.getElementById("trabajos"),
btnProyectos = document.getElementById("proyectos"),
btnInfoLab = document.getElementById("info-lab"),
btnMapas = document.getElementById("mapas"),
btnTesis = document.getElementById("tesis"),
btnDiapositivas = document.getElementById("diapositivas"),
btnEmail = document.getElementById("email");


btnEnsayo.addEventListener("click", sendMessage);
btnTrabajos.addEventListener("click", sendMessage);
btnProyectos.addEventListener("click", sendMessage);
btnInfoLab.addEventListener("click", sendMessage);
btnMapas.addEventListener("click", sendMessage);
btnTesis.addEventListener("click", sendMessage);
btnDiapositivas.addEventListener("click", sendMessage);

function sendMessage(){
    const url = `https://api.whatsapp.com/send?phone=573016429794&text=Hola, Estoy interesado en una asesoria`;
    window.open(url);
}

btnEmail.addEventListener("click", sendMailMessage);

function sendMailMessage() {
    const url = `mailto:dktrabajos98@gmail.com?subject=Asesoria personalizada&body=Estoy interesado en una asesoria`;
    window.open(url);
}