import logo from './logo.svg';
import './App.css';
import db from './APIs/firebase.config';
import React,{useEffect} from 'react';
import {  doc, getDoc, collection, query, where } from "firebase/firestore";

function App() {

  const fetchBlogs = async() => {

    const docRef = doc(db, "froggy-4cd76-default-rtdb", "data");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }

    const citiesRef = collection(db, "cities");

    // Create a query against the collection.
    const q = query(citiesRef, where("state", "==", "CA"));
    console.log(q)

    //const dataRef = collection(db,"froggy-4cd76-default-rtdb");
    //console.log(dataRef);
    //const data = await setDoc(doc())
    //const data=await response.get();
    //data.docs.forEach(item=>{
    // setBlogs(data.data());
    //}
  }
  useEffect(() => {
    fetchBlogs();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
