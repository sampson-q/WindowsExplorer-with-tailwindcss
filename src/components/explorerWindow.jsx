import React, { Component } from 'react';
import TitleBar from './titleBar';
import TabOptions from './tabOptions';

class ExplorerWindow extends Component {
    render() { 
        return (
            <div className='explorer-window'>
                <TitleBar/>
                <TabOptions />
            </div>
        );
    }
}
 
export default ExplorerWindow;