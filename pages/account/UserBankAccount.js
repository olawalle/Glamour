import React, { useState } from 'react'
import { Grid, Input, Button, Modal } from 'semantic-ui-react'
import './less/managePayments.less'
import CardDetailsForm from '../../components/shared/CardDetailsForm';

export default function UserBankAccount(props) {
    const [isAddingCard, updateIsAddingCard] = useState(false)

    const showAddingForm = () => {
      updateIsAddingCard(true)
    }

    const [open, setOpen] = useState(false)
  
    const renderForm = () => {
      if (!isAddingCard) {
          return <>
            {
                !props.showAdd && props.userAcct !== null ? <div className="filledCardFrame">
                        <p className="cardname">
                            {props.userAcct ? props.userAcct.accountName : ''}
                            <img src="/static/icons/cog.svg" title="edit account details" onClick={() =>updateIsAddingCard(true)} className="cog" alt=""/>
                        </p> 

                        <p className="cardNo">
                            <span className="cardNoTitle">
                                Account number
                            </span><br />
                            <span className="dots">
                                .... .... ....
                            </span>
                            <span className="last4">
                                {props.userAcct ? props.userAcct.accountNumber.substring(props.userAcct.accountNumber.length - 4, props.userAcct.accountNumber.length) : ''}
                            </span>
                        </p>
                        <p className="cardNo">
                            <span className="cardNoTitle">
                                sort code
                            </span> <br />
                            <span className="sort">
                                {props.userAcct ? props.userAcct.sortCode : ''}
                            </span>
                        </p>
                    </div> : <div className="emptyCardFrame" onClick={() => showAddingForm()}>
                                <img src="/static/icons/add.svg" alt=""/> Add bank account
                            </div>
            }
        </>
      } else {
          return <>
                    <Grid.Column width={16}>
                        <Input
                            placeholder="Account name"
                            value={props.accountName}
                            onChange={(e) => props.updateAcctName(e.target.value)}
                        />
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <Input 
                            placeholder="Account number"
                            value={props.accountNumber}
                            onChange={(e) => props.updateAccountNumber(e.target.value)}
                        />
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <Input 
                            placeholder="Sort code"
                            value={props.sortCode}
                            onChange={(e) => props.updateSortCode(e.target.value)}
                            />
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <Button size="huge" secondary onClick={() => props.addAcct()}>Save bank account</Button>
                        { props.hasAcct && 
                            <>
                                <Button basic color="red" onClick={() => setOpen(true)}>
                                    Delete 
                                </Button>
                                <Button basic onClick={() => updateIsAddingCard(false)}>
                                    Close
                                </Button>
                            </>
                        }
                    </Grid.Column>
                </>
        }
    }
  
    return (
      <div className="managePayments">
        <Grid stackable>
            <Grid.Row>
              {
                renderForm()
              }
            </Grid.Row>
        </Grid>

        <Modal size='mini' open={open} onClose={() => setOpen(false)}>
            <Modal.Header>Delete Account</Modal.Header>
            <Modal.Content>
            <p>Are you sure you want to delete this account record?</p>
            </Modal.Content>
            <Modal.Actions>
            <Button negative onClick={() => setOpen(false)}>No</Button>
            <Button
                positive
                content='Yes'
                onClick={() => props.deleteAcct()}
            />
            </Modal.Actions>
        </Modal>
      </div>
    )
}
