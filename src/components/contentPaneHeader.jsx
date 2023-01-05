import React, { Component } from 'react';

class ContentPaneHeader extends Component {
    render() { 
        return (
            <div className="content-pane-header">
                <div className='border-r border-[#5e5d5d] w-64'>Name</div>
                <div className='border-r border-[#5e5d5d] px-4 w-52'>Date Modified</div>
                <div className='border-r border-[#5e5d5d] px-4 w-36'>Type</div>
                <div className='border-r border-[#5e5d5d] px-4 w-24'>Size</div>
            </div>
        );
    }
}
 
export default ContentPaneHeader;