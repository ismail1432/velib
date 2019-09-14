import React from 'react';
import Image from './Image';
import Button from './Button';

class Diaporama extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
        this.nextImage = this.nextImage.bind(this);
        this.previousImage = this.previousImage.bind(this);
        this.imagesList = ['first', 'second', 'third'];
        this.total = this.imagesList.length - 1;
    }

    nextImage() {
        this.setState({
            current: this.state.current == this.total ? 0 : this.state.current + 1
        })
    }

    previousImage() {

        this.setState({
            current: this.state.current == 0 ? 2 : this.state.current - 1
        })
    }

    render() {
        const images = this.imagesList.map(image =>
            'images/diaporama/velib-' + image + '.jpeg'
        );
        const image = <Image img={images[this.state.current]}/>

        return <div>
            {image}
            <Button action={this.previousImage} content='&#60;&#60;'/>
            <Button action={this.nextImage} content='>>'/>
        </div>
    }
}

export default Diaporama
