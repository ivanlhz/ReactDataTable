import React, {Component} from 'react';
import TableRow from './TableRow.js'
import {connect} from 'react-redux'
import { selectRow } from '../actions/actions'

class Table extends Component{
    render(){
        const {  dispatch, tableData } = this.props
        return (     
            <table className="highlight">
                <thead>
                <tr>
                    <th data-field="id" >Id</th>
                    <th data-field="name">Name</th>
                    <th data-field="team">Team</th>
                </tr>
                </thead>

                <tbody>
                   {
                        tableData.map(  item =>{
                            return <TableRow key={item.id} item={item} handleClick={()=> dispatch( selectRow(item) )} />
                        })
                   }
                </tbody>
            </table>
        );
    }
}

export default connect()(Table);