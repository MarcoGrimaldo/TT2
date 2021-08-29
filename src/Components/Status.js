import React from 'react';
import {Row, 
        Container,
        Col,
        Image
} from 'react-bootstrap';
import ImgAlert from '../images/alert.png'
//import ImgChecked from '../images/checked.png'
//import ImgWarning from '../images/warning.png'

const Status = () => {
    return (
        <Container className="var-container">
            <Row>
                <h1 style={{paddingBottom:'1rem'}}>Estatus</h1>
            </Row>
            <Row>
                <div>
                    <h3 >Todo en orden</h3>
                </div>
                
            </Row>
            <Row>
                <h5 style={{paddingBottom:'1rem',textAlign:'left'}}>Detalles</h5>
            </Row>
            <Row>
                <Col lg={9}>
                    <div>
                        <p style={{textAlign:'justify'}} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Curabitur scelerisque maximus placerat. In fermentum tempor nisl. 
                            Cras auctor vel mi quis tristique. Mauris vulputate mollis sapien id eleifend. 
                            Curabitur pellentesque tellus posuere arcu viverra, at consequat diam tristique. 
                            Quisque ac pharetra sem, vitae aliquet nulla. Phasellus a facilisis tellus. 
                        </p>
                    </div>
                </Col>
                <Col lg={3}>
                    <Image src={ImgAlert} fluid rounded width="50%"/>
                </Col>
            </Row>
        </Container>
    )
}

export default Status
