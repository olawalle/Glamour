import React from 'react'
import { Grid, Input, Select, Checkbox, TextArea, Button } from 'semantic-ui-react';
import './less/businessDetails.less'
import Timing from '../../components/shared/Timing';
import SelectServices from '../../components/shared/SelectServices';
export default function BusinessDetails() {
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
                                className="stepOne-form--select signup-form--input" />
                            </Grid.Column>
                            <Grid.Column width={15} className="leftCols">
                                <Select 
                                    className="stepOne-form--select signup-form--input"
                                />
                            </Grid.Column>
                            <Grid.Column width={15} className="leftCols">
                                <div className="is-flex mt-10">
                                    <Checkbox
                                        className="stepOne-form--checkbox"
                                        onChange={(e, data) => handleChange(e, 'accept', data)}
                                    />
                                    <span className="caveat">
                                        <b>Use my location.</b> This enables us to match you effectively to nearby clients
                                    </span>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={15} className="leftCols">
                                <p className="sectTitle lowerSectTitle">
                                Select the services you offer
                                </p>
                                <Grid columns>
                                    <SelectServices />
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
                        <Timing />
                    </Grid.Column>
                    <Grid.Column width={15} className="rightCols textareaWrap">
                        <p className="sectTitle lowerSectTitle">
                            Add a brief description of your business
                        </p>
                        <TextArea rows="5" className="textArea" />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16} textAlign="center">
                <Button size="huge"  className="mainBtn" secondary>Send Message</Button>
            </Grid.Column>
          </Grid.Row>
      </Grid>
    </>
  )
}
