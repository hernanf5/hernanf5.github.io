const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const mensaje = document.getElementById('mensaje');

const form = document.getElementById('formulario');
const alerta = document.getElementById('alerta');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let regExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    let alertas = "";
    let mostrarAlertas = false;
    if(nombre.value.length<4){
        alertas+=`El nombre debe contener al menos 4 caracteres <br>`;
        mostrarAlertas = true;
    }
    if(!regExp.test(email.value)){
        alertas+=`El email no es valido <br>`;
        mostrarAlertas = true;
    }
    if(telefono.value.length<8){
        alertas+=`El telefono debe contener al menos 8 digitos <br>`;
        mostrarAlertas = true;
    }
    if(mensaje.value.length<10){
        alertas+=`El mensaje debe contener al menos 10 caracteres <br>`;
        mostrarAlertas = true;
    }
    if(mostrarAlertas){
        alerta.innerHTML = alertas;
    }

    if(!mostrarAlertas){
        alerta.innerHTML = "Mensaje enviado. Muchas gracias!";
        form.reset();
    }

})