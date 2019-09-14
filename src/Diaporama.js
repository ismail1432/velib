import React from 'react';
import Image from './Image';

class Diaporama extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
        this.nextImage = this.nextImage.bind(this);
        this.previousImage = this.previousImage.bind(this);
    }

    nextImage() {
     this.setState({
         current : this.state.current +1
     })
    }

    previousImage() {

        this.setState({
            current : this.state.current -1
        })
    }

    render() {
        const imagesList = ['first', 'second', 'third'];

        const images = imagesList.map(image =>
            'images/diaporama/velib-'+image+'.jpeg'
        );

        const image = <Image img={images[this.state.current]} />

        return <div>
            {image}
            <button onClick={this.previousImage}>
                &#60;&#60;
            </button>
            <button onClick={this.nextImage}>
                >>
            </button>
        </div>
    }
}

export default Diaporama
