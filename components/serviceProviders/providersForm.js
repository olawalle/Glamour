import React, { Component } from 'react';
import { Grid, Select, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import * as actions from '../../store/actions';

import { DatePicker } from 'antd';
import "./less/providerForm.less"
import { getAllServices, getAllTrends } from '../../services/generatData.ts'

const options = [
  { key: '', text: 'Not Applicable', value: '' },
  { key: 'onilne', text: 'Online', value: 'Online' },
  { key: 'offline', text: 'Offline', value: 'offline' },
]

// const ProviderForm = (props) => 
class ProviderForm extends Component {
  state = {
    value: { min: 2, max: 10 },
    styles: {},
    value: { start: 20, end: 80 },
    selectedValues: {min: 0, max: 5},
    options: [],
    distance: [
      { key: 'less than 1 mile', text: 'less than 1 mile', value: 'less than 1 mile' },
      { key: '1 - 5 miles', text: '1 - 5 miles', value: '1 - 5 miles' },
      { key: '6 - 10 miles', text: '6 - 10 miles', value: '6 - 10 miles' },
      { key: 'Over 10 miles', text: 'Over 10 miles', value: 'Over 10 miles' }
    ]
  }

  onChange = (event) => {
    console.log(event)
    this.setState(
      {
        selectedValues: {
        min: event[0],
        max: event[1]
      }
    }, () => {
      console.log(this.state.selectedValues)
    })
  }
  
  
  componentWillMount () {
    getAllServices()
    .then(res => {
      this.props.saveServices(res.data.services)
      let options = []
      Object.keys(res.data.services).forEach(key => {
          let obj = {}
          obj.text = res.data.services[key].serviceName
          obj.key = res.data.services[key].serviceName
          obj.value = res.data.services[key].serviceName   
          options.push(obj)         
      })
      this.setState({options}, () => {
          // console.log(this.state)
      })
    })
    .catch(err => {
      console.log(err)
    })

    getAllTrends()
    .then(res => {
      this.props.saveTrends(res.data.services)
    })
    .catch(err => {
      console.log(err)
    })
  }


  componentDidMount() {}

  render () {
    return (
      <div className="providerForm pageWrap">
        <Grid columns={3} stackable>
            <Grid.Row>
                <Grid.Column  className="RangeCol">
                    <Select
                    className="Select"
                    fluid
                    options={this.state.options}
                    />
                    <img src="../../static/icons/sort.svg" className="selectIcon" alt=""/>
                    <span className="selectLabel">
                        Sort by
                    </span>
                </Grid.Column>
                <Grid.Column  className="RangeCol">
                    <Input
                    type="text"
                    className="FormInput"
                    size="huge"
                    placeholder='Search term goes here'
                    fluid
                    />
                    <img src="../../static/icons/search.svg" className="inputIcon" alt=""/>
                    <span className="myLabel">
                        Search for
                    </span>
                </Grid.Column>
                <Grid.Column  className="RangeCol">
                    <Input
                    type="text"
                    className="FormInput"
                    size="huge"
                    placeholder='WC1A 1AA'
                    fluid
                    />
                    <img src="../../static/icons/mile.svg" className="inputIcon" alt=""/>
                    <span className="myLabel">
                        Post code
                    </span>
                </Grid.Column>
                <Grid.Column  className="RangeCol">
                    <Select
                    className="Select"
                    fluid
                    options={this.state.distance}
                    />
                    <img src="../../static/icons/mile.svg" className="selectIcon" alt=""/>
                    <span className="selectLabel">
                      Distance
                    </span>
                </Grid.Column>
                <Grid.Column  className="RangeCol">
                    <DatePicker
                      className="date--picker"
                      showTime
                      placeholder="When do you want this?"
                      suffixIcon={<img className="PickerIcon" src="../../static/images/calender.png" />}
                    />
                    <span className="dateLabel">
                      When do you want this?
                    </span>
                </Grid.Column>
                <Grid.Column className="RangeCol">
                  <div className="RangeCol_">
                    <span className="RangeLabel">Price range</span>
                    <span className="RangeValues">£{this.state.selectedValues.min} - £{this.state.selectedValues.max}</span>
                      
                    <Range min={0} max={20} className="slider_" defaultValue={[this.state.selectedValues.min, this.state.selectedValues.max]} onChange={(event) => this.onChange(event)}  />
                  </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  services: state.service.beautyServices.allServices
})

export default  connect(mapStateToProps, actions)(ProviderForm)