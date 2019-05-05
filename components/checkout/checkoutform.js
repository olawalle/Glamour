import React from 'react'
import './less/ckeckoutform.less'
import { Grid, Input } from 'semantic-ui-react';
export default function Checkoutform() {
  return (
    <div className="checkoutFormWrap">
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
  )
}
