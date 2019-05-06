import React, { Component } from 'react';
import { Grid, Select, Input } from 'semantic-ui-react';
import InputRange from 'react-input-range';
import { DatePicker } from 'antd';
import "./less/providerForm.less"

const options = [
  { key: '', text: 'Not Applicable', value: '' },
  { key: 'onilne', text: 'Online', value: 'Online' },
  { key: 'offline', text: 'Offline', value: 'offline' },
]

// const ProviderForm = (props) => 
class ProviderForm extends Component {

  constructor(props) {
    super(props);
 
    this.state = {
      value: { min: 2, max: 10 },
    };
  }

  render () {
    return (
      <div className="providerForm pageWrap">
        <Grid columns={3} stackable>
            <Grid.Row>
                <Grid.Column  className="RangeCol">
                    <Select
                    className="Select"
                    fluid
                    options={options}
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
                    options={options}
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
                    <span className="RangeValues">£{this.state.value.min} - £{this.state.value.max}</span>
                  <InputRange
                    classNames="Range"
                    maxValue={20}
                    minValue={0}
                    value={this.state.value}
                    onChange={value => this.setState({ value })} />
                  </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
      </div>
    );
  }
}


export default ProviderForm