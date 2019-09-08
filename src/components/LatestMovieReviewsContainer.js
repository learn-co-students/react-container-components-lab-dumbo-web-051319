import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'



const NYT_API_KEY = '1cyTQ7iyhQMmo7apnBmzHlGSA9gt4tx9';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here


class LatestMovieReviewsContainer extends Component {
    
    state = { 
        reviews: []
    }
    
    componentDidMount() {
        fetch(URL)
        .then(resp => resp.json())
        .then(resp => {
            this.setState({
                reviews: resp.results
            })
        })
    }

    render() { 
        return ( <div className= 'latest-movie-reviews'>
                <h3>The Latest Reviews!!</h3>
                <MovieReviews reviews={this.state.reviews}/>
            </div> 
            
            );
    }
}



export default LatestMovieReviewsContainer;