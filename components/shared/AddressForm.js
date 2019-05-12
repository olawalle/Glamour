import React from 'react'
import {Grid, Input} from 'semantic-ui-react'
import './less/cardDetailsForm.less'

export default function AddressForm() {
  return (
    <>     
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
        </Grid.Row>
    </>
  )
}
