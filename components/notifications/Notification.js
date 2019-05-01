import React from 'react';
import { List, Image, Header, Button, Divider } from 'semantic-ui-react';

const Notification = (props) => {

  let styles = {};
    console.log(props)
  if (props.unseen) {
    styles = {
      borderLeft: '4px solid black'
    }
  }

  return (
    <>
      <List.Item style={styles} className="notification pl-30">
        <List.Content className="p5" floated='right'>
          <Button className="h60 fw900" basic>Leave review</Button>
        </List.Content>
        <Image className="h40 is-round" src={props.user.img} />
        <List.Content className="pl-10">
          <Header as="h4">
            <strong className="fw900">{props.user.name}</strong> <span className="is-grey">{props.body}</span>
          </Header>
          <p className="is-grey">{props.date}</p>
        </List.Content>

      </List.Item>
      <Divider />
    </>
  );
}

export default Notification;