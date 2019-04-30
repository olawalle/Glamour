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
        <Image className="has-full-width" src={props.img} />
        <Header style={styles.Header} as='h4'>
          {props.name}
        </Header>
      </Grid.Column>
    </>
  );
}

export default Trend;