import React, {Component} from 'react';

export default class Product extends Component {
    render(){
        return(
            <div>
                <p>{this.props.product.name}</p>
                <p>${this.props.product.price}</p>
                <img src={this.props.product.img} />
                <button onClick={() => this.props.deleteProduct(this.props.product.id)}>delete</button>
                <button onClick={() => this.props.selectFn(this.props.product)}>edit</button>
            </div>
        )
    }
}