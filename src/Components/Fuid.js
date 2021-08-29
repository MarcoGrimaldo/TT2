import React from 'react';
import Image from 'react-bootstrap/Image';
import FrogImage from '../images/frogs.jpg'

const FuidComponent = () => {
    return (
        <div>
            <Image src={FrogImage} fluid />
        </div>
    )
}

export default FuidComponent
