import React from 'react';

import '../collection-item/collection-item.styles.css';


const CollectionItem = ({ item }) => (
    <div key={item.id} className='collection-item'>
        <div
            className='collection-item-image'
            style={{ backgroundImage: `url(${item.imageUrl})` }}
        >
        </div>
        <div className='add-to-cart'>
            ADD TO CART
        </div>
        <div className='collection-item-text'>
            <span className='collection-item-name' >{item.name}</span>
            <span className='collection-item-price' >{`$${item.price}`}</span>
        </div>
    </div>
);

export default CollectionItem;