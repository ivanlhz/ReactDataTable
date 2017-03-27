export const SELECT_ROW = 'SELECT_ROW'

/*
Declaramos la accion que vamos ha poder hacer
En este caso la accion es seleccionar una fila de la tabla de la cual obtendremos los datos de esa fila
*/
export function selectRow(row){
    return{
        type: SELECT_ROW,
        row
    }
}