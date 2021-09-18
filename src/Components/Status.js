import React from 'react';
import {Row, 
        Container,
        Col,
        Image
} from 'react-bootstrap';
//import ImgAlert from '../images/alert.png'
import ImgChecked from '../images/checked.png'
import ImgWarning from '../images/warning.png'

const Status = ({flagTemp, flagPh, flagRh}) => {
    //Text in modals
    const TEMP_TXT = 'Texto Temperatura'
    const RH_TXT = 'Texto RH'
    const PH_TXT = 'PH Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus leo gravida, vehicula augue vel, scelerisque tortor. Proin ut iaculis justo, non tempor ante. Quisque in ante blandit, tincidunt orci porta, pretium tellus. Vestibulum mi nisi, commodo at nulla ac, ultrices semper est. Suspendisse potenti. Sed in interdum augue.'

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
                            :'AAAAAAAAA'
                        }
                            {flagTemp ? TEMP_TXT : ''}
                            {flagRh ? RH_TXT : ''}
                            {flagPh ? PH_TXT : ''}
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
