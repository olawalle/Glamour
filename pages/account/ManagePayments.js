import React, { useState, useEffect, useRef } from 'react'
import { Grid, Table, Input, Button } from 'semantic-ui-react'
import './less/managePayments.less'
import {
    getBankAccts,
    addBankAccts,
    editBankAccts,
    deleteBankAccts
} from '../../services/providerServices.ts';
import UserCards from './UserCards';
import UserBankAccount from './UserBankAccount';
import { Snackbar } from '../../components/shared/SnackBar';
import Loader from '../../components/shared/Loader';

export default function ManagePayments(props) {
  useEffect(() => {
    getAccts()
  }, [])

  const getAccts = () => {
    getBankAccts()
    .then(res => {
        if (res.data.accounts.length > 0) {
            let bankAcct = res.data.accounts[0]
            updateUseracct(bankAcct)
            updateAcctName(bankAcct.accountName)
            updateAccountNumber(bankAcct.accountNumber)
            updateSortCode(bankAcct.sortCode)
            if (res.data.accounts.length > 0) {
                updateHasAcct(true)
                updateID(bankAcct._id)
            } else {
                updateHasAcct(false)
            }
        }
        setLoading(false)
    })
    .catch(err => {
        console.log(err)
        setLoading(false)
    })
  }

const addAcct = () => {
    setLoading(true)
    let data = {
        accountName,
        accountNumber,
        sortCode
    }

    !hasAcct ? 
    addBankAccts(data)
    .then(res => {
        getAccts()
        setMessage('Account details successfully added')
        setSnackType('success')
        _showSnackbarHandler()
    })
    .catch(err => {
        console.log(err)
        setMessage('An error occured,Please try again')
        setSnackType('error')
        _showSnackbarHandler()
        setLoading(false)
    }) : 
    editBankAccts(data, id)
    .then(res => {
        getAccts()
        setMessage('Account details successfully updated')
        setSnackType('success')
        _showSnackbarHandler()
    })
    .catch(err => {
        console.log(err)
        setMessage('An error occured,Please try again')
        setSnackType('error')
        _showSnackbarHandler()
        setLoading(false)
    })
}


  const deleteAcct = () => {
    deleteBankAccts(id)
    .then(res => {
        getAccts()
        setMessage('Account details successfully deleted')
        setSnackType('success')
        _showSnackbarHandler()
    })
    .catch(err => {
        console.log(err)
        setMessage('An error occured,Please try again')
        setSnackType('error')
        _showSnackbarHandler()
    })
  }

  const snackbarRef = useRef(null);

  const _showSnackbarHandler = () => {
    snackbarRef.current.openSnackBar();
  }


  const [accountName, updateAcctName] = useState('')
  const [accountNumber, updateAccountNumber] = useState('')
  const [sortCode, updateSortCode] = useState('')
  
  const [isAddingAccount, updateIsAddingAccount] = useState(true)
  const [isAddingCard, updateIsAddingCard] = useState(false)
  const [hasAcct, updateHasAcct] = useState(false)
  const [userAcct, updateUseracct] = useState({
    accountName,
    accountNumber,
    sortCode
  })
  const [loading, setLoading] = useState(false)
  const [id, updateID] = useState('')
  const [message, setMessage] = useState('')
  const [snackType, setSnackType] = useState('')

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
                <UserBankAccount 
                    userAcct={userAcct}
                    hasAcct={hasAcct}
                    showAdd={userAcct.accountName === ''} 
                    accountName={accountName}
                    accountNumber={accountNumber}
                    sortCode={sortCode}
                    updateAcctName={updateAcctName}
                    updateAccountNumber={updateAccountNumber}
                    updateSortCode={updateSortCode}
                    addAcct={addAcct}
                    deleteAcct={deleteAcct}
                />
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
    <Snackbar ref = {snackbarRef} 
        type={snackType} 
        position={'top'} 
        showClose={true} 
        duration={5000} 
        message={message} />
    { loading ? <Loader /> :
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
    }
    </div>
  )
}
