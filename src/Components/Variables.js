import React from 'react';
import {Row, 
        Container,
        Col, 
        Card
} from 'react-bootstrap';

const Variables = ({temp,ph,hum}) => {
    return (
        <Container className="var-container">
            <Row>
                <h1 style={{paddingBottom:'1rem'}}>Variables</h1>
            </Row>
            <Row lg="3" md="1" sm="1">
                <Col sm="1">
                <Card
                        bg="card-back"
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
                </Col>
                <Col  sm="1">
                    <Card
                        bg="card-back"
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
                </Col>
                <Col  sm="1">
                <Card
                        bg="card-back"
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
                </Col>
            </Row>
        </Container>
    )
}

export default Variables
