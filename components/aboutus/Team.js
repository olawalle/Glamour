import React from 'react';
import { Container, Segment, Header } from 'semantic-ui-react';
import TeamMembers from '../aboutus/TeamMembers';
import TeamMember from '../aboutus/TeamMember';
import { connect } from 'react-redux';
import { getTeamMembers } from '../../store';
import './less/team.less';

const Team = (props) => {
  return (
    <Segment className="team">
      <Container className="">
        <Header className="team-header" textAlign="center" as="h2">
          The Team
        </Header>
        <TeamMembers size={4}>
          {
            props.teamMembers.map((member, i) => (
              <TeamMember key={member.id} size={4} {...member} no={i} />
            )) 
          }
        </TeamMembers>
      </Container>
    </Segment>
   );
}

const mapStateToProps = (state) => {
  return {
    teamMembers: getTeamMembers(state)
  }
}

export default connect(mapStateToProps)(Team);