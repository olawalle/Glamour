import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import './less/bookService.less'
import Link from 'next/link';
import Display from '../shared/Display'
import GlamourDatePicker from '../../components/serviceDetails/glamourDatePicker'

const BookService = (props) => {

    const total = () => {
        let total = 0
        props.subscribedServices.forEach(itm => total += parseFloat(itm.price))
        return total
    }

    const renderServicesList = () => {
         return props.subscribedServices.map(item => {
            return <div className="bookService__title__amount">{item.title} <span>£{item.price}</span></div>
        })
    }

    let [ isPickingDate, setPickingStatus ] = useState(true);

    return (
        <div className="bookService">
            <p className="usersName">
                Book {props.providerDetails.name}
            </p>
            <Display if={!isPickingDate}>
                <span onClick={() => setPickingStatus(true)}>close</span>
                <GlamourDatePicker />
            </Display>
            <Display if={isPickingDate}>
                <input type="text"
                    onFocus={() => setPickingStatus(false)}
                    placeholder="When do you want this?"
                    className="date--picker has-width-95" />
                <img src="../../static/images/calender.png" className="pickerImage" />
                <span className="dateLabel">
                    When do you want this?
                </span>
                <p className="bookService__title">
                    selected services
                </p>
                <p>
                    {renderServicesList()}
                    <div className="bookService__title__amount_total">Total <span>£{total()}</span></div>
                </p>
                <Button secondary className="proceedBtn">
                    <Link href='/checkout'>Proceed to checkout</Link>
                </Button>
            </Display>
        </div>
    )
}


const mapStateToProps = (state) => ({
    subscribedServices: state.subscribedServices.subscribedServices
})


export default connect(mapStateToProps)(BookService)
