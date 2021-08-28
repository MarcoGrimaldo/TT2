import logo from './logo.svg';
import './App.css';
import db from './APIs/firebase.config';
import { ref, onValue, get, query} from "firebase/database";
import React,{useEffect} from 'react';

function App() {

  const fetchBlogs = async () => {

    const dbRef = ref(db, 'data/');

    const usersSnapshot = await get(query(dbRef)) //This should get the whole users node from db.

    console.log(usersSnapshot)

    //To add a listener you can use the onValue() method like,
    onValue(query(dbRef), snapshot => {
      console.log(snapshot.val())
    })
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
          TT2 
        </a>
      </header>
    </div>
  );
}

export default App;
