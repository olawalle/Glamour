
import React, { useEffect, useRef } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Container, Grid, Image, Header } from 'semantic-ui-react';
import Testimonial from './Testimonial';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './less/testimonials.less';

const Testimonials = (props) => {

  const owlCarousel = useRef(null);

  const handleNextAction = () => {
  }

  const responsiveOptions = {
    0: {
      items: 1
    },
    670: {
      items: 2,
    },
    960: {
      items: 3
    }
  }

  return (
    <Container>
      <Header className="testimonials--header" textAlign="center">Testimonials</Header>
      <Grid centered columns={1}>
        <Grid.Row centered >
          <Grid.Column width={15}>
            <div className="testimonials">
              <OwlCarousel
                ref={owlCarousel}
                className="owl-theme"
                loop
                autoplay={false}
                margin={10}
                nav={false}
                responsive={responsiveOptions}
              >
              {
                props.testimonials.map((testimonial, index) => (
                  <Testimonial testimonial={testimonial} key={index}/>
                ))
              }
              </OwlCarousel>
            </div>
          </Grid.Column>
          <Image className="testimonials--next" onClick={handleNextAction} src="/static/images/nextslide.png" />
        </Grid.Row>
      </Grid>

    </Container>
  );
}

export default Testimonials;