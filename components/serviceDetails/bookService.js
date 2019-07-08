import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import {getUserData} from '../../store'
import './less/bookService.less'
import Link from 'next/link';
import Display from '../shared/Display'
import GlamourDatePicker from '../../components/serviceDetails/glamourDatePicker'

const BookService = (props) => {

    const total = () => {
        let total = 0
        props.subscribedServices.forEach(itm => total += parseFloat(itm.amount))
        return total
    }

    const renderServicesList = () => {
         return props.subscribedServices.map((item, i) => {
            return <div className="bookService__title__amount" key={'item'+i}>{item.serviceName} <span>£{item.amount}</span></div>
        })
    }

    let [ isPickingDate, setPickingStatus ] = useState(true);
    let [ selectedDate, setSelectedDate ] = useState('');
    let [ selectedTime, setSelectedTime ] = useState('');

    const pickDate = (date) => {
        setSelectedDate(date)
    }

    const pickTime = (time) => {
        setSelectedTime(time)
    }

    const logg = () => {
        console.log(props.providerDetails)
    }

    const submit = () => {
        console.log(props.subscribedServices)
    }

    return (
        <div className="bookService">
            <p className="usersName" onClick={() => logg()}>
                Book {props.providerDetails.fullname}
            </p>

            <Display if={!isPickingDate}>
                <span onClick={() => setPickingStatus(true)}>
                    <img src="/static/icons/close.svg" className="close" title="close" alt=""/>
                </span>
                <GlamourDatePicker userSchedule={props.providerDetails.schedules} pickTime={pickTime} selectedTime={selectedTime} selectedDate={selectedDate} pickDate={pickDate}/>
            </Display>

            <Display if={isPickingDate}>
                <img src="../../static/images/calender.png" className="pickerImage" />
                <input type="text"
                    value={`${selectedDate} ${selectedTime}`}
                    readOnly
                    onFocus={() => setPickingStatus(false)}
                    placeholder="When do you want this?"
                    className="date--picker" />
                <span className="dateLabel">
                    When do you want this?
                </span>
                <p className="bookService__title">
                    selected services
                </p>
                <div>
                    {renderServicesList()}
                    <div className="bookService__title__amount_total">Total <span>£{total()}</span></div>
                </div>
                <Button secondary className="proceedBtn" onClick={submit} disabled={total() === 0 ? true : false}>
                    <Link href='/checkout'>Proceed to checkout</Link>
                </Button>
            </Display>
        </div>
    )
}


const mapStateToProps = (state) => ({
    subscribedServices: state.subscribedServices.subscribedServices,
    userData: getUserData(state),
})


export default connect(mapStateToProps)(BookService)
