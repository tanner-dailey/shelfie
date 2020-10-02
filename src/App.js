import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form'
import axios from 'axios';

class App extends Component {
  constructor(){
    super();

    this.state = {
      inventory: []
    }
    this.showInv = this.showInv.bind(this)
  }

  showInv(){
   axios.get('/api/inventory')
   .then(res => {
     this.setState({inventory: res.data})
   })
   .catch(err => console.log(err))
  }
  componentDidMount(){
     this.showInv();
  }
  
  render(){
    return (
      <div>
        <Header />
        <Dashboard inventory={this.state.inventory} />
        <Form showInv={this.showInv}/>
      </div>
    );
  }
}

export default App;
