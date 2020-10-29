import React from 'react';
import './form.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <div className='f3'>
                <p>This Magic Brain will detect faces in your pictures. Give it a try.</p>
            </div>
            <div className='center'>
                <div className='pa4 br3 shadow center form'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button className='w-30 grow f4 link ph3 pv2 white dib bg-light-purple' onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>

    );
};

export default ImageLinkForm;