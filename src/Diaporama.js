import React from 'react';
import Image from './Image';
import Button from './Button';

class Diaporama extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            images: []
        };
        this.nextImage = this.nextImage.bind(this);
        this.previousImage = this.previousImage.bind(this);
        this.stop = this.stop.bind(this);
        this.play = this.play.bind(this);
        this.imagesList = ['first', 'second', 'third'];
        this.total = this.imagesList.length - 1;
    }

    componentDidMount(){
        const images = this.imagesList.map(image =>
            'images/diaporama/velib-' + image + '.jpeg'
        );
        this.setState({images})
        this.play()
    }

    nextImage() {
        this.setState({
            current: this.state.current === this.total ? 0 : this.state.current + 1
        })
    }

    previousImage() {
        this.setState({
            current: this.state.current === 0 ? 2 : this.state.current - 1
        })
    }

    play() {
        this.diapoRun = setInterval(() => this.nextImage()
        , 3000);
    }

    stop() {
        clearInterval(this.diapoRun)
    }

    render() {
        const image = <Image img={this.state.images[this.state.current]} index={this.state.current}/>
        return <div>
            {image}
            <Button action={this.previousImage} icon='fast_rewind'/>
            <Button action={this.play} icon='play_arrow'/>
            <Button action={this.nextImage} icon='fast_forward'/>
            <Button action={this.stop} icon='stop'/>
        </div>
    }
}

export default Diaporama
