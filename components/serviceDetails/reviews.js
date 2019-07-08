import React from 'react'
import { Grid } from 'semantic-ui-react';
import './less/reviews.less'
import dayjs from 'dayjs';

const Reviews = (props) => {
  return (
    <div className="reviews">
    <Grid>
        {
            props.reviews.map((review, i) => {
                return <Grid.Row>
                        <Grid.Column  mobile={16} tablet={16} computer={16} largeScreen={16} widescreen={16}>
                            <p className="reviewBody">
                                {review.description}  
                            </p>
                        </Grid.Column>

                        <Grid.Column   mobile={4} tablet={16} computer={16} largeScreen={16} widescreen={16}>
                            <p className="serviceDuration">
                                {
                                    review.user.pictureUrl ? <img src={review.user.pictureUrl} className="reviewerPhoto" alt=""/> : 
                                    <img src="https://res.cloudinary.com/esectra-com/image/upload/v1559634183/avatar.png" className="reviewerPhoto" alt=""/>
                                }

                            </p>
                            
                        </Grid.Column>
                        
                        <Grid.Column  mobile={8} tablet={16} computer={16} largeScreen={16} widescreen={16}>
                            <p className="reviewerName">
                                {review.user.fullname}
                            </p>
                            <p className="reviewDate">
                                {dayjs(review.createdAt).format('DD-MM-YYYY')}
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
