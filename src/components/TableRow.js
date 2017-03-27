import React, {Component} from 'react'

class TableRow extends Component{
    render(){
        const {item, handleClick} = this.props
        return (
            <tr onClick={handleClick}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.team}</td>
            </tr>
        );
    }
}

export default (TableRow);