import React, {Component} from 'react';
import TableRow from './TableRow.js'


class Table extends Component{
    constructor(props){
        super(props);
        this.state = {
            data :this.props.tableData,
        }
        this.updateSelectedItem = this.updateSelectedItem.bind(this);
    }
    updateSelectedItem(item)
    {
        this.props.updateSelectItem(item)
    }

    render(){
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
                        this.state.data.map( ( item )=>{
                            return <TableRow data={item} selectItem={this.updateSelectedItem}/>
                        })
                   }
                </tbody>
            </table>
        );
    }
}

export default Table;