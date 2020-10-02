import axios from 'axios';
import React, {Component} from 'react';

export default class Form extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }

        this.nameInput = this.nameInput.bind(this);
        this.priceInput = this.priceInput.bind(this);
        this.imgInput = this.imgInput.bind(this);
        this.cancelInput = this.cancelInput.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }

    nameInput(e){
        this.setState({name: e.target.value})
    }
    
    priceInput(e){
        this.setState({price: e.target.value})
    }

    imgInput(e){
        this.setState({imgurl: e.target.value})
    }

    cancelInput(){
        this.setState({
            name: '',
            price: 0,
            imgurl: ''
        })
    }

    addProduct(){
        axios.post('/api/product', {name: this.state.name, price: this.state.price, img: this.state.imgurl})
        this.props.showInv()
        this.cancelInput();
    }

    render(){
        return(
            <div>
                <div>
                    <input type='text' value={this.state.name} onChange={this.nameInput}></input>
                    <input type='number' value={this.state.price} onChange={this.priceInput}></input>
                    <input type='url' value={this.state.imgurl} onChange={this.imgInput}></input>
                </div>
                <div>
                    <button onClick={this.cancelInput}>Cancel</button>
                    <button onClick={this.addProduct}>Add to Inventory</button>
                </div>
            </div>
        )
    }
}