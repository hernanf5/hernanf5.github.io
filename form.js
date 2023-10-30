const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const mensaje = document.getElementById('mensaje');

const form = document.getElementById('formulario');
let alertas = document.getElementById('alertas');

form.addEventListener('submit', (e) => {
    alertas.innerHTML = '';
    e.preventDefault();
    let regExp_mail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    let regExp_num = /^\d+$/;
    let mostrarAlertas = false;
    if(nombre.value.length<4){
        let p = document.createElement('p');
        p.innerHTML = `El nombre debe contener al menos 4 caracteres <br>`;
        alertas.appendChild(p)
        mostrarAlertas = true;
    }
    if(!regExp_mail.test(email.value)){
        let p = document.createElement('p');
        p.innerHTML = `El email no es valido <br>`;
        alertas.appendChild(p)
        mostrarAlertas = true;
    }
    if(!regExp_num.test(telefono.value)){
        let p = document.createElement('p');
        p.innerHTML = `El numero de telefono contiene caracteres no validos <br>`;
        alertas.appendChild(p)
        mostrarAlertas = true;

    }
    if(telefono.value.length<8){
        let p = document.createElement('p');
        p.innerHTML = `El telefono debe contener al menos 8 digitos <br>`;
        alertas.appendChild(p);
        mostrarAlertas = true;
    }

    if(mensaje.value.length<10){
        let p = document.createElement('p');
        p.innerHTML = `El mensaje debe contener al menos 10 caracteres <br>`;
        alertas.appendChild(p);
        mostrarAlertas = true;
    }

    if(!mostrarAlertas){
        let p = document.createElement('p');
        p.innerHTML = `Mensaje enviado. Muchas gracias!`;
        alertas.appendChild(p);
        form.reset();
    }

})