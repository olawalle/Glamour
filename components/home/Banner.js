import React, { useState } from 'react';
import { Header, Segment, Grid, Container } from 'semantic-ui-react';
import SearchForm from './SearchForm';

const Banner = (props) => {

  const styles = {
    Segment: {
      background: '#020202',
      backgroundImage: 'url(/static/images/homebanner.png)',
      backgroundSize: 'cover',
      minHeight: '700px',
      margin: '0px',
      borderRadius: '0px'
    },
    Header: {
      fontFamily: 'fontfreightproblack',
      color: 'white',
      fontSize: '45px',
    },
    SubHeader: {
      color: 'white',
      fontSize: '20px',
    },
    Column: {
    },
    Row: {
    },
    Container: {
    }
  }

  return (
    <Segment className="home is-v-centered" style={styles.Segment}>
      <Container style={styles.Container} fluid>
        <Grid stackable stretched verticalAlign="middle"  columns={4} centered>
          <Grid.Row centered verticalAlign="middle" style={styles.Row} stretched>
            <Grid.Column className="is-v-centered" textAlign="center" width="10" style={styles.Column}>
              <div className="header-container" >
                <Header as="h3" style={styles.Header}>
                  Expert beauty services right when
                </Header>
                <Header as="h3" style={styles.Header}>
                  you need them
                </Header>
              </div>
              <div className="subheader-container" >
                <Header.Subheader style={styles.SubHeader}>
                  Life finds a way. Do you have any idea how long it takes those cups to
                </Header.Subheader>
                <Header.Subheader style={styles.SubHeader}>
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