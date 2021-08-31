import React from 'react';

import CollectionPreview from './../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data'

import '../shop/shop.styles.css';
class ShopPage extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        };
    };

    render() {
        return (
            <div className='shopPage'>
                { this.state.collections.map(
                    (collection) => (<CollectionPreview
                        key={collection.id}
                        title={collection.title}
                        items={collection.items}
                />))}
           </div> 
        );
    }
}

export default ShopPage;