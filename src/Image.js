import React from 'react';

class Image extends React.Component {
    render() {
      return  <div>

        <h1>V-Libre ! {this.props.index}</h1>
        <img src={this.props.img} width="800" height="400"/>
        <br/>
        </div>

    }
}

export default Image
