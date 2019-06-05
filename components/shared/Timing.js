import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import './less/timing.less'

export default class Timing extends Component {
    state = {
        days: [
            {day: 'Sun', active: '', from: '', to: ''},
            {day: 'Mon', active: '', from: '', to: ''}, 
            {day: 'Tue', active: '', from: '', to: ''}, 
            {day: 'Wed', active: '', from: '', to: ''}, 
            {day: 'Thr', active: '', from: '', to: ''}, 
            {day: 'Fri', active: '', from: '', to: ''}, 
            {day: 'Sat', active: '', from: '', to: ''}
        ],
        times: [
            // '00:00 am',
            // '00:30 am',
            // '01:00 am',
            // '01:30 am',
            // '02:00 am',
            // '02:30 am',
            // '03:00 am',
            // '03:30 am',
            // '04:00 am',
            // '04:30 am',
            // '05:00 am',
            // '05:30 am',
            '06:00 am',
            '06:30 am',
            '07:00 am',
            '07:30 am',
            '08:00 am',
            '08:30 am',
            '09:00 am',
            '09:30 am',
            '10:00 am',
            '10:30 am',
            '11:00 am',
            '11:30 am',
            '12:00 pm',
            '12:30 pm',
            '01:00 pm',
            '01:30 pm',
            '02:00 pm',
            '02:30 pm',
            '03:00 pm',
            '03:30 pm',
            '04:00 pm',
            '04:30 pm',
            '05:00 pm',
            '05:30 pm',
            '06:00 pm',
            '06:30 pm',
            '07:00 pm',
            '07:30 pm',
            '08:00 pm',
            '08:30 pm',
            '09:00 pm',
            '09:30 pm',
            '10:00 pm',
            '10:30 pm',
            '11:00 pm',
            '11:30 pm',
        ]
    }
    pickDay = (i) => {
        let newDays = [...this.state.days]
        let newDays_ = newDays.map((day, j) => {
            if (i === j) {
                return day.active === '' ? {...day, active: 'activeDay', from: this.state.times[0], to: this.state.times[0]} : {...day, active: ''} 
            } else {
                return day
            }
        })
        this.setState({days: newDays_}, () => {
            let active = newDays_.filter(day => day.active === 'activeDay')
            .map(d => {
                return {day: d.day, from: d.from, to: d.to}
            })
            this.props.getTiming(
                active
            )
        })        
    }

    updateFrom = (e, i) => {
        let days = [...this.state.days]
        let days_ = days.map((day, j) => {
            if (i === j) {
                return {...day, from: e.target.value}
            } else {
                return day
            }
        })
        this.setState({ days: days_ }, () => {
            this.props.getTiming(
                days_.filter(day => day.active === 'activeDay')
                .map(d => {
                    return {day: d.day, from: d.from, to: d.to}
                })
            )
        })
    }

    
    updateTo = (e, i) => {
        let days = [...this.state.days]
        let days_ = days.map((day, j) => {
            if (i === j) {
                return {...day, to: e.target.value}
            } else {
                return day
            }
        })
        this.setState({ days: days_ }, () => {
            let active = days_.filter(day => day.active === 'activeDay')
            .map(d => {
                return {day: d.day, from: d.from, to: d.to}
            })
            this.props.getTiming(
                active
            )
        })
    }

    render () {
        return (
            <>
            <span className="timesWrap">
                {
                    this.state.days.map((day, i) =>  {
                        return <div className="myRow" key={`key${i}`}>
                                    <div className="myCol">
                                        <div className={`days ${day.active}`} onClick={() => this.pickDay(i)}>{day.day}</div>
                                    </div>
                                    <div className="myCol times">
                                        <select value={day.from} onChange={($event) => this.updateFrom($event, i)}>
                                            {
                                                this.state.times.map(time => <option key={'time'+(Math.random() * 10) + (Math.random() * 10)} value={time}>{time}</option>)
                                            }
                                        </select>
                                    </div>
                                    <div className="myCol_ to">to</div>
                                    <div className="myCol times">
                                        <select value={day.to} onChange={($event) => this.updateTo($event, i)}>
                                            {
                                                this.state.times.map(time => <option key={'time'+(Math.random() * 10) + (Math.random() * 10)} value={time}>{time}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>
                    })
                }
            </span>
            </>
        )
    }
}
