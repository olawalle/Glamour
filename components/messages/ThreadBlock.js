import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Input } from 'antd';
import 'antd/lib/input/style/index.css';
import 'antd/lib/icon/style/index.css';
import './less/threadBlock.less';

const ThreadBlock = (props) => {
  let prev;

  const determineMsgStyle = (msg, index, msgs) => {
    let computedStyle = {
      marginTop: prev != msg.origin ? '40px' : null,
      padding: msg.msg.length >= 120 ? '30px 20px' : null,
      maxWidth: !props.isInMobileView && !props.isInTabletView ? '55%' : '80%',
      display: index < msgs.length - 1 && msg.origin == msgs[index + 1].origin ? 'none' : null,
    };
    prev = msg.origin;
    return computedStyle;
  }

  return (
    <Card fluid className="no-box-shadow full threadblock-card">
      <Card.Header className="has-height-10 threadblock-header is-lv-centered pl-20">

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
      </Card.Header>
      <Card.Description className="has-height-80">
        <div className="is-h-centered">
          {/* <Icon type="sync" spin /> */}
        </div>
        {

          props.thread.map((msg, index, msgs) => {
            let styles = determineMsgStyle(msg, index, msgs);
            return (
              <div className="text-msg" key={index}>
                <p style={{...styles, display: 'block'}} className={msg.origin}>
                  {msg.msg}
                  <span style={{ display: styles.display}} className="is-grey meta">
                    <span>{msg.time}</span>
                    <img className="pl-10" src='/static/images/double_tick.svg'></img>
                  </span>

                </p>
              </div>
            );
          })
        }
      </Card.Description>
      <Card.Content className=" is-h-centered" extra>
        <Input.TextArea autosize={{ minRows: 3, maxRows: 6 }}placeholder="Type message"></Input.TextArea>
        <div className='threadblock-message--actions'>
          <Image onClick={() => alert('sd')} className='actions' src='/static/images/add-image-to-msg.svg' />
          <Image className='actions' src='/static/images/add-attachment-to-msg.svg'/>
          <Image className='actions' src='/static/images/add-emoji-to-msg.svg'/>
        </div>
      </Card.Content>
    </Card>
  );
}

export default ThreadBlock;