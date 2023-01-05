import React, { Component } from 'react';
import TitleBar from './titleBar';
import TabOptions from './tabOptions';
import BodyHead from './bodyHead';
import BodyBody from './bodyBody';
import Footer from './footer';

// import ShowImage from './showImage';

class ExplorerWindow extends Component {
    render() { 
        return (
            <div className='explorer-window'>
                <TitleBar/>
                <TabOptions />
                <BodyHead />
                <BodyBody />
                <Footer />
            </div>
        );
    }
}
 
export default ExplorerWindow;