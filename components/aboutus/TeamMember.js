import React from 'react';
import { Header, Grid, Image } from 'semantic-ui-react';

const styles = {
  Column: {
    // fontSize: '18px',
    // fontFamily: 'sofiapro'
  },
  SubHeader: {},
  Header: {
    marginTop: '7px'
  }
}

const TeamMember = (props) => {
  return (
    <Grid.Column width={props.size} style={styles.Column}>
      <Image src={props.img} />
      <Header style={styles.Header} as='h4'>
        {props.name}
      <Header.Subheader style={styles.SubHeader}>{props.designation}</Header.Subheader>
      </Header>
    </Grid.Column>
  );
}

export default TeamMember;