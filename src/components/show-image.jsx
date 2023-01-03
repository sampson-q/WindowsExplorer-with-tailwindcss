import React, { Component } from 'react';

import windowsExplorer from '../assets/windowsExplorer.png';

class ShowImage extends Component {
    render() { 
        return (
            <div>
                <img src={windowsExplorer} alt="" />
            </div>
        );
    }
}
 
export default ShowImage;