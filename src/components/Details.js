import React, {Component} from 'react';

class Details extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: this.props.items
        }
    }
   componentDidUpdate()
   {
       if(this.state.data !== this.props.items){
           this.setState({data:this.props.items})
       }
   }
    render(){
        if(this.state.data == null){
            return (
                <p>Haz Click en un elemento para cargar todos sus datos.</p>
            );
        }else{
            return(
                <ul className="collection">
                   <li className="collection-item">{this.state.data.id}</li>
                   <li className="collection-item">{this.state.data.name}</li>
                   <li className="collection-item">{this.state.data.team}</li>
                   <li className="collection-item">{this.state.data.email}</li>
                </ul>
            );
        }
    }
}

export default Details;