import React, {useState, useEffect} from 'react';
import { Card, Image, Button, Loader } from 'semantic-ui-react';
import { Input } from 'antd';
import 'antd/lib/input/style/index.css';
import 'antd/lib/icon/style/index.css';
import './less/threadBlock.less';
import { sendMessage } from '../../services/auth.ts'
import Display from '../shared/Display';

const ThreadBlock = (props) => {
  let prev;


  useEffect(() => {
    let desc = document.getElementById('desc')
    desc.scrollTop = 34
  }, [])

  const [messageBody, setmessageBody] = useState("")
  const [sending, setsending] = useState(false)
  const determineMsgStyle = (msg, index, msgs) => {
    let computedStyle = {
      marginTop: prev != msg.origin ? '40px' : null,
      padding: msg.length >= 120 ? '30px 20px' : null,
      maxWidth: !props.isInMobileView && !props.isInTabletView ? '55%' : '80%',
      display: index < msgs.length - 1 && msg.origin == msgs[index + 1].origin ? 'none' : null,
    };
    prev = msg.origin;
    return computedStyle;
  }

  
  const sendMsg = () => {
    setsending(true)
    let msg = {
      conversationId: props.activeConversation,
      body: messageBody
    }
    sendMessage(msg)
    .then(res => {
      setsending(false)
      console.log(res)
      props.getConvo(props.activeConversation)
      setmessageBody('')
    })
    .catch(err => {
      setsending(false)
      console.log(err)
    })
  }

  const getValue = (e) => {
    setmessageBody(e.target.value)
  }

  return (
    <Card fluid className="no-box-shadow full threadblock-card">
      <Card.Header className="has-height-10 threadblock-header is-lv-centered pl-20">

          {/* <Image
            className="h28 is-round"
            src={
              props.conversations.find(conv => conv.message._id === props.activeConversation) ? 
              props.conversations.find(conv => conv.message._id === props.activeConversation).from.userPhoto : null
            }
          /> */}

          <div style={{
            width: '40px', 
            display: 'inline-block', 
            height: '40px', 
            borderRadius: '50%', 
            overflow: 'hidden', 
            backgroundSize: 'cover', 
            position: 'relative',
            // top: '10px',            
            backgroundImage: `url(${
              props.conversations.find(conv => conv.message._id === props.activeConversation) ? 
              props.conversations.find(conv => conv.message._id === props.activeConversation).from.userPhoto : null
              })`
            }}>
          </div>

          <span className="pl-10">
            <strong className="fw900">
              {/* {props.user.name} { ' ' } */}
              {
                props.conversations.find(conv => conv.message._id === props.activeConversation) ? 
                props.conversations.find(conv => conv.message._id === props.activeConversation).from.name : null
              } { ' ' }
            </strong>
          </span>
      </Card.Header>
      <Card.Description className="has-height-80" id="desc">
        <div className="is-h-centered">
          {/* <Icon type="sync" spin /> */}
        </div>
        {

          props.thread.map((msg, index, msgs) => {
            let styles = determineMsgStyle(msg, index, msgs);
            return (
              <div className="text-msg" key={index}>
                <p style={{...styles, display: 'block', minWidth: '20%'}} className={msg.origin}>
                  {msg.msg}
                  <span style={{ display: styles.display}} className="is-grey meta">
                    <span>{msg.time}</span>
                    <img className="pl-10 tick" src='/static/images/double_tick.svg'></img>
                  </span>

                </p>
              </div>
            );
          })
        }
      </Card.Description>
      <Card.Content className=" is-h-centered" extra>
        <Input.TextArea autosize={{ minRows: 3, maxRows: 6 }} value={messageBody} onChange={(e) => getValue(e)} placeholder="Type message"></Input.TextArea>
        <div className='threadblock-message--actions'>
          {/* <Image onClick={() => alert('sd')} className='actions' src='/static/images/add-image-to-msg.svg' />
          <Image className='actions' src='/static/images/add-attachment-to-msg.svg'/>
          <Image className='actions' src='/static/images/add-emoji-to-msg.svg'/> */}
          <Button onClick={sendMsg} className="mainBtn">
            <Display if={sending}>
              <Loader active inline='centered' />
            </Display>
            <Display if={!sending}>
              Send
            </Display>
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

export default ThreadBlock;