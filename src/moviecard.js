import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class MovieCard extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        // const { movie = {} } = this.props
        const {
            titre='title unavailable',
            image='https://www.mearto.com/assets/no-image-83a2b680abc7af87cfff7777d0756fadb9f9aecd5ebda5d34f8139668e0fc842.png',
            etoile= '5'
        } = this.props.movie
        return (
            <div className='card'>
                <StarRatingComponent
                    starCount={5}
                    value={etoile}
                    className='rating'
                />
                <img className='imgcard' src={image} alt="image unavailable"/>
                <hr />
                <p className='titre-decard'>{titre}</p>
            </div>
        );
    }
}

export default MovieCard;