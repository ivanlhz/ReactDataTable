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
      data : this.props.data,
      alphaList: [],
      betaList: [],
      deltaList: [],
      selectedItem : null,
    }
    this.updateSelectItem = this.updateSelectItem.bind(this);
  }

  //Function que se ejecutará cuando se haga click en un elemento de la tabla
  updateSelectItem(element)
  {
    this.setState(
      {
        selectedItem : element
      })
  }

  //Despues de que se renderice el componente tanto en el cliente
  //Funcion del livecycle
  componentDidMount ()
  {
    var alist  = [];
    var blist = [];
    var dlist = [];

    this.state.data.forEach(function(element) {
      switch (element.team) {
        case 'alpha': alist.push(element);break;
        case 'beta': blist.push(element);break;
        case 'delta': dlist.push(element);break;
        default: break;
      }
    });

    this.setState({
      alphaList:alist,
      betaList:blist,
      deltaList:dlist
    });
  }

  render() 
  {
    return (
        <div className="container">
          <div className="row">
            <Card class="col s3" title="Total de equipos" text={this.state.data.length} colorcontent="blue-grey darken-3" colortitle="blue-grey darken-4" />
            <Card class="col s3" title="Equipo Alpha" text={this.state.alphaList.length} colorcontent="blue-grey darken-1" colortitle="blue-grey darken-4"/>
            <Card class="col s3" title="Equipo Beta" text={this.state.betaList.length}  colorcontent="blue-grey darken-1" colortitle="blue-grey darken-4" />
            <Card class="col s3" title="Equipo Delta" text={this.state.deltaList.length} colorcontent="blue-grey darken-1" colortitle="blue-grey darken-4" />
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
