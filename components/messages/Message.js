import React, { useEffect } from 'react';
import { List, Image, Divider } from 'semantic-ui-react';
import './less/message.less';
import Router from 'next/router';

const Message = (props) => {
  let styles = {};
  if (props.isViewing) {
    styles = {
      borderLeft: '4px solid #33b0e6',
      background: 'rgba(33, 43, 54, 0.02)'
    }
  }

  const handleClick = (id) => {
    // Router.push(`/messages?conversationId=${props._id}`)
    props.getConvo(id.message._id)
  }

  return (
    <>
    {
      props.conversations.map((convo, index) => (
      <List.Item key={index}  
                style={styles} 
                onClick={() => handleClick(convo)} 
                className='message pb-0 pt-0'>
        <div>
          <List.Content className="pr-10 pt-0">
            <div className={ props.activeConversation === convo.message._id ? 'selected-convo message-header' : 'message-header' }>
              <div className="pl-10">
                {/* <Image
                  className="h28 is-round"
                  src={convo.from.userPhoto}
                /> */}

              <div style={{
                width: '40px', 
                display: 'inline-block', 
                height: '40px', 
                borderRadius: '50%', 
                overflow: 'hidden', 
                backgroundSize: 'cover', 
                position: 'relative',
                top: '10px',            
                backgroundImage: `url(${convo.from.userPhoto})`
                }}>
              </div>
                <span className="pl-10">
                  <strong className="fw900">
                    {convo.from.name} { ' ' }
                  </strong>
                  <p className="message-snippet">
                    <span className="is-grey">
                      {/* {props.body} */}
                      { props.thread.length > 0 && props.activeConversation === convo.message._id ? props.thread[props.thread.length - 1].message.body : 'click to read messages...'}
                    </span>
                  </p>
                </span>
              </div>
              <div>
                {/* <p>{props.friendlyDate}</p> */}
                <p className="message-time hide-mobile">
                  {
                    props.thread.length > 0 && props.activeConversation === convo.message._id ? props.thread[props.thread.length - 1].time : null
                  }
                </p>
              </div>
            </div>
          </List.Content>
          <Divider className="message-divider"/>
        </div>
        <Divider style={{margin: 0}} />
      </List.Item>
      ))
    }
    </>
  );
}

export default Message;