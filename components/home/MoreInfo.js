import React from 'react';
import { Container, Segment, Grid, Image, Header, Button } from 'semantic-ui-react';

const styles = {
  Row: {
    backgroundColor: 'rgba(232, 70, 113, 0.02)',
  },
  Button: {
    height: '60px',
    width: '154px'
  },
  Header: {
    fontFamily: 'fontfreightproblack',
    margin: '34px 0px 15px 0px',
    fontSize: '32px'
  },
  Subheader: {
    fontSize: '15px',
    color: '#637381',
    marginBottom: '20px'
  },
  Image: {
    width: '100%'
  }
}

const MoreInfo = (props) => {
  return (
    <Segment className="p0">
      <Grid stackable className="p0" verticalAlign="middle" columns={2}>
        <Grid.Row style={styles.Row} className="p0" centered verticalAlign="middle">
          <Grid.Column className="p0" width="8">
            <Image style={styles.Image} src="/static/images/moreinfo.png" />
          </Grid.Column>
          <Grid.Column className="is-h-centered" textAlign="left" width="8" verticalAlign="middle">
            <div className="moreinfo-text">
              <Header style={styles.Header} as="h4">Are you a beauty service provider?</Header>
              <Header.Subheader style={styles.Subheader}>
                I was part of something special.
                Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?
                What do they got in there? King Kong? So you two dig up, dig up dinosaurs?
              </Header.Subheader>
              <Button style={styles.Button} content="Get started" secondary/>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default MoreInfo;