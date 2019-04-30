import React from 'react';
import { Header, Image, Grid } from 'semantic-ui-react';

const styles = {
  Header: {
    marginBottom: '15px'
  },
  SubHeader: {
    marginTop: '0px'
  }
}

const Step = (props) => {
  return (
    <Grid.Column className="step">
      <Image className="h40" src={props.image} />
      <Header style={styles.Header} as="h3">{props.header}</Header>
      <Header style={styles.SubHeader} className="is-grey fw100" as="h4">{props.subHeader}</Header>
    </Grid.Column>
  );
}

export default Step;