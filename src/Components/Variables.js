import React, { useEffect,useState } from 'react';
import {Row, 
        Container,
        Col, 
        Card,
        Toast,
} from 'react-bootstrap';

//Images
import ImgAlert from '../images/alert.png'

//Data
import data from '../data/dataFroggy.json';

const Variables = ({temp,ph,hum,flagTemp, flagPh, flagRh}) => {

  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);
  const [showC, setShowC] = useState(false);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);
  const toggleShowC = () => setShowC(!showC);

  useEffect(() => {
      checkVariables();
      // eslint-disable-next-line
  }, [temp,ph,hum])

  const checkVariables = () => {
      //Show the alert for temp
    if(temp < data.temp.minData || temp > data.temp.maxData ){
        setShowA(true);
    }
    else{
        setShowA(false);
    }
    if(hum < data.rh.minData || hum > data.rh.maxData ){
        setShowB(true);
    }
    else{
        setShowB(false);
    }
    if(ph < data.ph.minData || ph > data.ph.maxData ){
        setShowC(true);
    }
    else{
        setShowC(false);
    }
  }

    return (
        <Container className="var-container">
            <Row>
                <h1 style={{paddingBottom:'1rem'}}>Variables</h1>
            </Row>
            <Row lg="3" md="1" sm="1">
                <Col sm="1">
                <Card
                        bg={flagTemp?"card-back-red":"card-back"}
                        
                    >
                        <Card.Body>
                        <Card.Title>
                            <h1 style={{
                                fontSize:'70px',
                                paddingBlock: '4rem'
                            }}
                            >
                                { parseFloat(temp).toFixed(1) } °C
                            </h1>
                        </Card.Title>
                        <Card.Text style={{fontSize:'30px'}}>
                            Temperatura
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    
                    <Toast show={showA} onClose={toggleShowA}>
                        <Toast.Header>
                            <img
                            src={ImgAlert}
                            className="rounded me-2"
                            alt=""
                            width="30"
                            />
                            <strong className="me-auto">¡Alerta!</strong>
                        </Toast.Header>
                        <Toast.Body>{data.temp.toastData}</Toast.Body>
                    </Toast>

                </Col>
                <Col  sm="1">
                    <Card
                        bg={flagRh?"card-back-red":"card-back"}
                    >
                        <Card.Body>
                        <Card.Title>
                            <h1 style={{
                                fontSize:'70px',
                                paddingBlock: '4rem'
                            }}
                            >
                                { parseFloat(hum).toFixed(1) } %
                            </h1>
                        </Card.Title>
                        <Card.Text style={{fontSize:'30px'}}>
                            Humedad Relativa
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Toast show={showB} onClose={toggleShowB}>
                        <Toast.Header>
                            <img
                            src={ImgAlert}
                            className="rounded me-2"
                            alt=""
                            width="30"
                            />
                            <strong className="me-auto">¡Alerta!</strong>
                        </Toast.Header>
                        <Toast.Body>{data.rh.toastData}</Toast.Body>
                    </Toast>
                </Col>
                <Col  sm="1">
                <Card
                        bg={flagPh?"card-back-red":"card-back"}
                    >
                        <Card.Body>
                        <Card.Title>
                            <h1 style={{
                                fontSize:'70px',
                                paddingBlock: '4rem'
                            }}
                            >
                                pH { parseInt(ph)}
                            </h1>
                        </Card.Title>
                        <Card.Text style={{fontSize:'30px'}}>
                            Escala de pH
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Toast show={showC} onClose={toggleShowC}>
                        <Toast.Header>
                            <img
                            src={ImgAlert}
                            className="rounded me-2"
                            alt=""
                            width="30"
                            />
                            <strong className="me-auto">¡Alerta!</strong>
                        </Toast.Header>
                        <Toast.Body>{data.ph.toastData}</Toast.Body>
                    </Toast>
                </Col>
            </Row>
        </Container>
    )
}

export default Variables
