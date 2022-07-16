// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Additional firebase module configuration
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDgxYjIdHZ52f5rgR2Cy_lUTAuFsBQcRK8',
    authDomain: 'pets-care-814f7.firebaseapp.com',
    projectId: 'pets-care-814f7',
    storageBucket: 'pets-care-814f7.appspot.com',
    messagingSenderId: '739230472821',
    appId: '1:739230472821:web:08fc89cd4c89e9ef13b63c',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export default app
export { auth, firestore, storage }
