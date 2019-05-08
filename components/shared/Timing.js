import React from 'react'
import {Grid} from 'semantic-ui-react'
import './less/timing.less'

export default function Timing() {
  return (
    <div>
    <Grid className="timesWrap">
        <Grid.Column width={5} className="leftCol">
            <div className="days">Sun</div>
            <div className="days">Mon</div>
            <div className="days">Tue</div>
            <div className="days activeDay">Wed</div>
            <div className="days">Thu</div>
            <div className="days">Fri</div>
            <div className="days">Sat</div>
        </Grid.Column>
        <Grid.Column width={11}>
            <Grid columns>
            <Grid.Row className="times">
                <Grid.Column width={7}>
                    <select
                    placeholder="lol" />
                </Grid.Column>
                <Grid.Column textAlign="center" className="to" width={2}>
                    to
                </Grid.Column>
                <Grid.Column width={7}>
                    <select
                    placeholder="lol" />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row className="times">
                <Grid.Column width={7}>
                    <select
                    placeholder="lol" />
                </Grid.Column>
                <Grid.Column textAlign="center" className="to" width={2}>
                    to
                </Grid.Column>
                <Grid.Column width={7}>
                    <select
                    placeholder="lol" />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row className="times">
                <Grid.Column width={7}>
                    <select
                    placeholder="lol" />
                </Grid.Column>
                <Grid.Column textAlign="center" className="to" width={2}>
                    to
                </Grid.Column>
                <Grid.Column width={7}>
                    <select
                    placeholder="lol" />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row className="times">
                <Grid.Column width={7}>
                    <select
                    placeholder="lol" />
                </Grid.Column>
                <Grid.Column textAlign="center" className="to" width={2}>
                    to
                </Grid.Column>
                <Grid.Column width={7}>
                    <select
                    placeholder="lol" />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row className="times">
                <Grid.Column width={7}>
                    <select
                    placeholder="lol" />
                </Grid.Column>
                <Grid.Column textAlign="center" className="to" width={2}>
                    to
                </Grid.Column>
                <Grid.Column width={7}>
                    <select
                    placeholder="lol" />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row className="times">
                <Grid.Column width={7}>
                    <select
                    placeholder="lol" />
                </Grid.Column>
                <Grid.Column textAlign="center" className="to" width={2}>
                    to
                </Grid.Column>
                <Grid.Column width={7}>
                    <select
                    placeholder="lol" />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row className="times">
                <Grid.Column width={7}>
                    <select
                    placeholder="lol" />
                </Grid.Column>
                <Grid.Column textAlign="center" className="to" width={2}>
                    to
                </Grid.Column>
                <Grid.Column width={7}>
                    <select
                    placeholder="lol" />
                </Grid.Column>
            </Grid.Row></Grid>
        </Grid.Column>
    </Grid>      
    </div>
  )
}
