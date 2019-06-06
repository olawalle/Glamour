import React, { Component, useState } from 'react'

import { Grid, Image, Container, Button, Modal } from 'semantic-ui-react'
import Checkoutform from '../components/checkout/checkoutform'
import BookingDetails from '../components/checkout/bookingDetails'
import Navbar from '../components/shared/Navbar';
import Link from 'next/link';
import { connect } from 'react-redux';
import * as actions from '../store/actions'
import './less/checkout.less'
import Display from '../components/shared/Display';

class Checkout extends Component {

  state = {
    step: 1,
    open: false
  }

  styles = {
    modalContents: {
      textAlign: 'center',
      padding: '80px 20px'
    },
    modalImage: {
      marginBotton: '30px'
    },
    modalHeading: {
      fontSize: '30px',
      fontWeight: '600',
      marginTop: '20px',
      fontFamily: 'freightproblack'
    },
    modalText: {
      fontSize: '15px',
      color: '#637381'
    },
    button: {
      height: '52px',
      marginTop: '13px',
      width: '60%'
    }
  }

  updateState = (n) => {
    this.setState({step: n})
    this.triggerAddressSubmit
  }

  triggerAddressSubmit = () => {
    
  }

  // updateCart = () => {

  // }

  show = () => {
    this.setState({ open: true })
    console.log(this.state)
  }

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  updateCart = () => {
    let id = this.getRandomInt(200, 38725654542)
    console.log(this.props)
    let data = {
      id: id,
      key: id.toString(),
      providerInfo: {
        avatar: this.props.providerDetails.userPhoto,
        name: this.props.providerDetails.name,
        formattedTime: '21:00 am, Today',
      },
      services: this.props.subscribedServices
    }
    this.props.addCartItem(data)
  }

  close = () => this.setState({ open: false })  

  log = () => {
    console.log('log called')
  }

  getAddressFormData = (e) => {
    console.log(e)
  }

  render() {

    const bttn = () => {
      if (this.state.step === 1) {
        return <Button  secondary className="proceedBtn" onClick={() => this.updateState(2)}>
            Continue
        </Button>
    } else {
        return <Button secondary className="proceedBtn" onClick={() => this.updateCart()}>
          <div> <img src='/static/icons/lock.svg' />  Make payment</div>
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
              <Checkoutform step={this.state.step} log={this.log} addressForm={this.getAddressFormData}> 

                <Display if={this.state.step === 1}>
                  <Grid className="gridWrap">
                      <Grid.Row className="topIndicator">
                          <div className="edge"></div>
                          <div className="divider"></div>
                          <div className="edge inactive"></div>
                      </Grid.Row>

                      <Grid.Row  className="topIndicatorText" columns={2}>
                          <Grid.Column>
                              <p className="indicatorText">
                                  Confirm Address
                              </p>
                          </Grid.Column>
                          <Grid.Column>
                              <p className="indicatorText inactive">
                                  Payment Details
                              </p>
                          </Grid.Column>
                      </Grid.Row>
                  </Grid>
                </Display>
                
                <Display if={this.state.step === 2}>
                  <Grid className="gridWrap">
                      <Grid.Row className="topIndicator">
                          <div className="edge inactive"></div>
                          <div className="divider"></div>
                          <div className="edge"></div>
                      </Grid.Row>

                      <Grid.Row  className="topIndicatorText" columns={2}>
                          <Grid.Column>
                              <p className="indicatorText inactive" onClick={() => this.updateState(1)}>
                                  Confirm Address
                              </p>
                          </Grid.Column>
                          <Grid.Column>
                              <p className="indicatorText">
                                  Payment Details
                              </p>
                          </Grid.Column>
                      </Grid.Row>
                  </Grid>
                </Display>

              </Checkoutform>
            </Grid.Column>
            
            <Grid.Column width={5}>
                <BookingDetails>
                  {bttn()}
                </BookingDetails>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      <Modal size='tiny' open={this.state.open} onClose={this.close}>
          <Modal.Content>
            <div className="modalContents" style={this.styles.modalContents}>
              <img src="/static/icons/green-check.svg" style={this.styles.modalImage} alt=""/>
              <p style={this.styles.modalHeading}>Successful</p>
              <p style={this.styles.modalText}>
                Your payment has been held securely and will be released once the vendor has completed their service
              </p>
              <Link href="/serviceProviders">
                <Button  secondary style={this.styles.button}>
                    Go to dashboard
                </Button>
              </Link>
            </div>
          </Modal.Content>
        </Modal>
      </Container>
      </>
    )
  }
}


const mapStateToProps = (state) => ({
  subscribedServices: state.subscribedServices.subscribedServices,
  providerDetails: state.subscribedServices.selectedProvider
})

export default connect(mapStateToProps, actions)(Checkout)
