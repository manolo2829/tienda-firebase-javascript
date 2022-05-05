import { addProjectFirebase } from "../firebase.js"
import { readProductsFirebase } from "../firebase.js"

const buttonAddProduct = document.querySelector('#buttonAddProduct')
const productForm = document.querySelector('.productForm')
const productContainer = document.querySelector('#cardProductContainer')


buttonAddProduct.addEventListener('click', (e) => {
    const title = productForm.querySelector('#productTitle').value;
    const description = productForm.querySelector('#productDescription').value;
    const price = productForm.querySelector('#productPrice').value;
    addProjectFirebase(title, description, price)

    productForm.reset()
})

window.onload = function(){
    readProductsFirebase()
}