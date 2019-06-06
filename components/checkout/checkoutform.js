import React, { useState, useEffect } from 'react'
import './less/checkoutform.less'
import { Grid, Input, Button  } from 'semantic-ui-react';
import CardDetailsForm from '../shared/CardDetailsForm';
import AddressForm from '../shared/AddressForm';

export default function Checkoutform(props) {

  const getAddressFormData = (e) => {
    console.log(e)
    props.addressForm(e)
  }

  const submit = (e) => {
    console.log(e)
  }

  const toBeRendered = () => {
      
    if (props.step === 1) {
      return <div className="checkoutFormWrap">
        {props.children}
        <Grid className="gridWrap" stackable>         
            <Grid.Row  className="inputWrap">
                <Grid.Column width={16} className="rowHeading">
                    Where do you want this service?
                </Grid.Column> 
            </Grid.Row>

            <AddressForm submit={submit} formData={getAddressFormData} />
     
            {/* <Grid.Row  className="inputWrap">
            </Grid.Row> */}
        </Grid>
      </div>
    } else {
        return <div className="checkoutFormWrap">
                {props.children}
                <Grid className="gridWrap" stackable>            
                    <Grid.Row  className="inputWrap">
                        <Grid.Column width={16} className="rowHeading">
                            Payment Details
                        </Grid.Column>   
                    </Grid.Row>

                    <CardDetailsForm  showBtn={true} />    

                    {/* <Grid.Row  className="inputWrap">
                        <Grid.Column width={4}>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Button  secondary className="proceedBtn">
                                Save card for future use
                            </Button>
                        </Grid.Column>
                        <Grid.Column width={4}>
                        </Grid.Column>
                    </Grid.Row> */}
                </Grid>
            </div>
    }
  }


  

  return (
    <>
        {toBeRendered(props)}
    </>
  )
}
