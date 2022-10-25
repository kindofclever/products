import { firebase, initializeApp } from '@firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = { 
        apiKey: "AIzaSyDjQ15ZcHh_3Ka1HGoM7I5kv1l_PaZb37o",
        authDomain: "quotescounter-e3aaf.firebaseapp.com",
        projectId: "quotescounter-e3aaf",
        storageBucket: "quotescounter-e3aaf.appspot.com",
        messagingSenderId: "1008425407015",
        appId: "1:1008425407015:web:925c048f5c7f1a08203402"   
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db };