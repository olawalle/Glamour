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
  return 'message-thread mobile hidden p0';
}

const determineMsgThreadStyles = (props) => {
  return {
    'borderLeft': props.threadId && (props.isInTabletView || props.isInMobileView) ? '0px solid black' : ''
  }
}

const MessagesList = (props) => {

  console.log(props)
  let [ hasScrolledMsgList, setHasScrollMsgList ] = useState(false);

  let handleScroll = (e) => {
    if (e.target.scrollTop > 20) {
      return setHasScrollMsgList(true);
    }
    setHasScrollMsgList(false);
  }

  useEffect(() => {
  }, [hasScrolledMsgList]);

  return (
    <Segment className={ determineSegmentClasses(props) }>
      <Container>
        <Grid stackable columns={ props.threadId ? 1 : 2 }>
          <Grid.Row className="pb-0">
            <Display if={!props.threadId || (!props.isInMobileView && !props.isInTabletView)}>
              <Grid.Column
                className="pl-0 pr-0"
                mobile={5}
                tablet={5}
                largeScreen={5}
                widescreen={5}
              >
                <Display if={hasScrolledMsgList}>
                  <div className="message-text-fade"></div>
                </Display>
                <List
                  onScroll={handleScroll}
                  className="messages-list mt-30"
                  verticalAlign='middle'
                >
                  {
                    props.messages.map((message, index) => (
                      <Message key={index} { ...message } {...props}/>
                    ))
                  }
                </List>
              </Grid.Column>
            </Display>

            <Grid.Column
              className={determineMsgThreadClasses(props)}
              style={determineMsgThreadStyles(props)}
              mobile={ props.threadId && props.isInMobileView ? 5 : 11 }
              tablet={ props.threadId && props.isInTabletView ? 5 : 11 }
              largeScreen={ 11 }
              widescreen={ 11 }
            >
              <ThreadBlock {...props} />
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}

export default MessagesList;