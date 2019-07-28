import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import {getUserData} from '../../store'
import './less/bookService.less'
import Router from 'next/router';
import Display from '../shared/Display'
import * as actions from '../../store/actions'
import GlamourDatePicker from '../../components/serviceDetails/glamourDatePicker'
import LoginForm from '../login/LoginForm';

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

    const [open, close] = useState(false)

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
        !window.sessionStorage.getItem('glamourToken') ? Router.push('/login?from=book-service') : Router.push('/checkout')
    }

    const closePicker = () => {
        props.pickServiceTime(`${selectedDate} ${selectedTime}`) 
        setPickingStatus(true)
    }

    return (
        <div className="bookService">
            <p className="usersName" onClick={() => logg()}>
                Book {props.providerDetails.fullname}
            </p>

            <Display if={!isPickingDate}>
                <span onClick={() => closePicker()}>
                    <img src="/static/images/checked.svg" className="close" title="close" alt=""/>
                </span>
                <GlamourDatePicker bookedTimes={props.bookedTimes} userSchedule={props.providerDetails.schedules} pickTime={pickTime} selectedTime={selectedTime} selectedDate={selectedDate} pickDate={pickDate}/>
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
                <Button secondary className="proceedBtn" onClick={submit} disabled={total() === 0 || selectedDate === '' || selectedTime === '' ? true : false}>
                    Proceed to checkout
                </Button>
            </Display>

            
      
            {/* <Modal size='tiny' open={open} onClose={() => close(false)}>
                <LoginForm from="checkout" />
            </Modal> */}
        </div>
    )
}


const mapStateToProps = (state) => ({
    subscribedServices: state.subscribedServices.subscribedServices,
    userData: getUserData(state),
})


export default connect(mapStateToProps, actions)(BookService)
