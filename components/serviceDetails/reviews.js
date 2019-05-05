import React from 'react'
import { Grid } from 'semantic-ui-react';
import './less/reviews.less'

const Reviews = (props) => {
  return (
    <div className="reviews">
    <Grid stackable>
        <Grid.Row>
            <Grid.Column width={16}>
                <p className="reviewBody">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores mollitia, illum deleniti quaerat in voluptatibus ipsa nesciunt eos, maxime qui ab  
                </p>
            </Grid.Column>
            <Grid.Column width={2}>
                <p className="serviceDuration">
                    <img src="../static/images/team/teammember1.png" className="reviewerPhoto" alt=""/>
                </p>
            </Grid.Column>
            <Grid.Column width={13}>
                <p className="reviewerName">
                    Theresa May
                </p>
                <p className="reviewDate">
                    Theresa May
                </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>      
    </div>
  )
}

export default Reviews
