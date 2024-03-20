// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import{getFirestore} from "firebase/firestore"
import{getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV8NZKOwyI6KZnbI4eYw1i4U-7pVGYWxo",
  authDomain: "hi-twitter-95e98.firebaseapp.com",
  projectId: "hi-twitter-95e98",
  storageBucket: "hi-twitter-95e98.appspot.com",
  messagingSenderId: "287631650650",
  appId: "1:287631650650:web:b3ced629626c451e4b8d63",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth alanının referansını alma
export const auth = getAuth(app);

// google sağlayıcısı oluşturma
export const provider = new GoogleAuthProvider();

// veritabanının referansını alma
export const db =getFirestore(app);

// medya depolama alanının referansını alma
export const storage = getStorage(app);