import React from 'react'
import { Grid } from 'semantic-ui-react';
import './less/reviews.less'
import dayjs from 'dayjs';

const Reviews = (props) => {
    console.log(props)
  return (
    <div className="reviews">
    <Grid>
        {
            props.reviews.map((review, i) => {
                return <Grid.Row style={{borderBottom: '1px solid #c4cdd540'}}>
                        <Grid.Column  mobile={16} tablet={16} computer={16} largeScreen={16} widescreen={16}>
                            <p className="reviewBody">
                                {review.review.description}  
                            </p>
                        </Grid.Column>

                        <Grid.Column   mobile={4} tablet={16} computer={16} largeScreen={16} widescreen={16}>
                            <p className="serviceDuration">
                                {
                                    review.from.userPhoto && <img src={review.from.userPhoto} className="reviewerPhoto" alt=""/>
                                }

                            </p>
                            
                        </Grid.Column>
                        
                        <Grid.Column  mobile={8} tablet={16} computer={16} largeScreen={16} widescreen={16}>
                            <p className="reviewerName">
                                {review.from.name}
                            </p>
                            <p className="reviewDate">
                                {dayjs(review.review.createdAt).format('DD-MM-YYYY')}
                            </p>
                        </Grid.Column>
                    </Grid.Row>
            })
        }
        </Grid>      
    </div>
  )
}

export default Reviews
