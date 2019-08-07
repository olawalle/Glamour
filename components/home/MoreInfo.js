import React from 'react';
import { Container, Segment, Grid, Image, Header, Button } from 'semantic-ui-react';
import './less/moreInfo.less';

const MoreInfo = (props) => {
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
                I was part of something special.
                Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?
                What do they got in there? King Kong? So you two dig up, dig up dinosaurs?
              </Header.Subheader>
              <Button content="Get started" secondary/>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default MoreInfo;