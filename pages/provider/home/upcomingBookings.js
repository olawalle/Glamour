import React from 'react'
import { Grid, Button } from 'semantic-ui-react';
import './less/upcomingBookings.less'

export default function UpcomingBookings() {
  return (
    <div className="upcomingBookings">
        <Grid stackable>
            <Grid.Row>
                <Grid.Column width={8}>
                    <p className="customerName">
                        Olawalle Ariyo
                    </p>
                    <p className="address">
                        idufuv dfviudf iusvdiu iduvsuidjk siud vius vdius sficviufv iud fiduvfid fvidvfiudf
                    </p>
                    <p className="servicesRequested">
                        diufd, iudiufd, difudifu, sodisodibsod
                    </p>
                    <p className="time">
                        <img src="/static/icons/clock.svg" alt=""/> 4pm Today
                    </p>
                </Grid.Column>
                <Grid.Column width={8} className="right">
                    <Button size="huge"  className="secondaryBtn" secondary>Send Message</Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>      
    </div>
  )
}
