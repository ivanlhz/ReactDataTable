/*
Aqui definimos los reducers o lo que va a retornar cuando ocurra una accion
*/
import { combineReducers } from 'redux'
import tableData from './tabledata'

//Cuando tenemos varios reducers debemos combinarlos en uno
// aqui no es necesario ponerlo pero es una buena practica
const tableDataApp = combineReducers({
    tableData
})

export default tableDataApp