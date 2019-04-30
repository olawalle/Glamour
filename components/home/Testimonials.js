
import React, { useEffect, useRef } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Container, Grid, Image, Header } from 'semantic-ui-react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const styles = {
  Image: {
    position: 'absolute',
    right: '0%',
    top: '36%',
    cursor: 'pointer'
  },
  Row: {
    position: 'relative'
  },
  Header: {
    fontFamily: 'fontfreightproblack',
    margin: '34px 0px',
    marginBottom: '40px',
    fontSize: '32px'
  },
  img: {
    height: '45px',
    width: '45px'
  }
}

const Testimonials = (props) => {

  const owlCarousel = useRef(null);

  const handleNextAction = () => {

    console.log(owlCarousel)
    console.log(owlCarousel.current.$ele.next(100));
  }

  return (
    <Container >
      <Header textAlign="center" style={styles.Header}>Testimonials</Header>
      <Grid centered columns={1}>
        <Grid.Row style={styles.Row} centered >
          <Grid.Column width={15}>
            <div className="testimonials">
              <OwlCarousel
                ref={owlCarousel}
                className="owl-theme"
                loop
                margin={10}
                nav={false}
                responsive={{
                  0: {
                    items: 1
                  },
                  670: {
                    items: 2,
                  },
                  960: {
                    items: 3
                  }
                }}
              >
              {
                props.testimonials.map((testimonial, index) => (
                  <div key={index} className="item">
                    <Header  className="fw100 testimonials--testimony" as="h4">{testimonial.testimony}</Header>
                    <Grid columns={2}>
                      <Grid.Row>
                        <Grid.Column className="pr-0" width={5}>
                          <Image style={styles.img} circular={true} size="tiny" src={testimonial.img} />
                        </Grid.Column>
                        <Grid.Column className="pl-0" width={11}>
                          <Header className="testimonials--fullname" as="h5">{testimonial.fullname}</Header>
                          <Header className="mt-0 testimonials--city is-grey " as="h5">{testimonial.city}</Header>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </div>
                ))
              }
              </OwlCarousel>
            </div>
          </Grid.Column>
          <Image onClick={handleNextAction} style={styles.Image} src="/static/images/nextslide.png" />
        </Grid.Row>
      </Grid>

    </Container>
  );
}

export default Testimonials;