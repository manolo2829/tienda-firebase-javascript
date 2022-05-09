
import { authUser } from "../firebase.js";
import { userOut } from "../firebase.js";

const buttonOut = document.querySelector('#linkSignOut')
const userMethodsContainer = document.querySelector('#userMethodsContainer')
const loginMethodsContainer = document.querySelector('#loginMethodsContainer')
const adminMethodsContainer = document.querySelector('#adminMethodsContainer')

let userFirebase = false

const userMethods = userMethodsContainer.querySelector('#userMethods')

buttonOut.addEventListener('click', () => {
    userOut()
})

export const userContentWrite = (user) => {
    userFirebase = user
    if(userFirebase!=false){
        userMethodsContainer.classList.remove('d-none')
        loginMethodsContainer.classList.add('d-none')
        adminMethodsContainer.classList.remove('d-none')
        userMethods.innerHTML = userFirebase.email

    }else{
        console.log('none')
        loginMethodsContainer.classList.remove('d-none')
        adminMethodsContainer.classList.add('d-none')
        userMethodsContainer.classList.add('d-none')
    }
}


window.onload = function() {
    authUser()
}


