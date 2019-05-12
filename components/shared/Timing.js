import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import './less/timing.less'

export default class Timing extends Component {
    state = {
        days: [
            {day: 'Sun', active: 'active'},
            {day: 'Mon', active: ''}, 
            {day: 'Tue', active: ''}, 
            {day: 'Wed', active: ''}, 
            {day: 'Thr', active: ''}, 
            {day: 'Fri', active: ''}, 
            {day: 'Sat', active: ''}
        ],
        times: [
            '00:00',
            '00:30',
            '01:00',
            '01:30',
            '02:00',
            '02:30',
            '03:00',
            '03:30',
            '04:00',
            '04:30',
            '05:00',
            '05:30',
            '06:00',
            '06:30',
            '07:00',
            '07:30',
            '08:00',
            '08:30',
            '09:00',
            '09:30',
            '10:00',
            '10:30',
            '11:00',
            '11:30',
            '12:00',
            '12:30',
            '13:00',
            '13:30',
            '14:00',
            '14:30',
            '15:00',
            '15:30',
            '16:00',
            '16:30',
            '17:00',
            '17:30',
            '18:00',
            '18:30',
            '19:00',
            '19:30',
            '20:00',
            '20:30',
            '21:00',
            '21:30',
            '22:00',
            '22:30',
            '23:00',
            '23:30'
        ]
    }
    render () {
        return (
            <>
            <span className="timesWrap">
                {
                    this.state.days.map((day, i) =>  {
                        if (day.active === 'active') {
                            return <div className="myRow" key={`key${i}`}>
                                        <div className="myCol">
                                            <div className="days activeDay">{day.day}</div>
                                        </div>
                                        <div className="myCol times">
                                            <select>
                                                {
                                                    this.state.times.map(time => <option key={`option${i}`} value={time}>{time}</option>)
                                                }
                                            </select>
                                        </div>
                                        <div className="myCol_ to">to</div>
                                        <div className="myCol times">
                                            <select>
                                                {
                                                    this.state.times.map(time => <option key={`option${i}`} value={time}>{time}</option>)
                                                }
                                            </select>
                                        </div>
                                    </div>
                        } else {
                            return <div className="myRow" key={`key${i}`}>
                                        <div className="myCol">
                                            <div className="days">{day.day}</div>
                                        </div>
                                        <div className="myCol times">
                                            <select>
                                                {
                                                    this.state.times.map(time => <option key={`option${i}`} value={time}>{time}</option>)
                                                }
                                            </select>
                                        </div>
                                        <div className="myCol_ to">to</div>
                                        <div className="myCol times">
                                            <select>
                                                {
                                                    this.state.times.map(time => <option key={`option${i}`} value={time}>{time}</option>)
                                                }
                                            </select>
                                        </div>
                                    </div>
                        }
                    })
                }
            </span>
            </>
        )
    }
}
