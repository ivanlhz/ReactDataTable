import React from 'react';
import {render} from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App';
import tableDataApp from './reducers/reducers' //Cargamos el redurcer que vamos a usar

//definimos el store
let store = createStore(tableDataApp)

const data = [
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
      ];


render(
  <Provider store={store}>
    <App data={data}/>
  </Provider>,
  document.getElementById('root')
);
