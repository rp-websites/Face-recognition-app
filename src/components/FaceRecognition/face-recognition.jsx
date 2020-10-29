import React from 'react';
import './face-recognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img alt='' id='inputImage' width='500px' src={imageUrl} />
                <div className='bounding-box' 
            style={{top: box.topRow, right: box.rightCol, left: box.leftCol, bottom: box.bottomRow}}></div>
            </div>
        </div>
    );
};

export default FaceRecognition;