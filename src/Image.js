import React from 'react';

class Image extends React.Component {
    render() {
      return  <div>

        <h1>Diaporama</h1>
        <img src={this.props.img}/>
        <br/>
        </div>

    }
}

export default Image
