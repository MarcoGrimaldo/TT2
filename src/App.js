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
import AlertModal from './Components/AlertModal';

function App() {

  //MAX and MIN variables
  const MAX_TEMP = 20;
  const MIN_TEMP = 15;

  const MAX_RH = 90;
  const MIN_RH = 50;

  const MAX_PH = 8.5;
  const MIN_PH = 6.5;

  //Text in modals
  const MODAL_TEMP_TXT = 'Texto Temperatura'
  const MODAL_RH_TXT = 'Texto RH'
  const MODAL_PH_TXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus leo gravida, vehicula augue vel, scelerisque tortor. Proin ut iaculis justo, non tempor ante. Quisque in ante blandit, tincidunt orci porta, pretium tellus. Vestibulum mi nisi, commodo at nulla ac, ultrices semper est. Suspendisse potenti. Sed in interdum augue.'

  //States for data on cards
  const [dataTemp, setdataTemp] = useState('');
  const [dataHr, setdataHr] = useState('');
  const [dataPh, setdataPh] = useState('');

  //flags of modals
  const [alertModalTemp, setalertModalTemp] = useState(false);
  const [alertModalPh, setalertModalPh] = useState(false);
  const [alertModalRh, setalertModalRh] = useState(false);

  //Flags of variables general
  const [flagTemp, setflagTemp] = useState(false);
  const [flagPh, setflagPh] = useState(false);
  const [flagRh, setflagRh] = useState(false);

  const fetchData = async () => {

    const dbRef = ref(db, 'data/');

    await get(query(dbRef)); //This should get the whole users node from db.

    //To add a listener you can use the onValue() method like,
    onValue(query(dbRef), snapshot => {
      const data = snapshot.val();
      getDataString(data);
    });
  }

  //Close the modal from AlertModa.js to App.js
  const getCloseModal = (alertModalCh) => {

    if(alertModalCh === 'Temperatura'){
      setalertModalTemp(false);
    }
      
    if(alertModalCh === 'pH'){
      setalertModalPh(false);
    }
      
    if(alertModalCh === 'Humedad Relativa'){
      setalertModalRh(false);
    }
      
    
  }

  //Split the data "xx.xx , xx.xx, xx.xx"
  const getDataString = (dataString) => {
    var arrayData = dataString.split(',');
    setdataPh(arrayData[0]);
    setdataTemp(arrayData[1]);
    setdataHr(arrayData[2]);

    //Show the alert for temp
    if(parseInt(arrayData[1]) < MIN_TEMP || parseInt(arrayData[1]) > MAX_TEMP ){
      setalertModalTemp(true);
      setflagTemp(true);
    }
    else{
      setalertModalTemp(false);
      setflagTemp(false);
    }
    //Show the alert for PH
    if(parseInt(arrayData[0]) < MIN_PH || parseInt(arrayData[0]) > MAX_PH ){
      setalertModalPh(true);
      setflagPh(true);
    }
    else{
      setalertModalPh(false);
      setflagPh(false);
    }
    //Show the alert for RH
    if(parseInt(arrayData[2]) < MIN_RH || parseInt(arrayData[2]) > MAX_RH ){
      setalertModalRh(true);
      setflagRh(true);
    }
    else{
      setalertModalRh(false);
      setflagRh(false);
      
    }
    
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <NavbarComponent/>
      <FluidComponent />
      <Variables temp={dataTemp} ph={dataPh} hum={dataHr} flagTemp={flagTemp} flagPh={flagPh} flagRh={flagRh}/>
      <AlertModal propShow={alertModalTemp} title={'Temperatura'} text={MODAL_TEMP_TXT} getCloseModal={getCloseModal}/>
      <AlertModal propShow={alertModalPh} title={'pH'} text={MODAL_PH_TXT} getCloseModal={getCloseModal}/>
      <AlertModal propShow={alertModalRh} title={'Humedad Relativa'} text={MODAL_RH_TXT} getCloseModal={getCloseModal}/>
      <Status flagTemp={flagTemp} flagPh={flagPh} flagRh={flagRh} />
      <Footer />
    </div>
  );
}

export default App;
