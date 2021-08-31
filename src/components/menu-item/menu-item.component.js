import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.css';

const MenuItem = ({ title, imageUrl, size, history, match }) => {
    return (
        <div className={`${size} menu-item`}>
            
            <div className='background-image'
                style={{ backgroundImage: `url(${imageUrl})` }}>
            </div>

            <div className='content' onClick={() => {history.push(match.url+'hats')}}>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>

        </div>
    );
};

export default withRouter(MenuItem);