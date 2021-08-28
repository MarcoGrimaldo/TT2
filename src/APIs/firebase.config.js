import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAsT_tVzKoe5G3Qqp6IsrRuMXkuXgg7Baw",
    authDomain: "froggy-4cd76.firebaseapp.com",
    databaseURL: "https://froggy-4cd76-default-rtdb.firebaseio.com",
    projectId: "froggy-4cd76",
    storageBucket: "froggy-4cd76.appspot.com",
    messagingSenderId: "627644063678",
    appId: "1:627644063678:web:8c53441acd4666156a63ef"
  };
  
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


export default db;