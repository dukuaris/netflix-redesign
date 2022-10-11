// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDt-q89EsKCsbaxyxpnuruYzU-2FkPXzZg',
  authDomain: 'netflix-project-86788.firebaseapp.com',
  projectId: 'netflix-project-86788',
  storageBucket: 'netflix-project-86788.appspot.com',
  messagingSenderId: '593690242369',
  appId: '1:593690242369:web:5ccb3d149fc0ab0dcf85c0',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
