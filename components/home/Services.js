import React from 'react';
import { Grid } from 'semantic-ui-react';

const Services = (props) => {
  return (
    <Grid stackable columns={props.columns}>
      {props.children}
    </Grid>
   );
}

export default Services;