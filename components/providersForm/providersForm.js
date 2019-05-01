import React, { Component } from 'react';
import { Grid, Select, Input } from 'semantic-ui-react';
import InputRange from 'react-input-range';
import { DatePicker } from 'antd';

const styles = {
  pageWrap: {
    border: '1px solid #eee',
    margin: '20px 0',
    padding: '20px'
  },
  inputIcon: {
    top: '-63px',
    position: 'relative',
    left: '12px',
    zIndex: '100',
    width: '20px'
  },  
  selectIcon: {
    top: '-45px',
    position: 'relative',
    left: '12px',
    zIndex: '100',
    width: '20px'
  },
  myLabel: {
    position: 'relative',
    top: '-88px',
    left: '17px',
    fontSize: '10px',
    color: '#637381'
  },
  selectLabel: {
    position: 'relative',
    top: '-66px',
    left: '21px',
    fontSize: '10px',
    color: '#637381'
  },
  dateLabel: {
    position: 'relative',
    top: '-50px',
    left: '37px',
    fontSize: '10px',
    color: '#637381'
  },
  Column: {
    background: 'white',
    padding: '45px 20px',
    margin: '30px 0px',
    paddingBottom: '15px'
  },
  Link: {
    color: '#e84671'
  },
  Form: {
    padding: '5px 25px'
  },
  FormInput: {
    margin: '10px 0px',
    marginBottom: '30px'
  },
  Header: {
  },
  SubHeader: {
    marginTop: '10px',
  },
  Select: {
    margin: '10px 0px',
    height: '52px',
    borderRadius: '0px',
    borderColor: '#C4CDD5',
    paddingTop: '24px',
    fontSize: '16px',
    color: '#000',
    paddingLeft: '40px'
  },
  Checkbox: {
    paddingTop: '3px',
    marginRight: '10px'
  },
  Button: {
    height: '60px',
    width: '126px'
  },
  accept: {
    margin: '2em 0em'
  },
  RangeCol: {
    height: '65px',
  },
  RangeCol_: {
    padding: '17px 20px 0 20px'
  },
  RangeLabel: {
    fontSize: '16px',
    color: '#212B36',
    fontWeight: '500',
    float: 'left',
  },
  RangeValues: {
    float: 'right',
    fontWeight: '600',
    fontSize: '18px',
    color: '#E84671'
  }
}

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
      <div style={styles.pageWrap} className="providerForm">
        <Grid columns={3}>
            <Grid.Row>
                <Grid.Column  style={styles.RangeCol}>
                    <Select
                    style={styles.Select}
                    fluid
                    options={options}
                    />
                    <img src="../../static/icons/sort.svg" style={styles.selectIcon} alt=""/>
                    <span style={styles.selectLabel}>
                        Sort by
                    </span>
                </Grid.Column>
                <Grid.Column  style={styles.RangeCol}>
                    <Input
                    type="text"
                    style={styles.FormInput}
                    size="huge"
                    placeholder='Search term goes here'
                    fluid
                    />
                    <img src="../../static/icons/search.svg" style={styles.inputIcon} alt=""/>
                    <span style={styles.myLabel}>
                        Search for
                    </span>
                </Grid.Column>
                <Grid.Column  style={styles.RangeCol}>
                    <Input
                    type="text"
                    style={styles.FormInput}
                    size="huge"
                    placeholder='WC1A 1AA'
                    fluid
                    />
                    <img src="../../static/icons/mile.svg" style={styles.inputIcon} alt=""/>
                    <span style={styles.myLabel}>
                        Post code
                    </span>
                </Grid.Column>
                <Grid.Column  style={styles.RangeCol}>
                    <Select
                    style={styles.Select}
                    fluid
                    options={options}
                    />
                    <img src="../../static/icons/mile.svg" style={styles.selectIcon} alt=""/>
                    <span style={styles.selectLabel}>
                      Distance
                    </span>
                </Grid.Column>
                <Grid.Column  style={styles.RangeCol}>
                    <DatePicker
                      className="date--picker has-width-95"
                      showTime
                      placeholder="When do you want this?"
                      // suffixIcon={<Image src="../../static/images/calender.png" />}
                    />
                    <span style={styles.dateLabel}>
                      When do you want this?
                    </span>
                </Grid.Column>
                <Grid.Column style={styles.RangeCol}>
                  <div style={styles.RangeCol_}>
                    <span style={styles.RangeLabel}>Price range</span>
                    <span style={styles.RangeValues}>£{this.state.value.min} - £{this.state.value.max}</span>
                  <InputRange
                    style={styles.Range}
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