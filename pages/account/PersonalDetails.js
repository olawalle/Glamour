import React from 'react'
import { Grid, Input, TextArea } from 'semantic-ui-react';
import './less/personalDetails.less'
import * as actions from '../../store/actions'
import { connect } from 'react-redux';
import Password from '../../components/shared/Password';
import Display from '../../components/shared/Display';



const PersonalDetails = (props) => {
  return (
    <>
      <Display if={props.user.role === 'client'}>
        <div className="personalDetails">
          <Grid stackable>
              <Grid.Row>
                  <Grid.Column width={7}>
                      <p className="topText">
                        Name, Bio and Location
                      </p>
                      <p className="lowerText">
                      Update your name, location and add a brief bio
                      </p>
                  </Grid.Column>
                  <Grid.Column width={9}>
                      <Input 
                        value={props.user.fullname}
                      />
                      <TextArea 
                        rows="5"
                        value="Hey, you know how I'm, like, always trying to save the planet? Here's my chance. Life finds a way. "
                      />
                      <Input 
                        value="South London"
                      />
                  </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                  <Grid.Column width={7}>
                      <p className="topText">
                        Email address and phone number
                      </p>
                      <p className="lowerText">
                          Change your email address and/or phone number
                      </p>
                  </Grid.Column>
                  <Grid.Column width={9}>
                      <Input 
                        value={props.user.email}
                      />
                      <Input 
                        value={props.user.phone}
                      />
                  </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                  <Grid.Column width={7}>
                      <p className="topText">
                      Password
                      </p>
                      <p className="lowerText">
                      Update the password for your account
                      </p>
                  </Grid.Column>
                  <Grid.Column width={9}>
                    <Password
                      size="huge"
                      placeholder='Old Password'
                      className="stepOne-form--input"
                      fluid
                    />
                    <Password
                      size="huge"
                      placeholder='New Password'
                      className="stepOne-form--input"
                      fluid
                    />
                  </Grid.Column>
              </Grid.Row>
          </Grid>
        </div>
      </Display>
      
      <Display if={props.user.role === 'provider'}>
        <div className="personalDetails">
          <Grid stackable>
              <Grid.Row>
                  <Grid.Column width={7}>
                      <p className="topText">
                        Name
                      </p>
                      <p className="lowerText">
                        Update your account name
                      </p>
                  </Grid.Column>
                  <Grid.Column width={9}>
                      <Input 
                        value={props.user.fullname}
                      />
                  </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                  <Grid.Column width={7}>
                      <p className="topText">
                        Email address and phone number
                      </p>
                      <p className="lowerText">
                          Change your email address and/or phone number
                      </p>
                  </Grid.Column>
                  <Grid.Column width={9}>
                      <Input 
                        value={props.user.email}
                      />
                      <Input 
                        placeholder={props.user.phone}
                      />
                  </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                  <Grid.Column width={7}>
                      <p className="topText">
                      Password
                      </p>
                      <p className="lowerText">
                      Update the password for your account
                      </p>
                  </Grid.Column>
                  <Grid.Column width={9}>
                    <Password
                      size="huge"
                      placeholder='Old Password'
                      className="stepOne-form--input"
                      fluid
                    />
                    <Password
                      size="huge"
                      placeholder='New Password'
                      className="stepOne-form--input"
                      fluid
                    />
                  </Grid.Column>
              </Grid.Row>
          </Grid>
        </div>
      </Display>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default  connect(mapStateToProps, actions)(PersonalDetails)
