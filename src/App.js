import React, { Component } from 'react';
import '../node_modules/materialize-css/bin/materialize.css';
import '../node_modules/materialize-css/bin/jquery-2.1.1.min.js';
import '../node_modules/materialize-css/bin/materialize.js';
import Card from './components/Card.js'
import Table from './components/Table.js'
import Details from './components/Details.js'

class App extends Component {
  constructor (props){
    super(props);
    this.state ={
      data : [
        {"id":1234,"team": "alpha","name":"mojopicon","email":"mojopicon@gmail.com"},
          {"id":1235,"team": "alpha","name":"paca","email":"paca@gmail.com"},
          {"id":1236,"team": "alpha","name":"penca","email":"penca@gmail.com"},
          {"id":1237,"team": "beta","name":"dark","email":"dark@gmail.com"},
          {"id":1238,"team": "beta","name":"zeus","email":"zeus@gmail.com"},
          {"id":1239,"team": "alpha","name":"juju","email":"juju@gmail.com"},
          {"id":1240,"team": "delta","name":"pedro","email":"pedro@gmail.com"},
          {"id":1241,"team": "delta","name":"bilma","email":"bilma@gmail.com"},
          {"id":1242,"team": "delta","name":"ilden","email":"ilden@gmail.com"},
          {"id":1243,"team": "delta","name":"zelda","email":"zelda@gmail.com"}
      ],
      selectedItem : null
    }
    this.updateSelectItem = this.updateSelectItem.bind(this);
  }

  updateSelectItem(element){
    this.setState({
      selectedItem : element
    })
  }

  render() {
    return (
        <div className="container">
          <div className="row">
            <Card class="col s3" title="Total" text={12+2} colorcontent="blue-grey darken-3" colortitle="blue-grey darken-4" />
            <Card class="col s3" title="Alpha" text={12+3} colorcontent="blue-grey darken-1" colortitle="blue-grey darken-4"/>
            <Card class="col s3" title="Beta" text={12+4}  colorcontent="blue-grey darken-1" colortitle="blue-grey darken-4" />
            <Card class="col s3" title="Delta" text={12+5} colorcontent="blue-grey darken-1" colortitle="blue-grey darken-4" />
          </div>
          <div className="row">
            <div className="col s8">
                <Table tableData={this.state.data} updateSelectItem={this.updateSelectItem} />
            </div>
            <div className="col s4">
                <h3>Detalles</h3>
                <Details items={this.state.selectedItem} />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
