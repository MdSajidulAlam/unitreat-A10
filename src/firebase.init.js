// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAf7YuuDNtFJtUab9kMP1wZJ4APs-zeEbM",
    authDomain: "unitreat-2da99.firebaseapp.com",
    projectId: "unitreat-2da99",
    storageBucket: "unitreat-2da99.appspot.com",
    messagingSenderId: "249886995880",
    appId: "1:249886995880:web:34055cc337c3cf63c1d99d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
