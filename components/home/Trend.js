import React from 'react';
import { Header, Grid, Image } from 'semantic-ui-react';

const styles = {
  Column: {
  },
  SubHeader: {},
  Header: {
    marginTop: '7px'
  }
}

const Trend = (props) => {
  return (
    <>
      <Grid.Column  style={styles.Column}>
        <div style={{width: '100%', height: '200px', overflow: 'hidden', backgroundSize: 'cover', backgroundImage: `url(${props.pictureUrl})`}}>
        {/* <Image className="has-full-width" src={} /> */}
        </div>
        <Header style={styles.Header} as='h4'>
          {props.serviceName}
        </Header>
      </Grid.Column>
    </>
  );
}

export default Trend;