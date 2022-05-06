
import { authUser } from "../firebase.js";
import { userOut } from "../firebase.js";

const buttonOut = document.querySelector('#linkSignOut')
const userMethodsContainer = document.querySelector('#userMethodsContainer')
const buttonSend = document.querySelector('#buttonSendUser')

buttonOut.addEventListener('click', () => {
    userOut()
})


window.onload = function() {
    authUser()
}



