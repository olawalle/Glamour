import React, { useState } from 'react'
import { Grid, Modal, Checkbox, Button, Table } from 'semantic-ui-react';
import Link from 'next/link';

import './less/manageSubscriptions.less'
import CardDetailsForm from '../../components/shared/CardDetailsForm';
import AddressForm from '../../components/shared/AddressForm';


export default function ManageSubscriptions() {

  const [modalState, updateModalState] = useState(
    {
        open: false,
        openSuccess: false
    })
    
  const  openModal = () => {
    updateModalState({open: true})
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
        marginBottom: '30px',
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
        color: '#E84671',
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

  return (
    <div className="manageSubscriptions">
        <Grid stackable>
            <Grid.Row>
                <Grid.Column width="16">
                    <p className="topText">
                    Subscription
                    </p>
                    <p className="lowerText">
                    You have not subscribed. Select a suitable plan below
                    </p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row className="subscriptionsWrapper">
                <Grid.Column width={6}>
                    <div className="monthly">
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
                </Grid.Column>
                <Grid.Column width={6}>
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
                </Grid.Column>
            </Grid.Row>
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
                                    <CardDetailsForm />
                                </Grid>
                                
                                <div style={styles.checkBoxWrap}>
                                    <Checkbox /><span>Save card for future use</span>
                                </div>

                                <p style={styles.segmentTitle}>
                                    Billing address
                                </p>
                                <Grid stackable>
                                    <AddressForm />
                                </Grid>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <div style={styles.modalContentInner}>
                                <p style={styles.segmentTitle}>
                                    Subscribe
                                </p>
                                <p style={styles.ListItem}>
                                    Monthly subscription <span style={styles.cost}>100</span>
                                </p>
                                <p style={styles.ListItem_}>
                                    Total <span style={styles.total}>100</span>
                                </p>
                                <Button secondary style={styles.proceedBtn} onClick={() => openSuccess()}>
                                    <div style={styles.proceedBtnDiv}> <img style={styles.proceedBtnImg} src='/static/icons/lock.svg' />  Make payment</div>
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
