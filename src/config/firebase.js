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
    apiKey: 'AIzaSyCzncVrTTJzE7uysjEbeANcAIINwnYwLHE',
    authDomain: 'pets-care-f4e66.firebaseapp.com',
    projectId: 'pets-care-f4e66',
    storageBucket: 'pets-care-f4e66.appspot.com',
    messagingSenderId: '394440874026',
    appId: '1:394440874026:web:9ed9719c099e2f37b74b53',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export default app
export { auth, firestore, storage }
