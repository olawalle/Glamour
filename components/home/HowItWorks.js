import React from 'react';
import { Header, Container, Segment, Grid, Button } from 'semantic-ui-react';
import Step from './Step';
import './less/howItWorks.less';
import Router from 'next/router'

const steps = [
  {
    header: '01. Choose your service',
    subHeader: "Select your beauty service from our range of mobile beauty services, from make-up to massages and hair removals.",
    image: "/static/images/how it works/choose_your_service.svg"
  },
  {
    header: '02. Choose a time and date',
    subHeader: "Choose a time that suit your lifestyle and schedule. Select a time, date and location that suits you or book instantly from selected partners.",
    image: "/static/images/how it works/choose_a_time_and_date.svg"
  },
  {
    header: '03. Select service provider',
    subHeader: "Select from our range of professionals and vetted partners. They will come to you at your chosen location and time.",
    image: "/static/images/how it works/select_a_service_provider.svg"
  },
  {
    header: '04. Book service',
    subHeader: "Secure your place and you’re ready to go. Your Beauty specialist will be at your door in no time without any hassle",
    image: "/static/images/how it works/book_service.svg"
  },
];

const HowItWorks = (props) => {
  const toServices = () => {
    Router.push('/serviceproviders')
  }
  return (
    <Segment className="howItWorks">
      <Container>
        <Header className="howItWorks-header" textAlign="center" as="h4">
          How it works
        </Header>
        <Grid stackable columns={4}>
          <Grid.Row columns={4}>
            {
              steps.map((step, index) => (
                <Step key={index} {...step} />
              ))
            }
          </Grid.Row>
        </Grid>
        <div className="is-v-centered">
          <Button secondary content="Explore services" onClick={toServices}/>
        </div>
      </Container>
    </Segment>
   );
}


export default HowItWorks;