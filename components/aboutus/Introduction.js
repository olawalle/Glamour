import React from 'react';
import { Grid, Container, Segment, Image } from 'semantic-ui-react';

const styles = {
  Header: {
    fontFamily: 'fontfreightproblack',
    color: 'white',
    fontSize: '45px'
  },
  Column: {
    fontSize: '1.2em',
    // fontSize: '16px',
    fontFamily: 'sofiapro'
  },
  Row: {
    minHeight: '400px'
  },
  Container: {
    margin: '50px 0px',
    minHeight: '500px'
  },
  Image: {
    height: '500px'
  }
}

const Introduction = () => {
  return (
    <Container className="aboutus--introduction" style={styles.Container} >
      <Grid stackable columns={2}>
        <Grid.Row style={styles.Row}>
          <Grid.Column width="10" style={styles.Column}>
            <p className="mt-0">Did he just throw my cat out of the window? Did he just throw my cat out of the window? This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists.</p>
            <p>My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard! Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should. Yes, Yes, without the oops!</p>
            <p>Life finds a way. Must go faster. So you two dig up, dig up dinosaurs? Hey, you know how I'm, like, always trying to save the planet? Here's my chance. Do you have any idea how long it takes those cups to decompose. You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager?</p>
            <p>Did he just throw my cat out of the window? They're using our own satellites against us. And the clock is ticking. Life finds a way. This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. Checkmate... Hey, you know how I'm, like, always trying to save the planet? Here's my chance.ntually, you do plan to have dinosaurs on your dinosaur tour, right? Do you have any idea how long it takes those cups to decompose.</p>
          </Grid.Column>
          <Grid.Column width="6" style={styles.Column}>
            <Image style={styles.Image} src="/static/images/aboutusintroductionimg.png" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
   );
}

export default Introduction;