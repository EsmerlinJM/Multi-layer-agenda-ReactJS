import React, { Component } from 'react'
import '../css/App.css'
import Form from './Form'   
import Table from './Table'
 
const apiUrl = 'http://www.raydelto.org/itla/agenda/';

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      data: [{
        nombre: '',
        apellido: '',
        telefono: ''
      }]
    }
  }

  componentDidMount() {
      this.getAll(apiUrl)
  }

  getAll = apiUrl => {
    fetch(apiUrl)
    .then(result => {
        return result.json();
    })
    .then(data => {
      this.setState({data : data});
    })
    .catch(e => {
        console.log(`Error: ${e}`);
    });
  }

  storeData = response => {
    fetch(apiUrl, {
        mode: 'no-cors',
        method: 'POST',
        body: JSON.stringify(response),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': '*'
        }
    }).then(r => {
        console.log('Enviado');
    }).catch(e => {
        console.log(`Error: ${e}`);
    });
}
  
  render() {
    return (
      <div className="content">
            <h2>Agenda Multicapas</h2>
            <Form storeData={this.storeData}/>
            <Table data={this.state.data}/>
      </div>
    );
  }
}

export default App;
