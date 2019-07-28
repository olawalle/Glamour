import React from 'react';
import { Header, Container, Segment, Grid } from 'semantic-ui-react';
// import { connect } from 'react-redux';
// import { getTopTrends } from '../../store';
// import { chunk } from 'lodash';

const styles = {
  Segment: {
    backgroundImage: `url('/static/images/trend-bg.png')`,
    height: '500px',
    padding: '100px 0'
  },
  Header: {
    fontFamily: 'fontfreightbigproblack',
    margin: '14px 0px',
    fontSize: '32px',
    color: '#fff'
  },
  Header_: {
    fontFamily: 'fontfreightbigproblack',
    width: '400px',
    margin: '14px 0px',
    fontSize: '18px',
    color: '#fff'
  },
  Row: {
    marginBottom: '50px'
  },
  Container: {
  },
  inside: {
    padding: '0 100px'
  },
  button: {
    padding: '12px 20px',
    backgroundColor: '#979797',
    border: '0',
    marginTop: '80px',
    color:'#fff'
  }
}

const Trends = (props) => {
  return (
    <div style={styles.Segment}>
        <Grid stackable style={{padding: 0}}>
          <Grid.Column style={styles.inside} width={8}>
            <div >
              <img src="/static/images/male-banner.png" style={{width: '100%'}} />
            </div>
          </Grid.Column>
          <Grid.Column style={{padding: 0, textAlign: 'left'}} width={8}> 
            <button style={styles.button}>
              Top trend
            </button>
            <p style={styles.Header} >Fade</p>
            <p style={styles.Header_} >Be part of a thriving community bringing on demand beauty services to Londoners.</p>
          </Grid.Column>
        </Grid>
    </div>
   );
}

// const mapStateToProps = (state) => {
//   return {
//     trends: chunk(getTopTrends(state), 3)
//   }
// }

export default Trends;