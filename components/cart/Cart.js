import React, { useState, useEffect } from 'react';
import { Segment, Container, Grid, Card, Button } from 'semantic-ui-react';
import EmptyState from '../shared/EmptyState';
import Display from '../shared/Display';
import CartList from './CartList';
import './less/cart.less';

const Cart = (props) => {

  return (
    <Segment
      className='h760 mt-30'
    >
        <Container>
          <Grid centered columns={1}>
            <Grid.Row>
              <Grid.Column
                mobile={16}
                tablet={14}
                largeScreen={13}
                widescreen={13}
              >
                <Card className="cart-card h690 mb-30" fluid>
                  <Card.Content
                    className=''
                  >
                    <Card.Header className="is-flex">
                      <h2 className="has-font-freight mt-30 pl-10">
                        Cart
                      </h2>
                    </Card.Header>

                    <Display if={!props.cart.length}>
                      <EmptyState
                        icon="/static/images/red_cart_basket.svg"
                        text="Your cart is empty"
                      >
                        <Button className="mt-30 h60 w215" secondary >Explore services</Button>
                      </EmptyState>
                    </Display>
                    <Display if={props.cart.length}>
                      <CartList
                        { ...props }
                      />
                    </Display>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    </Segment>
  );
}

export default Cart;