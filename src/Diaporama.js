import React from 'react';

class Diaporama extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: 0,
        };
    }

    render() {

        function nextImage(e) {
            
        }

        const imagesList = [
            'first',
            'second',
            'third',
        ];

        const images = imagesList.map(image =>
            'images/diaporama/velib-'+image+'.jpeg'
        );

        return <div>
            <h1>Diaporama</h1>
            <img src={images[this.state.image]}/>
            <br/>
            <button onClick={() => alert('clic')}>
                >>
            </button>
        </div>
    }
}

export default Diaporama
