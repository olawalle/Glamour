import React from 'react';
import { Header, Container, Segment, Grid } from 'semantic-ui-react';
// import { connect } from 'react-redux';
// import { getTopTrends } from '../../store';
// import { chunk } from 'lodash';
import Trend from './Trend';

const styles = {
  Segment: {
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
  }
}

const Trends = (props) => {
  return (
    <Segment>
      <Container>
        <Header style={styles.Header} textAlign="center" as="h4">Top trends</Header>
        <Grid stackable columns={3}>
          {
            props.trends.map((trendsGroup, index) => (
              <Grid.Row stretched key={index}  style={styles.Row}>
                {
                  trendsGroup.map((trend, index) => (
                    <Trend key={index} {...trend} />
                  ))
                }
              </Grid.Row>
            ))
          }
        </Grid>
      </Container>
    </Segment>
   );
}

// const mapStateToProps = (state) => {
//   return {
//     trends: chunk(getTopTrends(state), 3)
//   }
// }

export default Trends;