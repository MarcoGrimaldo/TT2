import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import db from './APIs/firebase.config';
import { ref, onValue, get, query} from "firebase/database";
import React,{useEffect,useState} from 'react';

//Components
import NavbarComponent from './Components/Navbar';
import FluidComponent from './Components/Fuid';
import Variables from './Components/Variables';
import Status from './Components/Status';
import Footer from './Components/Footer';

function App() {
  const [dataTemp, setdataTemp] = useState('');
  const [dataHr, setdataHr] = useState('');
  const [dataPh, setdataPh] = useState('');

  const fetchData = async () => {

    const dbRef = ref(db, 'data/');

    await get(query(dbRef)); //This should get the whole users node from db.

    //To add a listener you can use the onValue() method like,
    onValue(query(dbRef), snapshot => {
      const data = snapshot.val();
      getDataString(data);
    });
  }

  const getDataString = (dataString) => {
    var arrayData = dataString.split(',');
    setdataPh(arrayData[0]);
    setdataTemp(arrayData[1]);
    setdataHr(arrayData[2]);
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <NavbarComponent/>
      <FluidComponent />
      <Variables temp={dataTemp} ph={dataPh} hum={dataHr}/>
      <Status/>
      <Footer />
    </div>
  );
}

export default App;
