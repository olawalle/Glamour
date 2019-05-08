import React from 'react'
import './less/checkoutform.less'
import { Grid, Input, Button  } from 'semantic-ui-react';

const toBeRenderer = (props) => {
    if (props.step === 1) {
        return <div className="checkoutFormWrap">
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
        <Grid className="gridWrap" stackable>         
            <Grid.Row  className="inputWrap">
                <Grid.Column width={16} className="rowHeading">
                    Where do you want this service?
                </Grid.Column>   
                <Grid.Column width={8}>
                    <Input 
                        placeholder="House/Flat number"
                    />
                    <img src="/static/icons/grey-home.svg" className="inputImage" alt=""/>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Input
                        placeholder="Street number"
                    />
                    <img src="/static/icons/grey-street-view.svg" className="inputImage" alt=""/>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Input 
                        placeholder="Post Code"
                    />
                    <img src="/static/icons/grey-map-marker.svg" className="inputImage" alt=""/>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Input 
                        placeholder="City"/>
                    <img src="/static/icons/grey-city-hall.svg" className="inputImage" alt=""/>
                </Grid.Column>
                <Grid.Column width={16}>
                    <Input
                        placeholder="Instructions" />
                    <img src="/static/icons/grey-compass.svg" className="inputImage" alt=""/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
    } else {
        return <div className="checkoutFormWrap" if={props.step === 2}>
             <Grid className="gridWrap">
            <Grid.Row className="topIndicator">
                <div className="edge inactive"></div>
                <div className="divider"></div>
                <div className="edge"></div>
            </Grid.Row>

            <Grid.Row  className="topIndicatorText" columns={2}>
                <Grid.Column>
                    <p className="indicatorText inactive">
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
        <Grid className="gridWrap" stackable>            
            <Grid.Row  className="inputWrap">
                <Grid.Column width={16} className="rowHeading">
                    Payment Details
                </Grid.Column>   
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
                <Grid.Column width={4}>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Button  secondary className="proceedBtn">
                        Save card for future use
                    </Button>
                </Grid.Column>
                <Grid.Column width={4}>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </div>
    }
}

export default function Checkoutform(props) {
  return (
    <>
        {toBeRenderer(props)}
    </>
  )
}
