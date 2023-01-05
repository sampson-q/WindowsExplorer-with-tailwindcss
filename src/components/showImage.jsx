import React, { Component } from 'react';
import showImage from '../assets/windowsExplorer.png'

class ShowImage extends Component { 
    render() { 
        return (
            <div>
                <img src={showImage} alt="" />
            </div>
        );
    }
}
 
export default ShowImage;