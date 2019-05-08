import React from 'react'
import { Grid, Input } from 'semantic-ui-react';
import './less/personalDetails.less'
export default function PersonalDetails() {
  return (
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
                    value="Mary Jane"
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
                    value="Mary Jane"
                  />
                  <Input 
                    placeholder="Mobile number"
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
                  <Input 
                    placeholder="Old password"
                  />
                  <Input 
                    placeholder="New password"
                  />
              </Grid.Column>
          </Grid.Row>
      </Grid>
    </div>
  )
}
