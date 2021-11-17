import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB1pI7UKasLVVMflTm23QX545d3IIVVM3M",
    authDomain: "truthordrink-8a9c0.firebaseapp.com",
    projectId: "truthordrink-8a9c0",
    storageBucket: "truthordrink-8a9c0.appspot.com",
    messagingSenderId: "162948926146",
    appId: "1:162948926146:web:009b3a1dbbb084a478c95b",
    measurementId: "G-LF8PG063EQ"
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore();