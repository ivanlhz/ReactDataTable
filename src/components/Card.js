import React, {Component} from 'react';

class Card extends Component{

    render(){
        return(
            <div className={this.props.class}>
                <div className={"card " + this.props.colorcontent }>
                    <div className="card-content white-text">
                        <p>{this.props.text}</p>
                    </div>
                    <div className={"card-action " + this.props.colortitle}>
                         <span className="card-title white-text">{this.props.title}</span>
                    </div>
                </div>
            </div>
        );
    }

    
}
export default Card