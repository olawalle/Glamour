import React, { useState } from 'react'
import { Grid, Input, Button  } from 'semantic-ui-react';
import './less/cardDetailsForm.less'


export default function CardDetailsForm(props) {
    
  
  const handleChange = (e, key, {value = null, checked = null } = {}) => {
    let newState = {
        ...cardFormData,
        [key]: e.target.value || value || checked || ''
    }
    setCardForm(newState)

    //delete error entry
    if (formErrors[key]) delete formErrors[key]
  }
  
  const submit = (e) => {
    e.preventDefault();
    let  _formErrors = {};
    Object.keys(cardFormData).forEach((item) => {
      if (!cardFormData[item]) {
        _formErrors[item] = true
      } else {
        console.log('form fine')
        console.log('cardFormData', cardFormData)
      }
    })
    setFormErrors(_formErrors)
    // CALL API WITH cardFormData
  }

  const [ formErrors, setFormErrors ] = useState({})

  const [cardFormData, setCardForm] = useState({
    cardName: "",
    cardNumber: "",
    cardExpiryDate: "",
    cvv: ""
  })

  return (
    <>       
        <Grid.Row  className="inputWrap">
            <Grid.Column width={8}>
                <Input 
                    placeholder="Name on card"
                    value={cardFormData.cardName}
                    error={formErrors['cardName']}
                    onChange={(e) => handleChange(e, 'cardName')}
                />
                <img src="/static/icons/grey-user.svg" className="inputImage" alt=""/>
            </Grid.Column>
            <Grid.Column width={8}>
                <Input
                    placeholder="Card number"
                    value={cardFormData.cardNumber}
                    error={formErrors['cardNumber']}
                    onChange={(e) => handleChange(e, 'cardNumber')}
                />
                <img src="/static/icons/grey-card.svg" className="inputImage" alt=""/>
            </Grid.Column>
            <Grid.Column width={8}>
                <Input 
                    placeholder="Expiry date"
                    value={cardFormData.cardExpiryDate}
                    error={formErrors['cardExpiryDate']}
                    onChange={(e) => handleChange(e, 'cardExpiryDate')}
                />
                <img src="/static/icons/calendar.svg" className="inputImage" alt=""/>
            </Grid.Column>
            <Grid.Column width={8}>
                <Input 
                    placeholder="CVC/CVV"
                    error={formErrors['cvv']}
                    onChange={(e) => handleChange(e, 'cvv')}
                    value={cardFormData.cvv}/>
                <img src="/static/icons/grey_card2.svg" className="inputImage" alt=""/>
            </Grid.Column>
            
            <Grid.Column width={4}>
            </Grid.Column>
            {
                props.showBtn ? 
                <Grid.Column width={8}>
                    <Button onClick={submit}  secondary className="proceedBtn">
                        Save card for future use
                    </Button>
                </Grid.Column> : null
            }
            <Grid.Column width={4}>
            </Grid.Column>
        </Grid.Row>
    </>
  )
}
