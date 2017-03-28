import { SELECT_ROW } from '../actions/actions'

//Funcion reducer que recibe siempre el estado y la accion que se esta realizando
// Siempre es un switch con los tipos de acciones que se pueden hacer y retorna los valores de la accion
function tableData(state = null, action)
{
    switch (action.type) {
        case SELECT_ROW: return action.row
        default: return state
    }

}

export default tableData