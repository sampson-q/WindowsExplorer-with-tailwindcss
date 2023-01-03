import React, { Component } from 'react';
import ExplorerTab from './explorerTab';
import WindowsBtns from './windowBtns';

class TitleBar extends Component {
    render() { 
        return (
            <div className='title-bar'>
                <div className='w-full'><ExplorerTab /></div>
                <div className='w-40'><WindowsBtns /></div>
            </div>
        );
    }
}
 
export default TitleBar;