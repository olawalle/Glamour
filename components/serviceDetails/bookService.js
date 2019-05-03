import React from 'react'
import { DatePicker } from 'antd';
import {Button}  from 'semantic-ui-react';
import './less/bookService.less'

const selectInput = () => {
    inputFocused = true
    toBeRendered()
    console.log(inputFocused)
}

const deFocus = () => {
    inputFocused = false
    console.log(inputFocused)
}

let inputFocused = false

const toBeRendered = (props) => {
 if (inputFocused) {
    return <p>comethig</p>
 } else {
     return <>
      <p className="usersName">
         Book {props.providerDetails.name}
     </p>
     <input type="text" 
             onFocus={() => selectInput()}
             placeholder="When do you want this?"
            className="date--picker has-width-95"/>
            <img src="../../static/images/calender.png" className="pickerImage"/>
     <span className="dateLabel">
         When do you want this?
     </span>
      <p className="bookService__title">
         selected services
      </p>
      <ul>
          <li className="bookService__title__amount">Title of service <span>£80</span></li>
          <li className="bookService__title__amount">Title of service <span>£80</span></li>
          <li className="bookService__title__amount_total">Total <span className="bookService__title__amount">£80</span></li>
      </ul>
      <Button secondary className="proceedBtn">
         Proceed to checkout
      </Button>
    </>
  }
}

const BookService = (props) => {
  return (
    <div className="bookService">
        {toBeRendered(props)}
    </div>
  )
}

export default BookService
