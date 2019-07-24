import React, {useEffect} from 'react'
import { Grid, Button } from 'semantic-ui-react';
import './less/upcomingBookings.less'
import dayjs from 'dayjs';
import { createConversation } from '../../../services/auth.ts'
import Router from 'next/router'

export default function UpcomingBookings(props) {
  useEffect(() => {
  }, [])

  const time = (time) => {
      return dayjs(time).format('DD MMM YYYY')
  }

  const renderSelectedServices = (booking) => {
    return booking.message.services.map((service, i) => i < booking.message.services.length - 1 ? <span key={`service${i}`}>{service.serviceName}, {" " }</span>:
        <span key={`service${i}`}>{service.serviceName}</span> )
  }

  const sendMessage = (id) => {
    let data = {
        clientId: id,
        providerId: props.user.id
    }
    console.log(data)
    createConversation(data)
    .then(res => {
        console.log(res)
        Router.push('/messages?conversationId='+res.data.data._id)
    })
    .catch(err => {
        console.log(err)
    })
  }

  return (
    <div className="upcomingBookings">
        <Grid stackable>
            {
                props.bookings && props.bookings.map((singleBooking, i) => {
                    return  <Grid.Row key={`booking${i}`}>
                        <Grid.Column width={10}>
                            <p className="customerName">
                                {singleBooking.from.name}
                            </p>
                            <p className="address">
                                idufuv dfviudf iusvdiu iduvsuidjk siud vius vdius sficviufv iud fiduvfid fvidvfiudf
                            </p>
                            <p className="servicesRequested">
                                {renderSelectedServices(singleBooking)}
                            </p>
                            <p className="time">
                                <img src="/static/icons/clock.svg" alt=""/> {time(singleBooking.time)}
                            </p>
                        </Grid.Column>
                        <Grid.Column width={6} className="right">
                            <Button size="huge"  className="secondaryBtn" secondary onClick={() => sendMessage(singleBooking.message.userId)}>Send Message</Button>
                        </Grid.Column>
                    </Grid.Row>
                })
            }
        </Grid>      
    </div>
  )
}
