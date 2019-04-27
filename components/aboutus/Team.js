import React from 'react';
import { Container, Segment, Header } from 'semantic-ui-react';
import TeamMembers from '../aboutus/TeamMembers';
import TeamMember from '../aboutus/TeamMember';
import { connect } from 'react-redux';
import { getTeamMembers } from '../../store'

const styles = {
  Segment: {
    backgroundColor: 'rgba(232, 70, 113, 0.02)',
    paddingBottom: '100px'
  },
  Header: {
    fontFamily: 'fontfreightproblack',
    margin: '30px 0px',
    marginBottom: '35px',
  },
  Row: {
    height: '400px'
  },
  Container: {
    margin: '0px 0px',
  }
}

const Team = (props) => {
  return (
    <Segment style={styles.Segment}>
      <Container style={styles.Container} >
        <Header style={styles.Header} textAlign="center" as="h2">The Team</Header>
        <TeamMembers size={4}>
          {
            props.teamMembers.map(member => (
              <TeamMember key={member.id} size={4} {...member} />
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