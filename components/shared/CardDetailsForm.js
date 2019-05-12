import React from 'react'
import { Grid, Input  } from 'semantic-ui-react';
import './less/cardDetailsForm.less'
export default function CardDetailsForm() {
  return (
    <>       
        <Grid.Row  className="inputWrap">
            <Grid.Column width={8}>
                <Input 
                    placeholder="Name on card"
                />
                <img src="/static/icons/grey-user.svg" className="inputImage" alt=""/>
            </Grid.Column>
            <Grid.Column width={8}>
                <Input
                    placeholder="Card number"
                />
                <img src="/static/icons/grey-card.svg" className="inputImage" alt=""/>
            </Grid.Column>
            <Grid.Column width={8}>
                <Input 
                    placeholder="Expiry date"
                />
                <img src="/static/icons/calendar.svg" className="inputImage" alt=""/>
            </Grid.Column>
            <Grid.Column width={8}>
                <Input 
                    placeholder="CVC/CVV"/>
                <img src="/static/icons/grey_card2.svg" className="inputImage" alt=""/>
            </Grid.Column>
        </Grid.Row>
    </>
  )
}
