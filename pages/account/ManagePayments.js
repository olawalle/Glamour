import React, { useState, useEffect } from 'react'
import { Grid, Table, Input, Button } from 'semantic-ui-react'
import './less/managePayments.less'
import {
    getBankAccts,
    addBankAccts
} from '../../services/providerServices.ts';
import UserCards from './UserCards';
import UserBankAccount from './UserBankAccount';

export default function ManagePayments(props) {
  useEffect(() => {
    getAccts()
  }, [])

  const getAccts = () => {
    getBankAccts()
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
  }

  const addAcct = () => {
    let data = {
        accountName,
        accountNumber,
        sortCode
    }

    addBankAccts(data)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
  }


  const [accountName, updateAcctName] = useState('')
  const [accountNumber, updateAccountNumber] = useState('')
  const [sortCode, updateSortCode] = useState('')
  
  const [isAddingAccount, updateIsAddingAccount] = useState(false)
  const [isAddingCard, updateIsAddingCard] = useState(false)

  const showAddingForm = () => {
    updateIsAddingAccount(true)
  }
  
  const showAddingCard = () => {
  }

  const toggleCard = (val) => {
    updateIsAddingCard(val)
  }

  const renderAccount = () => {
    if (isAddingCard) {
        return null
    } else if (!isAddingAccount) {
        return <>
        <Grid.Column width={8}>
          <p className="sectionTitle">
          Nominated bank account
          </p>
        <UserBankAccount showAdd={false} />
          {/* <div className="emptyCardFrame" onClick={() => showAddingForm()}>
              <img src="/static/icons/add.svg" alt=""/> Add bank account
          </div> */}
          <p className="acctCaveat">
              Your service earnings will be paid out to this account
          </p>
        </Grid.Column>
      </>
    } else {
        return <>
            <Grid.Column width={16}>
                <p className="sectionTitle">
                Nominated bank account
                </p>
            </Grid.Column>
            <Grid.Column width={12}>
                <UserBankAccount showAdd={true} />
            </Grid.Column>
        </>
    }
  }


  const renderCard = () => {
    return  <Grid.Column width={8}>
                <UserCards from={"managePayments"} showAdd={props.showAdd} toggleCardView={toggleCard} />
            </Grid.Column>
    // if (isAddingAccount) {
    //     return null 
    // } else if (!isAddingCard) {
    //     return <>
    //                 <Grid.Column largeScreen={6} mobile={16}>
    //                 <p className="sectionTitle">
    //                     Card
    //                 </p>
    //                     <UserCards showAdd={true} toggleCardView={toggleCard} />
    //                 </Grid.Column>
    //             </>        
    // } else {
    //     return <>
    //                 <Grid.Column width={16}>
    //                     <p className="sectionTitle">
    //                         Card
    //                     </p>
    //                     <UserCards showAdd={false} toggleCardView={toggleCard} />
    //                 </Grid.Column>
    //             </>  
    // }

  }

  return (
    <div className="managePayments">
      <Grid stackable>
          <Grid.Row>
            {
                renderAccount()
            }
            {/* {
                renderCard()
            } */}
              <Grid.Column width={12} className="paymentSection">
                <p className="sectionTitle">
                    Payment history
                </p>
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
              </Grid.Column>
          </Grid.Row>
      </Grid>
    </div>
  )
}
