import React, { useState, useEffect } from 'react';
import { Segment, Container, Grid, Card, Button } from 'semantic-ui-react';
import EmptyState from '../shared/EmptyState';
import Display from '../shared/Display';
import MessagesList from './MessagesList';
import './less/messages.less';
import { Icon } from 'antd';
import Router from 'next/router';
import { getConversations, sendMessage, getProviderConversations, getClientConversations } from '../../services/auth.ts'
import dayjs from 'dayjs';
import lifecycle from 'react-pure-lifecycle';

const Messages = (props) => {

  let [ isInMobileView, setIsInMobileView ] = useState(false);
  let [ isInTabletView, setIsInTabletView ] = useState(false);
  let [ msgComponentInitialized, setInitState ] = useState(false);
  const [conversations, setConversations] = useState([])
  const [activeConversation, setActiveConversation] = useState("")
  const [allMessages, setAllMessages] = useState({
    thread: []
  })

  const [interval, updateInterval] = useState(null)

  let resizeHandler = () => {
    if (!msgComponentInitialized) setInitState(true);
    if (window.innerWidth <= 480) {
      console.log('mobile')
      setIsInTabletView(false);
      return setIsInMobileView(true);
    } else if (window.innerWidth <= 791) {
      console.log('tab')
      setIsInMobileView(false);
      return setIsInTabletView(true);
    }
    setIsInTabletView(false);
    setIsInMobileView(false);
  }

  useEffect(() => {
    
    // updateInterval(setInterval(() => {
    //   getConvo(activeConversation)
    // }, 12000))

    // if (window) {
    //   window.myInterval = setInterval(setInterval(() => {
    //     getConvo(activeConversation)
    //   }, 12000));
    // }

    if (Router.router.query.conversationId) {
      getConvo(Router.router.query.conversationId)
    } else {
      getConvo()
    }


    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
      logg()
    }
  }, [])

  const getConvo = async (id) => {
    try {
      let res = props.user.role === 'client' ? await getClientConversations(props.user.id) : await getProviderConversations(props.user.id)
      let conversations = res.data.data
      setConversations(conversations)
      id ? getFullConvo(id) : getFullConvo(conversations[0].message._id)
    } catch(err) {
      console.log(err)
    }
  }

  const getFullConvo = (id) => {
    // console.log(id)
    setActiveConversation(id)
    getConversations(id)
      .then(res => {
        let thread = res.data.data.map(message => {
          // console.log(message.userId , props.user.id)
          return message.message.userId === props.user.id ? {
            ...message, 
            msg: message.message.body, 
            time: dayjs(message.message.createdAt).format('DD MMM YYYY  hh:mm:ss'), 
            origin: 'from'} : {
            ...message, 
            msg: message.message.body, 
            time: dayjs(message.message.createdAt).format('DD MMM YYYY  hh:mm:ss'), 
            origin: 'to'
          }
        })
        setAllMessages({
          messages: [{}],
          thread
        })
      })
      .catch(err => {
        console.log(err)
      })
  }


  const determineBackBtnClasses = () => {
    let classes = 'go-back is-v-centered mt-30 pl-2';
    if ( isInMobileView || isInTabletView ) return classes;
    return classes 
    + ' is-hidden';
  }

  const logg = () => {
    // if(window.myInterval != undefined && window.myInterval != 'undefined'){
    //   window.clearInterval(window.myInterval);
    // }
  }

  return (
    <Segment
      className={isInMobileView ? 'p0 messages h760' : 'messages h760' }
    >
      <Display if={msgComponentInitialized}>
        <Container>
          <Grid centered columns={1}>
            <Grid.Row>
              <Grid.Column
                className={isInMobileView ? 'p0' : null }
                mobile={16}
                tablet={16}
                largeScreen={16}
                widescreen={16}
              >
                {/* <Card className="messages-card h720 mb-70" fluid> */}
                <Card className="messages-card mb-70" fluid>
                  <Card.Content
                    className={isInMobileView
                      ? 'p0 message-content pr-0'
                      : isInTabletView
                        ? 'message-content pr-0 pl-0'
                        : 'message-content pr-0'
                    }
                  >
                    <Card.Header className="is-flex">
                      <Icon
                        onClick={() => Router.back()}
                        className={determineBackBtnClasses()}
                        type="left"
                      />
                      <h2 className="has-font-freight mt-30 pl-20">
                        Messages
                      </h2>
                    </Card.Header>

                    <Display if={!conversations.length}>
                      <EmptyState
                        icon="/static/images/nomessages.svg"
                        text="No messages yet"
                      />
                    </Display>
                    <Display if={conversations.length}>
                      <MessagesList
                        { ...allMessages } conversations={conversations} activeConversation={activeConversation} getConvo={getConvo}
                        isInMobileView={isInMobileView}
                        isInTabletView={isInTabletView}
                      />
                    </Display>

                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Display>
    </Segment>
  );
}

export default Messages;