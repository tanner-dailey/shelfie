import React, {Component} from 'react';
import Product from '../Product/Product';

export default class Dashboard extends Component {
    render(){
        const mapInventory = this.props.inventory.map((product, i) => (
            <Product 
                key={i}
                product={product}
            />
        ))
        return(
            <div>
                {mapInventory}
            </div>
        )
    }
}