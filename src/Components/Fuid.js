import React from 'react';
import {Image} from 'react-bootstrap';
import FrogImage from '../images/frogs.jpg'

const FuidComponent = () => {
    var background = {backgroundSize : 'cover'};

    return (
        <div>
            <Image src={FrogImage} style={background} fluid />
        </div>
    )
}

export default FuidComponent
