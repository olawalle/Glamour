import React from 'react';
import { Header, Grid, Image } from 'semantic-ui-react';

const Testimonial = (props) => {
  return (
    <div className="item">
      <Header  className="fw100 testimonials--testimony" as="h4">{props.testimonial.testimony}</Header>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column className="pr-0" width={5}>
            <Image className="testimonials--avatar" circular={true} size="tiny" src={props.testimonial.img} />
          </Grid.Column>
          <Grid.Column className="pl-0" width={11}>
            <Header className="testimonials--fullname" as="h5">{props.testimonial.fullname}</Header>
            <Header className="mt-0 testimonials--city is-grey " as="h5">{props.testimonial.city}</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default Testimonial;