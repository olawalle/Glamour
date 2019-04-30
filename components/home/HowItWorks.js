import React from 'react';
import { Header, Container, Segment, Grid, Button } from 'semantic-ui-react';
import Step from './Step';

const steps = [
  {
    header: '01. Choose your service',
    subHeader: "My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about.",
    image: "/static/images/how it works/choose_your_service.svg"
  },
  {
    header: '02. Choose a time and date',
    subHeader: "Life finds a way. Do you have any idea how long it takes those cups to decompose.",
    image: "/static/images/how it works/choose_a_time_and_date.svg"
  },
  {
    header: '03. Select service provider',
    subHeader: "Remind me to thank John for a lovely weekend. Just my luck, no ice. Hey, you know how I'm, like, always trying.",
    image: "/static/images/how it works/select_a_service_provider.svg"
  },
  {
    header: '04. Book service',
    subHeader: "I was part of something special. Do you have any idea how long it takes those cups to decompose.",
    image: "/static/images/how it works/book_service.svg"
  },
];

const HowItWorks = (props) => {

  const styles = {
    Segment: {
      backgroundColor: 'rgba(232, 70, 113, 0.02)',
      paddingBottom: '100px'
    },
    Header: {
      fontFamily: 'fontfreightproblack',
      margin: '34px 0px',
      marginBottom: '40px',
      fontSize: '32px'
    },
    Row: {
      marginBottom: '50px'
    },
    Container: {
    },
    Button: {
      height: '60px',
      width: '197px',
      margin: '40px 0px 10px 0px'
    }
  }

  return (
    <Segment style={styles.Segment}>
      <Container>
        <Header style={styles.Header} textAlign="center" as="h4">How it works</Header>
        <Grid stackable columns={4}>
          <Grid.Row  style={styles.Row} columns={4}>
            {
              steps.map((step) => (
                <Step key={step.id} {...step} />
              ))
            }
          </Grid.Row>
        </Grid>
        <div className="is-v-centered">
          <Button style={styles.Button} secondary content="Explore services" />
        </div>
      </Container>
    </Segment>
   );
}


export default HowItWorks;