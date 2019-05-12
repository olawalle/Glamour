import React, { useState } from 'react'
import { Grid, Table, Input, Button } from 'semantic-ui-react'
import './less/managePayments.less'

export default function ManagePayments() {
  const [isAddingCard, updateIsAddingCard] = useState(false)

  const showAddingForm = () => {
    updateIsAddingCard(true)
  }

  const renderForm = () => {
    if (!isAddingCard) {
        return <>
        <Grid.Column width={8}>
          <p className="sectionTitle">
          Nominated bank account
          </p>
          <div className="emptyCardFrame" onClick={() => showAddingForm()}>
              <img src="/static/icons/add.svg" alt=""/> Add bank account
          </div>
          <p className="acctCaveat">
              Your service earnings will be paid out to this account
          </p>
        </Grid.Column>
        <Grid.Column width={8}>
          <p className="sectionTitle">
             Card
          </p>
          <div className="emptyCardFrame">
              <img src="/static/icons/add.svg" alt=""/> Add card 
          </div>
        </Grid.Column>
      </>
    } else {
        return <>
            <Grid.Column width={16}>
                <p className="sectionTitle">
                Nominated bank account
                </p>
            </Grid.Column>
            <Grid.Column width={10}>
                <Input
                    placeholder="Account name"
                />
            </Grid.Column>
            <Grid.Column width={10}>
                <Input 
                    placeholder="Account number"
                />
            </Grid.Column>
            <Grid.Column width={10}>
                <Input 
                    placeholder="Sort code"/>
            </Grid.Column>
            <Grid.Column width={10}>
                <Button size="huge" secondary onClick={() => updateIsAddingCard(false)}>Save bank account</Button>
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
