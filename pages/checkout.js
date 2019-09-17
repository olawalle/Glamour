import React, { Component, useRef } from 'react'

import { Grid, Image, Container, Button, Modal, Loader, Message } from 'semantic-ui-react'
import Checkoutform from '../components/checkout/checkoutform'
import BookingDetails from '../components/checkout/bookingDetails'
import Navbar from '../components/shared/Navbar';
import Link from 'next/link';
import { connect } from 'react-redux';
import * as actions from '../store/actions'
import './less/checkout.less'
import Router from 'next/router'
import Display from '../components/shared/Display';
import { postBookings, postPayment, confirmBookings } from '../services/auth.ts'
import { injectStripe, Elements, StripeProvider, } from "react-stripe-elements";

class Checkout_ extends Component {

  state = {
    step: 1,
    open: false,
    id: '',
    stripe: null,
    loading: false,
    cardDetails: {
      cardExpiryDate: "",
      cardName: "",
      cardNumber: "",
      cvv: "",
      errors: 4
    },
    bookingId: "",
    client_secret: "",
    error: {
      show: false,
      message: ''
    }
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
  }

  createBooking = () => {
    this.setState({loading: true})
    let total = 0
    this.props.subscribedServices.map(service => total += parseFloat(service.amount))
    let data = {
      providerId: this.props.subscribedServices[0].userId,
      services: this.props.subscribedServices,
      amount: total * 100,
      addressId: this.props.activeAddress,
      time: this.props.time
    }
    postBookings(data)
    .then(res => {
      this.setState({bookingId: res.data.data.bookings._id})
      let amt = {
        amount: total * 100,
        currency: 'GBP',
      }
      postPayment(amt, res.data.data.bookings._id)
      .then(resp => {
        // console.log(resp)
        this.setState({loading: false})
        this.setState({
          client_secret: resp.data.data.client_secret,
          step: 2
        })
      })
      .catch(err => {
        console.log(...err)
        this.setState({loading: false})
      })
    })
    .catch(err => {
      console.log(err)
      this.setState({loading: false})
    })
  }

  handleSubmit = () => {
    this.setState({loading: true})
    let secret = this.state.client_secret
    let bookingId = this.state.bookingId
    if (this.props.stripe) {
      this.props.stripe.handleCardPayment(
        secret,
      )
      .then((result) => {
        setTimeout(() => {       
        }, 3000);
        if (result.paymentIntent) {
          console.log(result)
          let data = {
            secret: result.paymentIntent.id
          }
          confirmBookings(data, bookingId)
          .then(res => {
            this.setState({loading: false, open: true}) 
          })
          .catch(err => {
            console.log(err)
          })
        } else {
          this.setState({
            loading: false,
            error: {
              show: true,
              message: result.error.message
            }
          })

          setTimeout(() => {
            this.setState({error: {show: false, message: ''}})
          }, 5000);
        }
        // Handle result.error or result.paymentIntent
      })
    }
  };

  show = () => {
    this.setState({ open: true })
  }

  close = () => this.setState({ open: false })  

  log = () => {
  }

  getAddressFormData = (e) => {
  }

  
  getCard = e => {
    this.setState({cardDetails: e})
  }

  toTwo = () => {
    this.createBooking()
  }

  componentDidMount() {
    let token = window.sessionStorage.getItem('glamourToken')
    if (!token) Router.push('/login')
  }
  render() {

    const bttn = () => {
      if (this.state.step === 1) {
        return <Button secondary disabled={this.props.activeAddress === ""} className="proceedBtn" onClick={() => this.toTwo()}>
          <Display if={this.state.loading}>
            <Loader active inline='centered' />
          </Display>
          <Display if={!this.state.loading}>
            Continue
          </Display>
        </Button>
    } else {
        return <>
          <Button secondary className="proceedBtn" onClick={() => this.handleSubmit()}>
            <Display if={this.state.loading}>
              <Loader active inline='centered' />
            </Display>
            <Display if={!this.state.loading}>
              <div> <img src='/static/icons/lock.svg' />  Make payment</div>
            </Display>
          </Button>
          <Display if={this.state.error.show}>
            <Message negative>
              {this.state.error.message}
            </Message>
          </Display>
        </>
      }
    }
    
    return (
      <>
      <Navbar />
      <Container className="checkout">
        <Grid columns={2} stackable>
          <Grid.Row>
            <Grid.Column width={11}>
              <Checkoutform 
                client_secret={this.state.client_secret} 
                getCard={this.getCard} 
                step={this.state.step} 
                log={this.log} 
                addressForm={this.getAddressFormData}> 

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
                          <div className="edge inactive" style={{cursor: 'pointer'}} onClick={() => this.updateState(1)}></div>
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
              <Link href="/serviceproviders">
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
  time: state.subscribedServices.time,
  providerDetails: state.subscribedServices.selectedProvider,
  activeAddress: state.addresses.activeAddress
})

// export default connect(mapStateToProps, actions)(Checkout)
const Checkoutchild = injectStripe(connect(mapStateToProps, actions)(Checkout_))

export default class Checkout extends Component {
  
  state = {
    stripe: 'pk_test_sntSe2uSuOohMsBh66biH34d00mLeSb2eh',
    comp: <></>
  }
  
  componentDidMount() {
    // Create Stripe instance in componentDidMount
    // (componentDidMount only fires in browser/DOM environment)
    // this.setState({stripe: window.Stripe('pk_test_sntSe2uSuOohMsBh66biH34d00mLeSb2eh')});
    if (window.Stripe) {
      this.setState({
      comp: <StripeProvider apiKey={"pk_test_sntSe2uSuOohMsBh66biH34d00mLeSb2eh"}>
              <Elements>
                <Checkoutchild />
              </Elements>
            </StripeProvider>
      })
    }
  }

  render() {
    return (
      this.state.comp
    )    
  }
}