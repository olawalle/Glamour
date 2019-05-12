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
    ]
  }

  getDaysArray = (start, end) => {
    for(var arr=[],dt=start; dt<=end; dt.setDate(dt.getDate()+1)){
        arr.push(new Date(dt));
    }
    return arr;
  };
  
  
  getDates = () => {
    const start = dayjs().format('YYYY-MM-DD')
    const end = dayjs().add(1, 'year').format('YYYY-MM-DD')
    var daylist = this.getDaysArray(new Date(start),new Date(end));
    let arr = []
    daylist.map((v) => {
      let date = dayjs(v).format('DD MMMM YYYY').split(" ")
      let reshapedDate = {}
      reshapedDate.month = `${date[1]}, ${date[2]}`
      reshapedDate.day = date[0]
      arr.push(reshapedDate)
    })

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
    this.setState({allDates: datesDictionary[`${currentMonth}, ${currentYear}`]})
  }

  disableBtnMethod = () => {
    let split = this.getMonth().split(',')
    let currentMonth = this.state.monthNames[this.state.monthNames.find((mnth, i) => mnth.name === split[0]).position]
    // if (this.state.dateLimits.min === this.getMonth) {
    //   this.setState({dateLimits: {min: true, max: false}}) 
    // console.log(this.state.dateLimits)
    // } else {
    //   this.setState({
    //     dateLimits: {min: false, max: false}}) 
    // console.log(this.state.dateLimits)
    // }
    if (this.state.dateLimits.min.month === currentMonth) {
      // this.setState({dateLimits: {min: false, max: true}}) 
      console.log('min reached')
    } 
    if (this.state.dateLimits.max.month === currentMonth) {
      // this.setState({dateLimits: {min: false, max: false}}) 
      console.log('max reached')
    }
  }

  moveDatesLeft = () => {
    let position = this.refs.section.scrollLeft
    let dayWidth = this.refs.section.clientWidth / 7
    this.refs.section.scrollLeft = position + dayWidth
  }

  
  moveDatesRight = () => {
    let position = this.refs.section.scrollLeft
    let dayWidth = this.refs.section.clientWidth / 7
    this.refs.section.scrollLeft = position - dayWidth
  }

  renderDates = () => {
    return this.state.allDates.map((day, i) => {
      return i === 0 ? <div key={`date${i}`} className="card--content active" title={`Book for ${ day.day } ${day.month}`}>
              {day.day}
            </div>
            :
            <div key={`date${i}`} className="card--content"  title={`Book for ${ day.day } ${day.month}`}>
              {day.day}
            </div>
    })
  }

  getMonth = () => {
    if (this.state.dateLimits.min.month === this.state.allDates[0].month) {
      console.log('min')
    }
    if (this.state.dateLimits.max.month === this.state.allDates[0].month) {
      console.log('max')
    }
    return this.state.allDates[0] ? this.state.allDates[0].month : ''
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
          allDates: this.state.datesDictionary[`${this.state.monthNames[active].name},${newYear}`]
        })
      } else {
        let newYear = parseFloat(currentYear.replace(/\s/g,'')) + 1
        console.log(this.state.monthNames[0].name+", "+newYear)
        this.setState({
          allDates: this.state.datesDictionary[this.state.monthNames[0].name+", "+newYear]
        })
      }
    } else {
      // switch to previous month
      if (active === 1) {
        let newYear = parseFloat(currentYear.replace(/\s/g,'')) - 1
        console.log(this.state.monthNames[11].name+", "+newYear)
        this.setState({
          allDates: this.state.datesDictionary[this.state.monthNames[11].name+", "+newYear]
        })
      } else {
        let newYear = currentYear
        this.setState({
          allDates: this.state.datesDictionary[`${this.state.monthNames[active - 2].name},${newYear}`]
        })
      }
    }
    this.disableBtnMethod()
  }

  componentWillMount() {
    let arr = this.state.monthNames.map((month, i) => { 
      return {month: month, position: i + 1}
    })
    console.log(arr)
    this.getDates()
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
            <Grid.Column width={4}>
              <div className="singleTime">
                6am
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              <div className="singleTime active">
                6am
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              <div className="singleTime">
                6am
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              <div className="singleTime">
                6am
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              <div className="singleTime">
                6am
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              <div className="singleTime">
                6am
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              <div className="singleTime">
                6am
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              <div className="singleTime">
                6am
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
