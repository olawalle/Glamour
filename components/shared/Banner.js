import React from 'react';
import { Grid, Container, Segment } from 'semantic-ui-react';
import './less/Banner.less'

const Banner = (props) => {

  const styles = {
    Segment: {
      background: '#020202',
      backgroundImage: `url(${props.banner})`,
      backgroundSize: 'cover'
    },
    Header: {
      fontFamily: 'fontfreightproblack',
      color: 'white',
      fontSize: '45px'
    },
    Column: {
    },
    Row: {
      height: '400px'
    },
    Container: {
      height: '100%'
    }
  }

  return (
    <Segment style={styles.Segment} className="BannerWrap">
      <Container style={styles.Container} fluid>
        <Grid stretched verticalAlign="middle"  className="banner" columns={4} centered>
          <Grid.Row style={styles.Row} stretched>
            <Grid.Column textAlign="center" width="10" style={styles.Column}>
              <h1 style={styles.Header}>{ props.text }</h1>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
   );
}

export default Banner;