import React, { useState } from 'react';
import { Header, Segment, Grid, Container } from 'semantic-ui-react';
import SearchForm from './SearchForm';
import './less/banner.less';

const Banner = (props) => {
  return (
    <Segment className="is-v-centered home-banner">
      <Container>
        <Grid stackable stretched verticalAlign="middle"  columns={4} centered>
          <Grid.Row centered verticalAlign="middle" stretched>
            <Grid.Column className="is-v-centered" textAlign="center" mobile={16} tablet={10} largeScreen={10} widescreen={10}>
              <div className="header-container" >
                <Header as="h3">
                  Expert beauty services right when
                </Header>
                <Header as="h3">
                  you need them
                </Header>
              </div>
              <div className="subheader-container" >
                <Header.Subheader>
                  Life finds a way. Do you have any idea how long it takes those cups to
                </Header.Subheader>
                <Header.Subheader>
                  decompose. So you two dig up, dig up dinosaurs?
                </Header.Subheader>
              </div>
              <SearchForm />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}

export default Banner;