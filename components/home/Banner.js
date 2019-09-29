import React, { useState } from 'react';
import { Header, Segment, Grid, Container } from 'semantic-ui-react';
import SearchForm from './SearchForm';
import Navbar from '../shared/Navbar'
import './less/banner.less';

const Banner = (props) => {
  return (
    <Segment className="is-v-centered home-banner">
      <div className="navv">
        <Navbar from="banner" />
      </div>
      <Container>
        <Grid stackable stretched verticalAlign="middle"  columns={4} centered>
          <Grid.Row centered verticalAlign="middle" stretched>
            <Grid.Column className="is-v-centered" textAlign="center" mobile={16} tablet={10} largeScreen={10} widescreen={10}>
              <div className="header-container" >
                <Header as="h3">
                  On demand beauty service for
                </Header>
                <Header as="h3">
                  everyday people
                </Header>
              </div>
              <div className="subheader-container" >
                <Header.Subheader>
                  Be part of a thriving community bringing
                </Header.Subheader>
                <Header.Subheader>
                  on-demand beauty services to Londoners.
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