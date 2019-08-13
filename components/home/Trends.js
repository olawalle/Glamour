import React from 'react';
import { Header, Container, Segment, Grid, Button } from 'semantic-ui-react';
// import { connect } from 'react-redux';
// import { getTopTrends } from '../../store';
// import { chunk } from 'lodash';
import Trend from './Trend';
import './less/trends.less'

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
  maleTrends: {
    height: '550px',
    backgroundImage: 'url(../../static/images/male-trends.png)',
    backgroundSize: 'cover'
  },
  Container: {
  }
}

const Trends = (props) => {
  return (
    <div className="trends">
      <div className="btn">
        Top trend
      </div>
      <h1 className="fade">
        Fade
      </h1>
      <p className="txt">
      Be part of a thriving community bringing on demand beauty services to Londoners. 
      </p>
    </div>
  );
}

export default Trends;