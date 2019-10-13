import React from 'react';

class Button extends React.Component{
    render() {
        return <a className={`waves-effect waves-light btn-${this.props.btnSize}`} onClick={this.props.action} type={this.props.type}>
            <i className="material-icons left">{this.props.icon}</i>{this.props.content}</a>
    }
}

export default Button
