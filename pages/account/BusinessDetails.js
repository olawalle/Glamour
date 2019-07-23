import React, { useState, useEffect } from 'react'
import { Grid, Input, Select, Loader, TextArea, Button } from 'semantic-ui-react';
import './less/businessDetails.less'
import Timing from '../../components/shared/Timing';
import SelectServices from '../../components/shared/SelectServices';
import { connect } from 'react-redux';
import * as actions from '../../store/actions'
import { updateProvider, getCurrentUser } from '../../services/auth.ts'
import Display from '../../components/shared/Display';



const BusinessDetails = (props) => {

  useEffect(() => {
    updateUserData(props.user)
  }, [])
  
  const options = [
    { key: 'less than 1 mile', text: 'less than 1 mile', value: 'less than 1 mile' },
    { key: '1 - 5 miles', text: '1 - 5 miles', value: '1 - 5 miles' },
    { key: '6 - 10 miles', text: '6 - 10 miles', value: '6 - 10 miles' },
    { key: 'Over 10 miles', text: 'Over 10 miles', value: 'Over 10 miles' }
  ]
  const [timing, setTiming] = useState([])
  const [ services, setServices ] = useState([])

  const [userData, updateUserData] = useState({
    service: [],
    postcode: "",
    mileRadius: "",
    description: "",
    schedules: [],
  })
  
  const [ formErrors, setFormErrors ] = useState({})
  const [updating, setupdating] = useState(false)

  const getTiming_ = (e) => {
    setTiming(e)
    updateUserData({
      ...userData, schedules: e
    })
  }
  
  const pickedServices = (e) => {
    setServices(e)
    updateUserData({
      ...userData, service: e.toString()
    })
  }

  
  const handleChange = (e, key, {value = null, checked = null } = {}) => {
    let newState = {
      ...userData,
      [key]: e.target.value || value || checked || ''
    }
    updateUserData({...newState})

    //delete error entry
    if (formErrors[key]) delete formErrors[key]
  }

  
  const submit = (e) => {
    delete  userData.subscriptionEnd
    delete  userData.subscriptionId
    e.preventDefault();
    
    let  _formErrors = {};
    Object.keys(userData).forEach((item) => {
      if (!userData[item]) {
        _formErrors[item] = true
      }
    })
    setFormErrors(_formErrors)
    console.log(_formErrors)

    if (Object.keys(_formErrors).length === 0) {
      let data = {id: props.user.id, ...userData}
      setupdating(true)
      updateProvider(data)
      .then(res => {
        setupdating(false)
        getCurrentUser()
        .then(resp => {
          props.saveUserData({
            ...resp.data.me,
            isLoggedIn: true
          })
        })
      })
      .catch(err => {
        console.log(err)
        setupdating(false)
      })
    }
  }

  return (
    <>
      <Grid stackable className="businessDetails">
          <Grid.Row>
              <Grid.Column width={8}>
                <Grid centered>
                    <Grid.Row>
                        <Grid.Column width={15} className="leftCols">
                            <p className="sectTitle">
                                Coverage area
                            </p>
                            <Input 
                                placeholder="Postcode"
                                type="text"
                                value={userData.postcode}
                                error={formErrors['postcode']}
                                onChange={(e) => handleChange(e, 'postcode')}
                                className="stepOne-form--select signup-form--input" />
                            </Grid.Column>
                            <Grid.Column width={15} className="leftCols">
                                <Select 
                                    options={options}
                                    value={userData.mileRadius}
                                    error={formErrors['mileRadius']}
                                    onChange={(e, data) => handleChange(e, 'mileRadius', data)}
                                    className="stepOne-form--select signup-form--input"
                                />
                            </Grid.Column>
                            {/* <Grid.Column width={15} className="leftCols">
                                <div className="is-flex mt-10">
                                    <Checkbox
                                        className="stepOne-form--checkbox"
                                        onChange={(e, data) => handleChange(e, 'accept', data)}
                                    />
                                    <span className="caveat">
                                        <b>Use my location.</b> This enables us to match you effectively to nearby clients
                                    </span>
                                </div>
                            </Grid.Column> */}
                            <Grid.Column width={15} className="leftCols">
                                <p className="sectTitle lowerSectTitle">
                                    Select the services you offer
                                </p>
                                <Grid columns>
                                    <SelectServices userServices={props.user.service} pickedServices={pickedServices} />
                                </Grid>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
              </Grid.Column>
              <Grid.Column width={8}>
                <Grid centered>
                    <Grid.Row>
                      <Grid.Column width={15} className="rightCols">
                        <p className="sectTitle">
                            Availability
                        </p>
                        <Timing getTiming={getTiming_} userSchedule={props.user.schedules} />
                    </Grid.Column>
                    <Grid.Column width={15} className="rightCols textareaWrap">
                        <p className="sectTitle lowerSectTitle">
                            Add a brief description of your business
                        </p>
                        <TextArea 
                                value={userData.description}
                                error={formErrors['description']}
                                onChange={(e) => handleChange(e, 'description')} rows="5" className="textArea" />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16} textAlign="center" style={{marginTop: '-44px'}}>
                <Button size="huge"  className="mainBtn" secondary onClick={submit}>
                  <Display if={!updating}>
                    Update Details
                  </Display>
                  <Display if={updating}>
                    <Loader active inline='centered' />
                  </Display>
                </Button>
            </Grid.Column>
          </Grid.Row>
      </Grid>
    </>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})
export default connect(mapStateToProps, actions)(BusinessDetails)
