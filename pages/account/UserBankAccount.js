import React, { useState } from 'react'
import { Grid, Input, Button } from 'semantic-ui-react'
import './less/managePayments.less'
import CardDetailsForm from '../../components/shared/CardDetailsForm';

export default function UserBankAccount(props) {
    const [isAddingCard, updateIsAddingCard] = useState(false)

    const showAddingForm = () => {
      updateIsAddingCard(true)
    }
  
    const renderForm = () => {
      if (!isAddingCard) {
          return <>
            {
                !props.showAdd ? <div className="filledCardFrame">
                        <p className="cardname">
                            Melissa McCarthy
                            <img src="/static/icons/cog.svg" className="cog" alt=""/>
                        </p> 

                        <p className="cardNo">
                            <p className="cardNoTitle">
                                Account number
                            </p>
                            <span className="dots">
                                .... .... ....
                            </span>
                            <span className="last4">
                                1234
                            </span>
                        </p>
                        <p className="cardNo">
                            <p className="cardNoTitle">
                                sort code
                            </p>
                            <p className="sort">
                                02-32-32
                            </p>
                        </p>
                    </div> : <div className="emptyCardFrame" onClick={() => showAddingForm()}>
                                <img src="/static/icons/add.svg" alt=""/> Add bank account
                            </div>
            }
        </>
      } else {
          return <>
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
                        <Button size="huge" secondary onClick={() => updateIsAddingAccount(false)}>Save bank account</Button>
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
      </div>
    )
}
