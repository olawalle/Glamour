import React from 'react';
import { Header, Grid, Image } from 'semantic-ui-react';
import './less/team.less';

const TeamMember = (props) => {
  return (
    <Grid.Column width={props.size}>
      <Image src={props.img} />
      <Header className="mt-7" as='h4'>
        {props.name}
        <Header.Subheader>
          {props.designation}
        </Header.Subheader>
      </Header>
    </Grid.Column>
  );
}

export default TeamMember;