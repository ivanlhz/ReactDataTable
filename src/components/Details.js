import React, {Component} from 'react';

class Details extends Component{
    render()
    {
        const {item} = this.props
        if(item == null){
            return (
                <p>Haz Click en un elemento para cargar todos sus datos.</p>
            );
        }else{
            return(
                <ul className="collection">
                   <li className="collection-item">{item.id}</li>
                   <li className="collection-item">{item.name}</li>
                   <li className="collection-item">{item.team}</li>
                   <li className="collection-item">{item.email}</li>
                </ul>
            );
        }
    }
}

export default Details;