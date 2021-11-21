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

//Data
import data from './data/dataFroggy.json'
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { useNavigate  } from "react-router-dom";

const Monitor = (state) => {

  //States for data on cards
  const [dataTemp, setdataTemp] = useState('');
  const [dataHr, setdataHr] = useState('');
  const [dataPh, setdataPh] = useState('');

  //Flags of variables general
  const [flagTemp, setflagTemp] = useState(false);
  const [flagPh, setflagPh] = useState(false);
  const [flagRh, setflagRh] = useState(false);

  let navigate = useNavigate();

  const fetchData = async () => {

    const dbRef = ref(db, 'data/');

    await get(query(dbRef)); //This should get the whole users node from db.

    //To add a listener you can use the onValue() method like,
    onValue(query(dbRef), snapshot => {
      const data = snapshot.val();
      getDataString(data);
    });
  }

  const checkAuth = () => {
    const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (!user) {
          navigate("/");
        } 
        });
  }

  //Split the data "xx.xx , xx.xx, xx.xx"
  const getDataString = (dataString) => {
    var arrayData = dataString.split(',');
    setdataPh(arrayData[0]);
    setdataTemp(arrayData[1]);
    setdataHr(arrayData[2]);
    
    //Show the alert for temp
    if(parseInt(arrayData[1]) < data.temp.minData || parseInt(arrayData[1]) > data.temp.maxData ){
      setflagTemp(true);
    }
    else{
      setflagTemp(false);
    }
    //Show the alert for PH
    if(parseInt(arrayData[0]) < data.rh.minData || parseInt(arrayData[0]) > data.rh.maxData ){
      setflagPh(true);
    }
    else{
      setflagPh(false);
    }
    //Show the alert for RH
    if(parseInt(arrayData[2]) < data.ph.minData || parseInt(arrayData[2]) > data.ph.maxData ){
      setflagRh(true);
    }
    else{
      setflagRh(false);
      
    }
  }

  useEffect(() => {
    checkAuth();
    fetchData();
    // eslint-disable-next-line
  }, [])

    return (
        <div>
            <div className="App">
            <NavbarComponent userEmail={state}/>
            <FluidComponent />
            <Variables temp={dataTemp} ph={dataPh} hum={dataHr} flagTemp={flagTemp} flagPh={flagPh} flagRh={flagRh}/>
            <Status temp={dataTemp} ph={dataPh} hum={dataHr} flagTemp={flagTemp} flagPh={flagPh} flagRh={flagRh} />
            <Footer />
            </div>
        </div>
    )
}

export default Monitor
