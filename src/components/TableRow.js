import React, {Component} from 'react'

class TableRow extends Component{
    constructor(props){
        super(props);
        this.state = {
            item : this.props.data,
        }
        this.updateState = this.updateState.bind(this);
    }

    updateState(){
        this.props.selectItem(this.state.item);
    }
    render(){
        return (
            <tr onClick={this.updateState}>
                <td>{this.state.item.id}</td>
                <td>{this.state.item.name}</td>
                <td>{this.state.item.team}</td>
            </tr>
        );
    }
}

export default TableRow;