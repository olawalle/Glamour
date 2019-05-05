import React, { Component, useState } from 'react'

import { Grid, Image, Container, Button } from 'semantic-ui-react'
import Checkoutform from '../components/checkout/checkoutform'
import BookingDetails from '../components/checkout/bookingDetails'
import Navbar from '../components/shared/Navbar';
import Link from 'next/link';
import './less/checkout.less'

export default class Checkout extends Component {

    state = {
      step: 1
    }

    updateState = (n) => {
      console.log(this)
      this.setState({step: n})
      console.log(this.state)
    }

  render() {

    const bttn = () => {
      if (this.state.step === 1) {
        return <Button  secondary className="proceedBtn" onClick={() => this.updateState(2)}>
            Continue
        </Button>
    } else {
        return <Button if={this.state.step === 2} secondary className="proceedBtn" onClick={() => this.updateState(1)}>
            Make payment
        </Button>
      }
    }
    
    return (
      <>
      <Navbar />
      <Container className="checkout">
        <Grid columns={2} stackable>
            <Grid.Row>
                <Grid.Column width={11}>
                    <Checkoutform step={this.state.step} />
                </Grid.Column>
                <Grid.Column width={5}>
                    <BookingDetails>
                      {bttn()}
                    </BookingDetails>
                </Grid.Column>
            </Grid.Row>
        </Grid>
      </Container>
      </>
    )
  }
}
