import React,{useEffect, useState} from 'react';
import {Row, 
        Container,
        Col,
        Image
} from 'react-bootstrap';

//import ImgAlert from '../images/alert.png'
import ImgChecked from '../images/checked.png'
import ImgWarning from '../images/warning.png'

//Data
import data from '../data/dataFroggy.json';

const Status = ({temp,ph,hum,flagTemp, flagPh, flagRh}) => {
    //Text recomentations
    const [tempTxt, settempTxt] = useState('');
    const [rhTxt, setrhTxt] = useState('');
    const [phTxt, setphTxt] = useState('');

    useEffect(() => {
        checkVariables();
        // eslint-disable-next-line
    }, [temp,ph,hum])
  
    const checkVariables = () => {
        //Show the text for temp
      if(temp < data.temp.minData ){
        settempTxt(data.temp.statusLowerData);
      }
      else if(temp > data.temp.maxData){
        settempTxt(data.temp.statusUpperData);
      }
      else{
        settempTxt('');
      }

      //Show the txt for rh
      if(hum < data.rh.minData ){
        setrhTxt(data.rh.statusLowerData);
      }
      else if(hum > data.rh.maxData){
        setrhTxt(data.rh.statusUpperData);
      }
      else{
        setrhTxt('');
      }

      //Show the txt for ph
      if(ph < data.ph.minData ){
        setphTxt(data.ph.statusLowerData);
      }
      else if(ph > data.ph.maxData){
        setphTxt(data.ph.statusUpperData);
      }
      else{
        setphTxt('');
      }
    }

    return (
        <Container className="var-container">
            <Row>
                <h1 style={{paddingBottom:'1rem'}}>Estatus</h1>
            </Row>
            <Row>
                <div>
                {flagTemp || flagPh || flagRh ? 
                    <h3 >¡Variables fuera de rango!</h3>
                    :<h3 >Todo en orden</h3>
                }
                </div>
                
            </Row>
            <Row>
                <h5 style={{paddingBottom:'1rem',textAlign:'left'}}>Detalles</h5>
            </Row>
            <Row>
                <Col lg={9}>
                    <div>
                        <p style={{textAlign:'justify'}} >
                        {flagTemp || flagPh || flagRh ? 
                            ''
                            :'¡Muy bien! Todas las variables están dentro de los rangos ideales. Hay ranas felices. 🐸'
                        }
                            {flagTemp ? tempTxt : ''}
                            {flagRh ? rhTxt : ''}
                            {flagPh ? phTxt : ''}
                        </p>
                    </div>
                </Col>
                <Col lg={3}>
                    <Image src={flagTemp || flagPh || flagRh ? ImgWarning : ImgChecked} fluid rounded width="50%"/>
                </Col>
            </Row>
        </Container>
    )
}

export default Status
