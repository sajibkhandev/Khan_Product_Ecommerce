
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBxn3Yo5hvBAy6bKApK28X1dLNYxNjGZOc",
  authDomain: "fdr-2503.firebaseapp.com",
  databaseURL: "https://fdr-2503-default-rtdb.firebaseio.com",
  projectId: "fdr-2503",
  storageBucket: "fdr-2503.firebasestorage.app",
  messagingSenderId: "279781549912",
  appId: "1:279781549912:web:5b2d4a681a807babfc672d"
};


const app = initializeApp(firebaseConfig);

export default firebaseConfig