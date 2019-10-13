import React from 'react';
import { Container, Segment, Grid, Image, Header, Button } from 'semantic-ui-react';
import './less/moreInfo.less';
import Router from 'next/router'

const MoreInfo = (props) => {
  const toServices = () => {
    Router.push('/signup/provider')
  }
  return (
    <Segment className="p0 moreInfo">
      <Grid stackable className="p0" verticalAlign="middle" columns={2}>
        <Grid.Row className="p0" centered verticalAlign="middle">
          <Grid.Column className="p0" width="8">
            <Image className="has-full-width more-info-img" src="/static/images/moreinfo.png" />
          </Grid.Column>
          <Grid.Column className="is-h-centered" textAlign="left" width="8" verticalAlign="middle">
            <div className="moreinfo-text">
              <Header as="h4">
                Are you a beauty service provider?
              </Header>
              <Header.Subheader>
                Are you interested in expanding your client base, scaling up, 
                and increasing revenue or are you making a move to go it alone in 
                the beauty industry? Partner with Glamour on Demand and or 
                Grooming on Demand platform and be part of a thriving community of 
                mobile beauty and hair professionals who have bossed up and taken charge of their businesses. 
              </Header.Subheader>
              <Button content="Get started"  secondary onClick={toServices}/>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default MoreInfo;