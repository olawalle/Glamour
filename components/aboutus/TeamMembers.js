import React from 'react';
import { Grid } from 'semantic-ui-react';

const TeamMembers = (props) => {
  return (
    <Grid  stackable columns={props.size}>
      {props.children}
    </Grid>
   );
}

export default TeamMembers;