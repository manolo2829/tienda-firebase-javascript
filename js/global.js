
import { authUser } from "../firebase.js";
import { userOut } from "../firebase.js";

const buttonOut = document.querySelector('#linkSignOut')

let user = null

buttonOut.addEventListener('click', () => {
    userOut()
})

const readUser = () => {
    if(user){
        console.log('hay usuario')
    }else{
        console.log('no hay usuario')
    }
}

window.onload = function() {
    user = authUser()
    console.log(user)
}

