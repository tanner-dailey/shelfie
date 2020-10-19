import React, {Component} from 'react';
import Product from '../Product/Product';
import axios from 'axios';

export default class Dashboard extends Component {
    componentDidMount(){
        this.props.showInv()
    }

    deleteProduct = (id) =>{
        axios.delete(`/api/product/${id}`);
        this.props.showInv();
    }
    
    render(){
        const mapInventory = this.props.inventory.map((product, i) => (
            <Product 
                key={i}
                product={product}
                deleteProduct={this.deleteProduct}
                selectFn={this.props.selectFn}
            />
        ))
        return(
            <div>
                {mapInventory}
            </div>
        )
    }
}