import React, { useState, Component } from 'react'
import './less/glamourDatePicker.less'
import { Grid } from 'semantic-ui-react';
import dayjs from 'dayjs'


export default class glamourDatePicker extends Component {

  state = {
    datesDictionary: {},
    dateLimits: {
      min: '',
      max: ''
    },
    disableBtn: {
      next: false,
      prev: true
    },
    availableDaysOfTheWeek: [],
    allDates: [],
    monthNames: [
      {name: "January", position: 1},
      {name: "February", position: 2},
      {name: "March", position: 3},
      {name: "April", position: 4},
      {name: "May", position: 5},
      {name: "June", position: 6},
      {name: "July", position: 7},
      {name: "August", position: 8},
      {name: "September", position: 9},
      {name: "October", position: 10},
      {name: "November", position: 11},
      {name: "December", position: 12}
    ],
    pickedDate: '',
    userAvailableTimes: { from: '09:00 am', to: '05:00 pm' },
    userAvailableTimesArray: [],
    disabledTimes: null,
    times: [
        {time: '00:00 am' , selected: '', disabled: ''},
        {time: '00:30 am' , selected: '', disabled: ''},
        {time: '01:00 am' , selected: '', disabled: ''},
        {time: '01:30 am' , selected: '', disabled: ''},
        {time: '02:00 am' , selected: '', disabled: ''},
        {time: '02:30 am' , selected: '', disabled: ''},
        {time: '03:00 am' , selected: '', disabled: ''},
        {time: '03:30 am' , selected: '', disabled: ''},
        {time: '04:00 am' , selected: '', disabled: ''},
        {time: '04:30 am' , selected: '', disabled: ''},
        {time: '05:00 am' , selected: '', disabled: ''},
        {time: '05:30 am' , selected: '', disabled: ''},
        {time: '06:00 am' , selected: '', disabled: ''},
        {time: '06:30 am' , selected: '', disabled: ''},
        {time: '07:00 am' , selected: '', disabled: ''},
        {time: '07:30 am' , selected: '', disabled: ''},
        {time: '08:00 am' , selected: '', disabled: ''},
        {time: '08:30 am' , selected: '', disabled: ''},
        {time: '09:00 am' , selected: '', disabled: ''},
        {time: '09:30 am' , selected: '', disabled: ''},
        {time: '10:00 am' , selected: '', disabled: ''},
        {time: '10:30 am' , selected: '', disabled: ''},
        {time: '11:00 am' , selected: '', disabled: ''},
        {time: '11:30 am' , selected: '', disabled: ''},
        {time: '12:00 pm', selected: '', disabled: ''},
        {time: '12:30 pm', selected: '', disabled: ''},
        {time: '01:00 pm', selected: '', disabled: ''},
        {time: '01:30 pm', selected: '', disabled: ''},
        {time: '02:00 pm', selected: '', disabled: ''},
        {time: '02:30 pm', selected: '', disabled: ''},
        {time: '03:00 pm', selected: '', disabled: ''},
        {time: '03:30 pm', selected: '', disabled: ''},
        {time: '04:00 pm', selected: '', disabled: ''},
        {time: '04:30 pm', selected: '', disabled: ''},
        {time: '05:00 pm', selected: '', disabled: ''},
        {time: '05:30 pm', selected: '', disabled: ''},
        {time: '06:00 pm', selected: '', disabled: ''},
        {time: '06:30 pm', selected: '', disabled: ''},
        {time: '07:00 pm', selected: '', disabled: ''},
        {time: '07:30 pm', selected: '', disabled: ''},
        {time: '08:00 pm', selected: '', disabled: ''},
        {time: '08:30 pm', selected: '', disabled: ''},
        {time: '09:00 pm', selected: '', disabled: ''},
        {time: '09:30 pm', selected: '', disabled: ''},
        {time: '10:00 pm', selected: '', disabled: ''},
        {time: '10:30 pm', selected: '', disabled: ''},
        {time: '11:00 pm', selected: '', disabled: ''},
        {time: '11:30 pm', selected: '', disabled: ''},
    ]
  }

  getDaysArray = (start, end) => {
    for(var arr=[],dt=start; dt<=end; dt.setDate(dt.getDate()+1)){
        arr.push(new Date(dt));
    }
    return arr;
  };
  
  getDates = (previouslySelectedDate) => {
    const start = dayjs().format('YYYY-MM-DD')
    const end = dayjs().add(1, 'year').format('YYYY-MM-DD')
    var daylist = this.getDaysArray(new Date(start),new Date(end));
    let arr = []
    daylist.map((v, i) => {
      let date = dayjs(v).format('DD MMMM YYYY').split(" ")
      let reshapedDate = {}
      reshapedDate.month = `${date[1]}, ${date[2]}`
      reshapedDate.day = date[0]
      i === 0 ? reshapedDate.active = 'active' : reshapedDate.active = ''
      arr.push(reshapedDate)
    })

    this.setState({pickedDate: `${arr[0].day} ${arr[0].month}`})

    this.setState({dateLimits: {
      min: arr[0],
      max: arr[arr.length - 1]
    }})

    let datesDictionary = arr.reduce((agg, curr) => {  
      agg[curr.month] = agg[curr.month] ? agg[curr.month].concat(curr) : [curr];
      return agg
    }, {})
    let currentMonth = dayjs().format('MMMM')
    let currentYear = dayjs().format('YYYY')

    this.setState({datesDictionary: datesDictionary})

    
    if (previouslySelectedDate !== '') {
      let day = previouslySelectedDate.split(",")[0].split(" ")[0]
      let month = previouslySelectedDate.split(",")[0].split(" ")[1]
      let year = previouslySelectedDate.split(",")[1].replace(/\s/g,'')
      let selectedDatesPosition = 0
      let fullPreviouslySelectedDate = datesDictionary[`${month}, ${year}`].map((date, i) => {
        if (day === date.day) {
          selectedDatesPosition = i
          return  {...date, active: 'active'}
         } else {
          return {...date, active: ''}
         }
      }).map(d => {
        return {...d, isAvailable: this.userIsAvailable(`${d.day}, ${d.month}`)}
      })
      this.moveDatesLeft(selectedDatesPosition)
      this.setState({allDates: fullPreviouslySelectedDate}, () => {
      })
    } else {
      let all = datesDictionary[`${currentMonth}, ${currentYear}`].map(d => {
        return {...d, isAvailable: this.userIsAvailable(`${d.day}, ${d.month}`)}
      })
      this.setState({allDates: all})
    }
  }

  userIsAvailable = (date) => {
    let whatDay = (dayjs(date).$d).toString().split(' ')[0]
    let isAvailable = this.props.userSchedule.map(day => day.day).includes(whatDay)
    return isAvailable ? 'isAvailable' : 'notAvailable'
  }

  moveDatesLeft = (n) => {
    // settimeout needed because there a time lag from when component is mounted before refs are defined
    setTimeout(() => {
      let position = this.refs.section.scrollLeft
      let dayWidth = this.refs.section.clientWidth / 7
      if (!n) {
        this.refs.section.scrollLeft = position + dayWidth
      } else if (n && n > 6) {
          // scroll to the selected date
          // ***** 3px added coz there is a smallfraction of the first timewrap showing
          this.refs.section.scrollLeft = position + (dayWidth * n - 7) + 3   
      }
    }, 100);
  }

  moveDatesRight = () => {
    let position = this.refs.section.scrollLeft
    let dayWidth = this.refs.section.clientWidth / 7
    this.refs.section.scrollLeft = position - dayWidth
  }

  renderDates = () => {
    return this.state.allDates.map((day, i) => {
      return i === 0 ? <div key={`date${i}`} onClick={() => this.pick(i)} className={`card--content ${day.active} ${day.isAvailable}`} title={`Book for ${ day.day } ${day.month}`}>
              {day.day}
            </div>
            :
            <div key={`date${i}`} onClick={() => this.pick(i)} className={`card--content ${day.active} ${day.isAvailable}`}  title={`Book for ${ day.day } ${day.month}`}>
              {day.day}
            </div>
    })
  }

  pick = (i) => {
    let newDates = this.state.allDates.map((date, j) => i === j ? {...date, active: 'active'} : {...date, active: ''})
    let pickedDate = `${newDates[i].day} ${newDates[i].month}`

    let whatDay = (dayjs(pickedDate).$d).toString().split(' ')[0]
    let daySchedule = this.props.userSchedule.find(d => d.day === whatDay)
    this.setState({userAvailableTimes: daySchedule}, () => {
      this.getUserAvailableTimesArray()
    })

    let arr = []
    arr[0] = this.props.bookedTimes
    let selectedDay = arr.find(date => date.date === pickedDate)
    if (selectedDay) {
      this.setState({
        disabledTimes: {time: selectedDay.time_, timeCount: selectedDay.duration * 2}
      })
    } else {
      this.setState({
        disabledTimes: null
      })
    }

    this.setState({allDates: newDates})
    this.setState({pickedDate: pickedDate}, () => {
      this.props.pickDate(pickedDate)
    })
  }

  getMonth = () => {
    if (this.state.dateLimits.min.month === this.state.allDates[0].month) {
    }
    if (this.state.dateLimits.max.month === this.state.allDates[0].month) {
    }
    return this.state.allDates[0] ? this.state.allDates[0].month : ''
  }

  pickTime = (i, selectedTime) => {
    if (i === null) {
      // console.log(this.state.userAvailableTimesArray)
      let reshapedTimes = this.state.userAvailableTimesArray.map((time, j) => {
        if (selectedTime === time.time) {
          this.props.pickTime(this.state.userAvailableTimesArray[j].time)
          return {...time, selected: 'active'}
        }  else {
            return {...time, selected: ''}
          }
      })
      this.setState({userAvailableTimesArray: reshapedTimes})
    } else {
      let reshapedTimes = this.state.userAvailableTimesArray.map((time, j) => {
        return i === j ? {...time, selected: 'active'} : {...time, selected: ''}
      })
      this.setState({userAvailableTimesArray: reshapedTimes}, () => {
        this.props.pickTime(this.state.userAvailableTimesArray[i].time)
      })
    }
  }

  switchMonth = (n) => {
    let currentMonth = this.getMonth().split(",")[0]
    let currentYear = this.getMonth().split(",")[1]
    let active = this.state.monthNames.find(month => month.name === currentMonth).position
    if (n == 1) {
      // switch to next month
      if (active < 12) {
        let newYear = currentYear
        this.setState({
          allDates: this.state.datesDictionary[`${this.state.monthNames[active].name},${newYear}`].map(d => {
            return {...d, isAvailable: this.userIsAvailable(`${d.day}, ${d.month}`)}
          })
        })
      } else {
        let newYear = parseFloat(currentYear.replace(/\s/g,'')) + 1
        this.setState({
          allDates: this.state.datesDictionary[this.state.monthNames[0].name+", "+newYear].map(d => {
            return {...d, isAvailable: this.userIsAvailable(`${d.day}, ${d.month}`)}
          })
        })
      }
    } else {
      // switch to previous month
      if (active === 1) {
        let newYear = parseFloat(currentYear.replace(/\s/g,'')) - 1
        this.setState({
          allDates: this.state.datesDictionary[this.state.monthNames[11].name+", "+newYear].map(d => {
            return {...d, isAvailable: this.userIsAvailable(`${d.day}, ${d.month}`)}
          })
        })
      } else {
        let newYear = currentYear
        this.setState({
          allDates: this.state.datesDictionary[`${this.state.monthNames[active - 2].name},${newYear}`].map(d => {
            return {...d, isAvailable: this.userIsAvailable(`${d.day}, ${d.month}`)}
          })
        })
      }
    }
  }

  getUserAvailableTimesArray = () => {
    let limits = {}
    this.state.times.find((time, i) => {
      if (time.time === this.state.userAvailableTimes.from) {
        limits.min = i
      }
      if (time.time === this.state.userAvailableTimes.to) {
        limits.max = i
      }
    })

    let userAvailableTimesArray = this.state.times.filter((time, i) => {
      if (i >= limits.min && limits.max >= i) {
        return time
      }
    })
    
    if (this.state.disabledTimes) {
      let a = userAvailableTimesArray.findIndex((time, i) => time.time === this.state.disabledTimes.time)
      let b = userAvailableTimesArray.map((time, i) => {
        return i >= a && i <= a + this.state.disabledTimes.timeCount ? {...time, disabled: 'isDisabled'} : {...time}
      })
      this.setState({userAvailableTimesArray: b}, () => {
        this.pickTime(null, this.props.selectedTime)  
      })
    } else {
      this.setState({userAvailableTimesArray: userAvailableTimesArray}, () => {
        this.pickTime(null, this.props.selectedTime)  
      })
    }
  }

  componentWillMount() {
    this.getDates(this.props.selectedDate)
    this.getUserAvailableTimesArray()
  }

  render () {
    return (
      <div className="datePickerWrap">
        <p className="month">
          <img src="/static/icons/chevron-right.svg" onClick={() => this.switchMonth(2)} className="month-left-chevron turn" alt=""/>
            {this.getMonth()}
          <img src="/static/icons/chevron-right.svg" onClick={() => this.switchMonth(1)} className="month-left-chevron" alt=""/>
        </p>
        <div className="days" ref="days">
          <img src="/static/icons/chevron-right.svg" onClick={() => this.moveDatesRight()} className="left-chevron turn" alt=""/>
          <section className="kard" ref="section">
            {
              this.renderDates()
            }
          </section>
          <img src="/static/icons/chevron-right.svg" onClick={() => this.moveDatesLeft()} className="right-chevron" alt=""/>
        </div>
        <Grid className="time">
          <Grid.Row className="timeRow">
            {
             this.state.userAvailableTimesArray.map((time, i) => {
               return time.disabled === 'isDisabled' ? <Grid.Column width={4} key={`time${i}`}>
                        <div className={`singleTime ${time.selected} ${time.disabled}`} title="user booked for this time">
                          {time.time}
                        </div>
                      </Grid.Column> : <Grid.Column width={4} key={`time${i}`}>
                        <div className={`singleTime ${time.selected} ${time.disabled}`} onClick={() => this.pickTime(i)}>
                          {time.time}
                        </div>
                      </Grid.Column>
              }) 
            }
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
