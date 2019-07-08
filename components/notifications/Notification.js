import React from 'react';
import { List, Image, Header, Button, Divider } from 'semantic-ui-react';
import './less/notification.less';
import dayjs from 'dayjs'



const Notification = (props) => {

  let styles = {};
  if (props.unseen) {
    styles = {
      borderLeft: '4px solid black'
    }
  }

  const leaveReview = () => {
   props.setIsWritingReview(true);
  //  props.updateReview({
  //    user: {
  //     ...props.user,
  //     // avatar: props.user.img,
  //     id: 100
  //    },
  //    stars: 0,
  //    experience: '',
  //  })
  }

  return (
    <>
      <List.Item style={styles} className="notification pl-30">
        <List.Content className="p5" floated='right'>
          <Button onClick={leaveReview} className="h60 fw900" basic>Leave review</Button>
        </List.Content>
        <Image className="h40 is-round" src='/static/images/team/teammember1.png' />
        <List.Content className="pl-10">
          <Header as="h4">
            <strong className="fw900">
              {/* {props.user.name} { ' ' } */}
              Olawalle Ariyo { ' ' }
            </strong>
            <span className="is-grey">
              {props.body}
            </span>
          </Header>
          <p className="is-grey">{dayjs(props.createdAt).format('D MMM, YYYY')}</p>
        </List.Content>

      </List.Item>
      <Divider />
    </>
  );
}

export default Notification;