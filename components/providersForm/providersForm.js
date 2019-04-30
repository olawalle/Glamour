import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Grid, Header, Select, Input, Checkbox, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import Password from '../../components/shared/Password'
import InputRange from 'react-input-range';

const styles = {
  pageWrap: {
    border: '1px solid #eee',
    margin: '20px 0',
    padding: '20px'
  },
  inputIcon: {
    top: '-68px',
    position: 'relative',
    left: '12px',
    zIndex: '100',
    width: '20px'
  },  
  selectIcon: {
    top: '-50px',
    position: 'relative',
    left: '12px',
    zIndex: '100',
    width: '20px'
  },
  myLabel: {
    position: 'relative',
    top: '-92px',
    left: '17px',
    fontSize: '11px',
    color: '#637381'
  },
  selectLabel: {
    position: 'relative',
    top: '-74px',
    left: '21px',
    fontSize: '11px',
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
    height: '62px',
    borderRadius: '0px',
    borderColor: '#C4CDD5',
    paddingTop: '20px',
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
  }
}

const options = [
  { key: '', text: 'Not Applicable', value: '' },
  { key: 'onilne', text: 'Online', value: 'Online' },
  { key: 'offline', text: 'Offline', value: 'offline' },
]


const recalibrate = () => {
  console.log('ycuyc')
}

let value = {min: 2, max: 12}

const ProviderForm = (props) => {

  return (
      <div style={styles.pageWrap} className="providerForm">
        <Grid columns={3}>
            <Grid.Row>
                <Grid.Column>
                    <Select
                    style={styles.Select}
                    fluid
                    options={options}
                    placeholder='How did you hear about Glamour on Demand?'
                    />
                    <img src="../../static/icons/sort.svg" style={styles.selectIcon} alt=""/>
                    <span style={styles.selectLabel}>
                        Sort by
                    </span>
                </Grid.Column>
                <Grid.Column>
                    <Input
                    type="text"
                    style={styles.FormInput}
                    size="huge"
                    placeholder='Searcg term goes here'
                    fluid
                    />
                    <img src="../../static/icons/search.svg" style={styles.inputIcon} alt=""/>
                    <span style={styles.myLabel}>
                        Search for
                    </span>
                </Grid.Column>
                <Grid.Column>
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
                <Grid.Column>
                    <Select
                    style={styles.Select}
                    fluid
                    options={options}
                    placeholder='How did you hear about Glamour on Demand?'
                    />
                    <img src="../../static/icons/mile.svg" style={styles.selectIcon} alt=""/>
                    <span style={styles.selectLabel}>
                      Distance
                    </span>
                </Grid.Column>
                <Grid.Column>
                    <Select
                    style={styles.Select}
                    fluid
                    options={options}
                    placeholder='Select date and time'
                    />
                    <img src="../../static/icons/sort.svg" style={styles.selectIcon} alt=""/>
                    <span style={styles.selectLabel}>
                      When do you want this?
                    </span>
                </Grid.Column>
                <Grid.Column>
                <InputRange
                  style={styles.Range}
                  maxValue={20}
                  minValue={0}
                  value={value}
                  onChange={recalibrate()} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
      </div>
  );
}


export default ProviderForm