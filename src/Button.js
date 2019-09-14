import React from 'react';

class Button extends React.Component{
    render() {
        return <a className= "waves-effect waves-light btn-large" onClick={this.props.action}>
            <i className="material-icons left">{this.props.icon}</i></a>
    }
}

export default Button
