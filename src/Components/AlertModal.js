import React from 'react';
import {Modal, Button, Image} from 'react-bootstrap';
import ImgAlert from '../images/alert.png'

const AlertModal = ({propShow,title,text, getCloseModal}) => {

    const handleClose = () => {
        getCloseModal(title);
    }

    return (
        <div>
            <Modal
                show={propShow}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>
                    <Image src={ImgAlert} fluid rounded width="20%"/> Verficar {title}
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                
                {text}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="success" onClick={handleClose}>Entendido</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AlertModal
