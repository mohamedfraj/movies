import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import MovieCard from './moviecard';
import LoaderHOC from './LoaderHOC';


class MovieList extends Component {
    constructor(props) {
        super(props)
        this.state = {

        };
    }
    
    render() {
        
        
        return (
            <Container className="felx-cards">
                <div className="listecards">
                    {this.props.movietab.map(
                        (el, index) => <MovieCard key={index} movie={el} />
                        // (el, i) => <MovieCard key={i} titre={el.titre} image={el.image} etoile={el.etoile} />
                    )}
                    <div className="add-movie" onClick={()=>this.props.addmovie()}>+</div>
                </div>
            </Container>
        )
    }
}

export default LoaderHOC(MovieList);