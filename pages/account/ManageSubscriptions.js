import React, { useState, useEffect, Component, useRef } from 'react'
import { Grid, Modal, Checkbox, Button, Table, Loader } from 'semantic-ui-react';
import Link from 'next/link';

import './less/manageSubscriptions.less'
import CardDetailsForm from '../../components/shared/CardDetailsForm';
import AddressForm from '../../components/shared/AddressForm';
import { connect } from 'react-redux';
import * as actions from '../../store/actions'

import { getCurrentUser } from '../../services/auth.ts'
import { postSubscriptionPayment, confirmSubscriptionPayment } from '../../services/auth.ts'
import Display from '../../components/shared/Display';
import { injectStripe, Elements, StripeProvider, } from "react-stripe-elements";
import dayjs from 'dayjs';


const ManageSubscriptions_ = (props) => {

  useEffect(() => {
   if(props.user.subscriptionId !== "0" && props.user.subscriptionId !== null) {
       setUserSubscription({present: true, type: props.subscriptions.availableSubscriptions.find(sub => sub._id === props.user.subscriptionId)})
   }
  }, [])

  const [selectedPlan, setselectedPlan] = useState({
    amount: "",
    duration: "",
    name: "",
    _id: "",
  })

  const [userSubscription, setUserSubscription] = useState({present: false, type: {}})

  const [sendingRequest, setsendingRequest] = useState(false)

  const [card, saveCard] = useState(null)

  const [modalState, updateModalState] = useState(
    {
        open: false,
        openSuccess: false
    })
  const [secret, setSecret] = useState("")
    
  const  openModal = (id) => {
    if (id) { 
        let selected = props.subscriptions.availableSubscriptions.find(sub => sub._id === id)
        setselectedPlan(selected)
        updateModalState({open: true})
    } else {
        updateModalState({open: true})
    }
  }
    
  const close = () => {
    updateModalState({open: false})
  }

  const openSuccess = () => {
    updateModalState({open: false})
    updateModalState({openSuccess: true})
  }
  
  const closeSuccess = () => {
    updateModalState({openSuccess: true})
  }

  const styles = {
    modalContent: {
      padding: '40px',
    },
    modalContentInner: {
        boxShadow: '0px 0px 10px rgba(99, 115, 129, 0.1)',
        padding: '30px',
    },
    segmentTitle: {
        fontWeight: '600',
        fontFamily: 'freightproblack',
        fontSize: '25px',
        width: '100%',
        textAlign: 'center'
    },
    checkBoxWrap: {
        marginTop: '-75px',
        color: '#637381'
    },
    cost: {
        float: 'right'
    },
    ListItem: {
        color: '#212B36',
        padding: '20px 0',
        marginBottom: '0',
        borderBottom: '1px solid rgba(196, 205, 213, 0.25)'
    },
    ListItem_: {
        color: '#212B36',
        fontWeight: '600',
        padding: '20px 0',
    },
    total: {
        color: '#33b0e6',
        float: 'right'
    },
    proceedBtn: {
        width: '100%'
    },
    proceedBtnDiv: {
        height: '25px',
        lineHeight: '25px',
        display: 'inline-flex'
    },
    
    proceedBtnImg: {
        marginRight: '12px'
    },


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

  const getCard = (e) => {
    console.log(e)
    saveCard(e)
  }

  const pay = () => {
    setsendingRequest(true)
    let amt = {
      amount: selectedPlan.amount * 100,
      currency: 'GBP',
    }
    postSubscriptionPayment(amt, selectedPlan._id)
    .then(resp => {
      console.log(resp)
      setSecret(resp.data.data.client_secret)
      handleSubmit(resp.data.data.client_secret)
    })
    .catch(err => {
      console.log({...err})
    })
  }
  
  const handleSubmit = (secret) => {
    if (props.stripe) {
      props.stripe.handleCardPayment(
        secret,
        card
      )
      .then(function(result) {
        console.log(result)
        if (result.paymentIntent) {
          let data = {
            secret: result.paymentIntent.id,
            subscriptionId: selectedPlan._id,
            duration: selectedPlan.duration
          }
          confirmSubscriptionPayment(data, props.user.id)
          .then(res => {
            setsendingRequest(false)
            console.log(res)
            getCurrentUser()
            .then(res => {
              props.saveUserData({
                ...res.data.me,
                isLoggedIn: true
              })
            })
          })
          .catch(err => {
            console.log(err)
          })
        } 
        // else {
        //   let data = {
        //     secret: result.error.payment_intent.id,
        //     subscriptionId: selectedPlan._id
        //   }
        //   confirmBookings(data)
        //   .then(res => {
        //     setsendingRequest(false)
        //     console.log(res)
        //     getCurrentUser()
        //     .then(res => {
        //       this.props.saveUserData({
        //         ...res.data.me,
        //         isLoggedIn: true
        //       })
        //     })
        //   })
        //   .catch(err => {
        //     console.log(err)
        //     setsendingRequest(false)
        //   })
        // }
      })
      .catch(err => {
          console.log(err)
      })
    }
  };

  return (
    <div className="manageSubscriptions">
        <Grid stackable>
            <Grid.Row>
                <Grid.Column width="8">
                    <p className="topText">
                    Subscription
                    </p>
                    {!userSubscription.present ? <p className="lowerText">
                        You have not subscribed. Select a suitable plan below
                        </p> : <Grid.Column width={6}>
                                <div className={`${userSubscription.type.name.toLowerCase()} sub_`}>
                                    <p className="duration">
                                        {userSubscription.type.name}
                                    </p>
                                    <p className="renews">
                                        Renews on {dayjs(props.user.subscriptionEnd).format('DD MMM YYYY')}
                                    </p>
                                    <button onClick={() => openModal()} className="subscribeBtn">
                                        Change plan
                                    </button>
                                </div>
                            </Grid.Column>
                    }
                </Grid.Column>
            </Grid.Row>
            {
              !userSubscription.present &&  <Grid.Row className="subscriptionsWrapper">
                {
                  props.subscriptions.availableSubscriptions.map(sub => {
                        return <Grid.Column width={4} key={sub._id}>
                            <div className={`${sub.name.toLowerCase()} sub`}>
                                <p className="duration">
                                    {sub.name}
                                </p>
                                <p className="price">
                                £{sub.amount}
                                </p>
                                <button onClick={() => openModal(sub._id)} className="subscribeBtn">
                                    Subscribe
                                </button>
                            </div>
                        </Grid.Column>
                    })
                }
                {/* <Grid.Column width={6}>
                    <div className="yearly">
                        <button className="subscribeBtn_">
                            save 10%
                        </button>
                        <p className="duration">
                            Monthly
                        </p>
                        <p className="price">
                          £20 
                        </p>
                        <button onClick={() => openModal()} className="subscribeBtn">
                            Subscribe
                        </button>
                    </div>
                </Grid.Column> */}
            </Grid.Row>
            }
            <Grid.Row>
                <Grid.Column width="16">
                    <p className="topText">
                    Invoices
                    </p>
                    {/* <p className="lowerText">
                    You have not paid for any subscription yet
                    </p> */}
                    <div className="tableWrap">     
                        <Table basic='very'>
                            <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Date</Table.HeaderCell>
                                <Table.HeaderCell>Description</Table.HeaderCell>
                                <Table.HeaderCell>Amount</Table.HeaderCell>
                            </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>05 May, 2019</Table.Cell>
                                    <Table.Cell>Monthly subscription</Table.Cell>
                                    <Table.Cell>£12.99</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>05 May, 2019</Table.Cell>
                                    <Table.Cell>Monthly subscription</Table.Cell>
                                    <Table.Cell>£12.99</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>05 May, 2019</Table.Cell>
                                    <Table.Cell>Monthly subscription</Table.Cell>
                                    <Table.Cell>£12.99</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>05 May, 2019</Table.Cell>
                                    <Table.Cell>Monthly subscription</Table.Cell>
                                    <Table.Cell>£12.99</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>   
        <Modal
        size="large"
        open={modalState.open} 
        onClose={close}
        >
            <div style={styles.modalContent}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            <div style={styles.modalContentInner}>
                                <p style={styles.segmentTitle}>
                                    Payment details
                                </p>
                                <Grid stackable>
                                    <CardDetailsForm getCard={getCard} />
                                </Grid>
                                
                                <div style={styles.checkBoxWrap}>
                                    <Checkbox /><span>Save card for future use</span>
                                </div>

                                {/* <p style={styles.segmentTitle}>
                                    Billing address
                                </p>
                                <Grid stackable>
                                    <AddressForm show />
                                </Grid> */}
                            </div>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <div style={styles.modalContentInner}>
                                <p style={styles.segmentTitle}>
                                    Subscribe
                                </p>
                                <p style={styles.ListItem}>
                                    {selectedPlan.name} <span style={styles.cost}>£{selectedPlan.amount}</span>
                                </p>
                                <p style={styles.ListItem_}>
                                    Total <span style={styles.total}>
                                    £{selectedPlan.amount}
                                    </span>
                                </p>
                                <Button secondary style={styles.proceedBtn} onClick={() => pay()}>
                                    <Display if={sendingRequest}>
                                        <Loader active inline='centered' />
                                    </Display>
                                    <Display if={!sendingRequest}>
                                        <div style={styles.proceedBtnDiv}> <img style={styles.proceedBtnImg} src='/static/icons/lock.svg' />  Make payment</div>
                                    </Display>
                                </Button>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </Modal>   
        <Modal size='tiny' open={modalState.openSuccess} onClose={closeSuccess}>
          <Modal.Content>
            <div className="modalContents" style={styles.modalContents}>
              <img src="/static/icons/green-check.svg" style={styles.modalImage} alt=""/>
              <p style={styles.modalHeading}>Successful</p>
              <p style={styles.modalText}>
                You have successfully subscribed for the Glamour on Demand monthly plan
              </p>
              <Link href="/serviceProviders">
                <Button  secondary style={styles.button}>
                    Go to dashboard
                </Button>
              </Link>
            </div>
          </Modal.Content>
        </Modal>
    </div>
  )
}


const mapStateToProps = (state) => {
    return {
        subscriptions: state.subscriptions,
        user: state.user
    }
}

// export default connect(mapStateToProps, actions)(ManageSubscriptions)
const ManageSubscriptionsChild = injectStripe(connect(mapStateToProps, actions)(ManageSubscriptions_))


class ManageSubscriptions extends Component {
  
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
                  <ManageSubscriptionsChild />
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
  export default ManageSubscriptions
