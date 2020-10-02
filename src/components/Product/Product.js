import React, {Component} from 'react';

export default class Product extends Component {
    render(){
        return(
            <div>
                <p>{this.props.product.name}</p>
                <p>${this.props.product.price}</p>
                <img src={this.props.product.img} />
            </div>
        )
    }
}