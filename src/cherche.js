import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';
class Cherche extends Component {
    constructor() {
        super()
        this.state = {
            rating: 1,
           
        }
    }

    onStarClick = (nextValue) => {
        this.setState({ rating: nextValue });
        this.props.onratingchange(nextValue)
    }

   
    render() {
        const { rating } = this.state;
        return (
            <Container>
                <Row className='input-searsh-title-etoile'>
                    <Col lg={9} md={8} sm={12} className='buttonetinput'>
                        <input onChange={(e)=>this.props.onhandlechange(e.target.value)} className='input' type='text' placeholder='Search Type movie name to '></input>
                        <button className='button' type='button'>Search</button>
                    </Col>
                    <Col className='titre-etoile' lg={2} md={4} sm={12}>
                            <span className='titredesetoile'>Minimum rating</span>
                            <StarRatingComponent
                                className='etoile'
                                starCount={5}
                                value={rating}
                                onStarClick={this.onStarClick}
                            />            
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Cherche;