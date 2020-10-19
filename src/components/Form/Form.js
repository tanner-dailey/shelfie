import axios from 'axios';
import React, {Component} from 'react';

export default class Form extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            price: 0,
            imgurl: '',
            id: null,
            isEditing: false
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

    handleToggle = () => {
        this.setState({isEditing: !this.state.isEditing})
    }

    componentDidUpdate(prevProps){
        if(this.props.selected !== prevProps.selected){
            this.setState({id: this.props.selected.id}) 
            this.handleToggle()         
        }
    }

    addProduct(){
        axios.post('/api/product', {name: this.state.name, price: this.state.price, img: this.state.imgurl})
        this.cancelInput()
        this.props.showInv()
    }

    updateProduct = () => {
        axios.put(`/api/product/${this.state.id}`, {name: this.state.name, price: this.state.price, img: this.state.imgurl})
        this.cancelInput()
        this.handleToggle()
        this.props.showInv()
    }


    render(){
        return(
            <div>
                <div>
                    <input type='text' value={this.state.name} onChange={this.nameInput}></input>
                    <input type='number' value={this.state.price} onChange={this.priceInput}></input>
                    <input type='url' value={this.state.imgurl} onChange={this.imgInput}></input>
                </div>
                {this.state.isEditing
                ? (
                <div>
                    <button onClick={this.cancelInput}>Cancel</button>
                    <button onClick={this.updateProduct}>update</button>
                </div>
                )
                : (
                <div>
                    <button onClick={this.cancelInput}>Cancel</button>
                    <button onClick={this.addProduct}>Add to Inventory</button>
                </div>
                )}
            </div>
        )
    }
}