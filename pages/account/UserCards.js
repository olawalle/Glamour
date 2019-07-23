import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import './less/managePayments.less'
import CardDetailsForm from '../../components/shared/CardDetailsForm';

export default function UserCards(props) {
    const [isAddingCard, updateIsAddingCard] = useState(false)

    const showAddingForm = () => {
      updateIsAddingCard(true)
      props.toggleCardView(true)
    }
  
    const renderForm = () => {
      if (!isAddingCard) {
          return <>
                  <Grid stackable>
                  <Grid.Row>
                    <Grid.Column width={16}>
                      <p className="sectionTitle">
                        Cards
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Grid stackable columns={2}>
                  <Grid.Row>
                    <Grid.Column>
                        <div className="filledCardFrame">
                          <p className="cardname">
                              Melissa McCarthy
                              <img src="/static/icons/cog.svg" className="cog" alt=""/>
                          </p> 

                          <p className="cardNo">
                              <p className="cardNoTitle">
                                  card number
                              </p>
                              <span className="dots">
                                  .... .... ....
                              </span>
                              <span className="last4">
                                  1234
                              </span>
                          </p>
                          <p className="cardImg">
                              <img src="/static/icons/mastercard.svg" alt=""/>
                          </p>
                      </div>
                    </Grid.Column>
                    <Grid.Column>
                      {
                          props.showAdd ? <div className="emptyCardFrame" onClick={() => showAddingForm()}>
                                                      <img src="/static/icons/add.svg" alt=""/> Add card 
                                                  </div> : null
                      }
                    </Grid.Column>
                </Grid.Row>
              </Grid>
            </>
      } else {
          return <Grid>
                    <CardDetailsForm showBtn={false} />
                </Grid>
      }
    }
  
    return (
      <div className="managePayments">
        {
          renderForm()
        }
      </div>
    )
}
