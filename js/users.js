import { createUser } from "../firebase.js";
import { signUser } from "../firebase.js";

const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
let type = true
const userTitle = document.querySelector('#userTitle')
const buttonSend = document.querySelector('#buttonSendUser')
const form = document.querySelector('#formUser')


buttonSend.addEventListener('click', (e) => {
    e.preventDefault()
    const email = form.querySelector('#inputEmail').value;
    const password = form.querySelector('#inputPassword').value;
    if(type){
        createUser(email,password)
    }else{
        signUser(email, password)
    }
    form.reset()
})


if(urlParams.get('form') === 'checkin'){
    type = true
}else{
    type = false
}


if(type){
    userTitle.innerHTML = 'Registrarse'
    buttonSend.innerHTML = 'Crear'

}else{
    userTitle.innerHTML = 'Iniciar Sesion'
    buttonSend.innerHTML = 'Iniciar'
}



