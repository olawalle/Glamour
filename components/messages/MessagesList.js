import React, { useState, useEffect } from 'react';
import { Segment, Container, Grid, List } from 'semantic-ui-react';
import Display from '../shared/Display';
import Message from './Message';
import ThreadBlock from './ThreadBlock';
import './less/messagesList.less';

const determineSegmentClasses = (props) => {
  if (props.isInMobileView) return 'p0';
  return 'pl-0';
}

const determineMsgThreadClasses = (props) => {
  if (props.threadId) return 'message-thread p0';
  return 'message-thread mobile padd';
}

const determineMsgThreadStyles = (props) => {
  return {
    'borderLeft': props.threadId && (props.isInTabletView || props.isInMobileView) ? '0px solid black' : ''
  }
}

const MessagesList = (props) => {
  let [ hasScrolledMsgList, setHasScrollMsgList ] = useState(false);

  let handleScroll = (e) => {
    if (e.target.scrollTop > 20) {
      return setHasScrollMsgList(true);
    }
    setHasScrollMsgList(false);
  }

  useEffect(() => {
    // console.log(props)
    // if (props.conversations.length > 0) props.getConvo(props.conversations[0]._id)
  }, []);

  return (
    <Segment className={ determineSegmentClasses(props) }>
      <Container>
        <Grid columns={ 2 }>
          <Grid.Row className="pb-0 widee">
            <Display if={!props.threadId || (!props.isInMobileView && !props.isInTabletView)}>
              <Grid.Column
                className="pl-0 pr-0"
                id="leftt"
                width={5}
                // tablet={5}
                // largeScreen={5}
                // widescreen={5}
              >
                <Display if={hasScrolledMsgList}>
                  <div className="message-text-fade"></div>
                </Display>
                <List
                  onScroll={handleScroll}
                  className="messages-list mt-30"
                  verticalAlign='middle'
                >
                  <Message getConvo={props.getConvo} {...props}/>
                </List>
              </Grid.Column>
            </Display>

            <Grid.Column
              className={determineMsgThreadClasses(props)}
              style={determineMsgThreadStyles(props)}
              mobile={  11 }
              tablet={  11 }
              largeScreen={ 11 }
              widescreen={ 11 }
            >
              <ThreadBlock getConvo={props.getConvo} activeConversation={props.activeConversation} {...props} />
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}

export default MessagesList;