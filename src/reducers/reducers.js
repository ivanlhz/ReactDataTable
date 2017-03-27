/*
Aqui definimos los reducers o lo que va a retornar cuando ocurra una accion
*/
import { combineReducers } from 'redux'
import SELECT_ROW from '../actions/actions'

//Funcion reducer que recibe siempre el estado y la accion que se esta realizando
// Siempre es un switch con los tipos de acciones que se pueden hacer y retorna los valores de la accion
function tableData(state = null, action){
    console.log(action.row)
    switch (action.type) {
        case SELECT_ROW: return action.row
        default: return state
    }

}

//Cuando tenemos varios reducers debemos combinarlos en uno
// aqui no es necesario ponerlo pero es una buena practica
const tableDataApp = combineReducers({
    tableData
})

export default tableDataApp