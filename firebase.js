
  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { collection, getFirestore, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js"

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCg-MUQVm5bNqvissF-18SVO-o-0wAfjQ",
    authDomain: "tienda-javascript.firebaseapp.com",
    projectId: "tienda-javascript",
    storageBucket: "tienda-javascript.appspot.com",
    messagingSenderId: "757541128399",
    appId: "1:757541128399:web:3b97dabed2491c17360fba"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();



export const addProjectFirebase = async (title, description, price) => {
    try {
        const docRef = await addDoc(collection(db, "products"), {
          title,
          description,
          price
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

const productContainer = document.querySelector('#cardProductContainer')

export const readProductsFirebase = async() => {
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
        const id = doc.data()
        const Content = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${id.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${id.price}</h6>
                <p class="card-text">${id.description}</p>
            </div>
        </div>
        `
        productContainer.innerHTML += Content
    });
}

export const createUser = async(email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
    })
    .catch((error) => {
        console.log(error.code)
        console.log(error.errorMessage)
    });

}

export const signUser = async(email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    const user = userCredential.user;
    })
    .catch((error) => {
        console.log(error.code)
        console.log(error.errorMessage)
    });

}



export const authUser = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            return user;
        } else {
            return null
        }
    });
}

export const userOut = () => {
    signOut(auth).then(() => {
        console.log('sesion cerrada')
        authUser()
    }).catch((error) => {
        console.log(error)
    });
}
