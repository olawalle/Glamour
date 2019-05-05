import React from 'react';
import { List, Image, Divider } from 'semantic-ui-react';
import './less/message.less';
import Router from 'next/router';

const Message = (props) => {

  let styles = {};
  if (props.isViewing) {
    styles = {
      borderLeft: '4px solid #E84671',
      background: 'rgba(33, 43, 54, 0.02)'
    }
  }

  const handleClick = () => {
    let threadId = 29999999;
    return Router.push('/messages?threadId=29999999',  `/messages/${threadId}/thread`)
  }

  return (
    <>
      <List.Item style={styles} onClick={handleClick} className="message pb-0 pt-10">
        <div>
          <List.Content className="pl-10 pr-10">
            <div className="message-header">
              <div>
                <Image
                  className="h28 is-round"
                  src='/static/images/team/teammember1.png'
                />
                <span className="pl-10">
                  <strong className="fw900">
                    {/* {props.user.name} { ' ' } */}
                    Mary Jane { ' ' }
                  </strong>
                </span>
              </div>
              <div>
                {/* <p>{props.friendlyDate}</p> */}
                <p className="message-time">2 hours ago</p>
              </div>
            </div>

            <p className="message-snippet">
              <span className="is-grey">
                {/* {props.body} */}
                You're a very talented young man,
                with your own clever thoughts and ideas.
                Do you need a manager?...
              </span>
            </p>

          </List.Content>
          <Divider className="message-divider"/>
        </div>
      </List.Item>
      <Divider />
    </>
  );
}

export default Message;