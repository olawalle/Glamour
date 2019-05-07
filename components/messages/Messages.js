import React, { useState, useEffect } from 'react';
import { Segment, Container, Grid, Card } from 'semantic-ui-react';
import EmptyState from '../shared/EmptyState';
import Display from '../shared/Display';
import MessagesList from './MessagesList';
import './less/messages.less';
import { Icon } from 'antd';
import Router from 'next/router';

const Messages = (props) => {

  let [ isInMobileView, setIsInMobileView ] = useState(false);
  let [ isInTabletView, setIsInTabletView ] = useState(false);
  let [ msgComponentInitialized, setInitState ] = useState(false);

  let resizeHandler = () => {
    if (!msgComponentInitialized) setInitState(true);
    if (window.innerWidth <= 480) {
      setIsInTabletView(false);
      return setIsInMobileView(true);
    } else if (window.innerWidth <= 791) {
      setIsInMobileView(false);
      return setIsInTabletView(true);
    }
    setIsInTabletView(false);
    setIsInMobileView(false);
  }

  useEffect(() => {
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    }
  }, [])

  const determineBackBtnClasses = () => {
    let classes = 'go-back is-v-centered mt-30 pl-2';
    if (props.threadId && ( isInMobileView || isInTabletView )) return classes;
    return classes + ' is-hidden';
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
                <Card className="messages-card h720 mb-70" fluid>
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
                      <h2 className="has-font-freight mt-30 pl-10">
                        Messages
                      </h2>
                    </Card.Header>

                    <Display if={!props.messages.length}>
                      <EmptyState
                        icon="/static/images/nomessages.svg"
                        text="No messages yet"
                      />
                    </Display>
                    <Display if={props.messages.length}>
                      <MessagesList
                        { ...props }
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