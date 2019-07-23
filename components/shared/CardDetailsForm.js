// import React, { useState, useEffect } from 'react'
import { Grid, Input, Button  } from 'semantic-ui-react';
import './less/cardDetailsForm.less'


// export default function CardDetailsForm(props) {

//   useEffect(() => {
//     props.getCard({
//       ...cardFormData,
//       errors
//     })
//   }, [])
    
//   const [errors, seterrors] = useState(4)
//   const handleChange = (e, key, {value = null, checked = null } = {}) => {
//     let newState = {}
//     // if (key === 'cardExpiryDate') date(e.target.value)
//     // if (key !== 'cardExpiryDate') 
//     newState = {
//         ...cardFormData,
//         [key]: e.target.value || value || checked || ''
//     }
//     setCardForm(newState)
//     props.getCard({...newState, errors})

//     //delete error entry
//     if (formErrors[key]) delete formErrors[key]

//     submit()
//   }

//   const checkValue = (str, max) => {
//     if (str.charAt(0) !== '0' || str == '00') {
//       var num = parseInt(str);
//       if (isNaN(num) || num <= 0 || num > max) num = 1;
//       str = num > parseInt(max.toString().charAt(0)) 
//              && num.toString().length == 1 ? '0' + num : num.toString();
//     };
//     return str;
//   };

//   // const date = (input) => {
//   //   console.log(input)
//   //   console.log(input.length)
//   //   if (input.length > 1) {
//   //     let split = input.split('')
//   //     console.log(split)
//   //   }
//   // }
  
//   const submit = (e) => {
//     // e.preventDefault();
//     let  _formErrors = {};
//     Object.keys(cardFormData).forEach((item) => {
//       if (!cardFormData[item]) {
//         _formErrors[item] = true
//       }
//     })
//     seterrors(Object.keys(_formErrors).length)
//     // setFormErrors(_formErrors)
//     // CALL API WITH cardFormData
//   }

//   const [ formErrors, setFormErrors ] = useState({})

//   const [cardFormData, setCardForm] = useState({
//     cardName: "",
//     cardNumber: "",
//     cardExpiryDate: "",
//     cvv: ""
//   })

//   return (
//     <>       
//         <Grid.Row  className="inputWrap">
//             <Grid.Column width={8}>
//                 <Input 
//                     placeholder="Name on card"
//                     value={cardFormData.cardName}
//                     error={formErrors['cardName']}
//                     onChange={(e) => handleChange(e, 'cardName')}
//                 />
//                 <img src="/static/icons/grey-user.svg" className="inputImage" alt=""/>
//             </Grid.Column>
//             <Grid.Column width={8}>
//                 <Input
//                     placeholder="Card number"
//                     value={cardFormData.cardNumber}
//                     error={formErrors['cardNumber']}
//                     onChange={(e) => handleChange(e, 'cardNumber')}
//                 />
//                 <img src="/static/icons/grey-card.svg" className="inputImage" alt=""/>
//             </Grid.Column>
//             <Grid.Column width={8}>
//                 <Input 
//                     placeholder="Expiry date e.g(12/20)"
//                     value={cardFormData.cardExpiryDate}
//                     error={formErrors['cardExpiryDate']}
//                     maxLength="5"
//                     onChange={(e) => handleChange(e, 'cardExpiryDate')}
//                 />
//                 <img src="/static/icons/calendar.svg" className="inputImage" alt=""/>
//             </Grid.Column>
//             <Grid.Column width={8}>
//                 <Input 
//                     placeholder="CVC/CVV"
//                     error={formErrors['cvv']}
//                     onChange={(e) => handleChange(e, 'cvv')}
//                     value={cardFormData.cvv}/>
//                 <img src="/static/icons/grey_card2.svg" className="inputImage" alt=""/>
//             </Grid.Column>
            
//             <Grid.Column width={4}>
//             </Grid.Column>
//             {/* {
//                 props.showBtn ? 
//                 <Grid.Column width={8}>
//                     <Button onClick={submit}  secondary className="proceedBtn">
//                         Save card for future use
//                     </Button>
//                 </Grid.Column> : null
//             } */}
//             <Grid.Column width={4}>
//             </Grid.Column>
//         </Grid.Row>
//     </>
//   )
// }

import React, {Component} from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe,
  StripeProvider,
  Elements,
} from 'react-stripe-elements';
import { postBookings } from '../../services/auth.ts'

const createOptions = () => {
  return {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        letterSpacing: '0.025em',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#c23d4b',
      },
    },
  };
};

class SplitFieldsForm extends Component {
  state = {
    errorMessage: '',
    card: React.createRef()
  };

  handleChange = (e) => {
    // console.log(e)
    this.props.getCard(this.state.card)
    // if (error) {
    //   this.setState({errorMessage: error.message});
    // }
  };

  handleSubmit = (evt) => {
    console.log('submitting')
    evt.preventDefault();
    // if (this.props.stripe) {
    //   this.props.stripe.createToken()
    //   .then(this.props.handleResult);
    // } else {
    //   console.log("Stripe.js hasn't loaded yet.");
    // }
    this.props.stripe.handleCardPayment(
      this.props.client_secret,
      this.state.card
      // {
      //   cardNumber: '5555555555554444'
      // }
    ).then(function(result) {
      console.log(result)
      // Handle result.error or result.paymentIntent
    })
    .catch(err => {
      console.log(err)
    })
  };

  logg = () => {
    console.log(this.props)
  }
  
  handleReady = element => {
    console.log(element)
    // this.setState({ cardElement: element });
  };
  
  render() {
    return (
      <div className="mainCard" onReady={this.handleReady}>
      <form ref="card">
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <label>
                Card number
                <CardNumberElement
                  {...createOptions()}
                  onChange={this.handleChange}
                />
              </label>
            </Grid.Column>
            <Grid.Column width={8}>
              <label>
                Expiration date
                <CardExpiryElement
                  {...createOptions()}
                  onChange={this.handleChange}
                />
              </label>
            </Grid.Column>
            <Grid.Column width={8}>
              <label>
                CVC
                <CardCVCElement {...createOptions()} onChange={this.handleChange} />
              </label>
            </Grid.Column>
            <Grid.Column width={8}>
              <label>
                Postal code
                <input
                  name="name"
                  type="text"
                  placeholder="94115"
                  className="StripeElement"
                  required
                />
              </label>
            </Grid.Column>
          </Grid.Row>
        </Grid>
          
      </form>

      </div>
    );
  }
}

// const SplitFieldsForm = injectStripe(_SplitFieldsForm);

export default class CardDetailsForm extends Component {
  getCard = (e) => {
    this.props.getCard(e)
  }
  render() {
    return (
      // <StripeProvider apiKey={"pk_test_sntSe2uSuOohMsBh66biH34d00mLeSb2eh"}>
      //   <Elements>
          <SplitFieldsForm getCard={this.props.getCard} client_secret={this.props.client_secret} handleResult={this.props.handleResult} />
        // </Elements>
      // </StripeProvider>
    );
  }
}