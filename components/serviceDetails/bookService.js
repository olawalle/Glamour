import React from 'react'
import { DatePicker } from 'antd';
import {Button}  from 'semantic-ui-react';
import './less/bookService.less'

const BookService = (props) => {
  return (
    <div className="bookService">
        <p className="usersName">
            Book {props.providerDetails.name}
        </p>
        <DatePicker
        className="date--picker has-width-95"
        showTime
        placeholder="When do you want this?"
        suffixIcon={<img src="../../static/images/calender.png" className="pickerImage"/>}
        />
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
    </div>
  )
}

export default BookService
