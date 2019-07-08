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
import dayjs from 'dayjs'

const options = [
  { key: '', text: 'Not Applicable', value: '' },
  { key: 'onilne', text: 'Online', value: 'Online' },
  { key: 'offline', text: 'Offline', value: 'offline' },
]

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
    ],
    formFields: {
      sortBy: '',
      searchFor: '',
      postcode: '',
      distance: '',
      // when: null,
      priceRange: ''
    },
    when: null,
  }


  updateForm_ = (a, b) => {
    this.setState({when: a}, () => {
      let day = dayjs(b).$d.toString().split(' ')[0]
      this.props.getWhenServiceNeeded(day)
    })
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
      let fields = {...this.state.formFields}
      fields.priceRange = `${this.state.selectedValues.min} - ${this.state.selectedValues.max}`
      this.setState({formFields: fields})
    })
  }

  updateForm = (e, data, type) => {
    let fields = {...this.state.formFields}
    e.target.value ? fields[type] = e.target.value : fields[type] = data.value
    this.setState({formFields: fields})
  }
  
  
  componentWillMount () {
    if (this.props.services && this.props.services.length > 0) {
      let options = this.props.services.map(service => {
        return {
          text: service.serviceName,
          key: service._id,
          value: service._id  
        }  
      })
      this.setState({options})
    }
  }


  componentDidMount() {}

  componentDidUpdate() {
    this.props.getFormData(this.state.formFields)
  }

  render () {
    return (
      <div className="providerForm pageWrap">
        <Grid columns={3} stackable>
            <Grid.Row>
                <Grid.Column  className="RangeCol">
                    <Select
                    className="Select"
                    onChange={(e, data) => this.updateForm(e, data, 'sortBy')}
                    value={this.state.formFields.sortBy}
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
                    onChange={(e, data) => this.updateForm(e, data, 'searchFor')}
                    value={this.state.formFields.searchFor}
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
                    onChange={(e, data) => this.updateForm(e, data, 'postcode')}
                    value={this.state.formFields.postcode}
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
                    onChange={(e, data) => this.updateForm(e, data, 'distance')}
                    value={this.state.formFields.distance}
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
                      onChange={(e, data) => this.updateForm_(e, data)}
                      value={this.state.when}
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
  services: state.service.beautyServices.allServices,
  serviceProviders: state.serviceProviders.allProviders
})

export default  connect(mapStateToProps, actions)(ProviderForm)