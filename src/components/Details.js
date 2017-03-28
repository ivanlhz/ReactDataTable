import React, {Component} from 'react';

class Details extends Component{
    render()
    {
        const {item} = this.props
        if(item == null){
            return (
                <p>Click on table row to get all data associated to the clicked row.</p>
            );
        }else{
            return(
                <ul className="collection">
                {
                    Object.keys(item).map((key,index)=>{
                        return  <li key={key} className="collection-item">{item[key]}</li>
                    })
                }
                </ul>
            );
        }
    }
}

export default Details;