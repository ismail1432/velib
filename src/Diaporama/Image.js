import React from 'react';

class Image extends React.Component {
    render() {
      return  <div>
        <img className={"circle"} src={this.props.img} width="800" height="400"/>
        <br/>
        </div>
    }
}

export default Image
