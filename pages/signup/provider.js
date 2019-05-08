import React, { Component } from 'react'
import withMasterLayout from '../../pages/layouts/withMasterLayout';
import './less/providerSignup.less'
import {Container, Grid, Button} from 'semantic-ui-react'
import StepOne from './providerSignupComponents/stepOne';
import Auth from '../../components/shared/Auth';
import StepTwo from './providerSignupComponents/stepTwo';
import StepThree from './providerSignupComponents/stepThree';

class ProviderSignup extends Component {
  state= {
    step: 0,
    steps: [
        {text: 'Enter Details', no: 1, active: 'activeStep'},
        {text: 'Set Availability', no: 2, active: 'inactiveStep'},
        {text: 'Complete Profile', no: 3, active: 'inactiveStep'}
    ]
  };
  

  jump = () => {
    console.log(this.state)
    if (this.state.step + 1 < this.state.steps.length) {
        let newState = this.state.steps.map((step, i) => {
            if (i <= this.state.step + 1) {
                return {...step, active: 'activeStep'}
            } else {
                return {...step, active: 'inactiveStep'}
            }
        })
        this.setState({step: this.state.step + 1, steps: newState})
    }
  }

  whatStep = () => {
    if (this.state.step === 0) {
        return <StepOne />
    } else if (this.state.step === 1) {
        return <StepTwo />
    } else {
        return <StepThree />
    }
  }

  render() {
    return (
        <Auth>
            <Grid id="signup" className="providerSignup" columns={2} centered>
                <Grid.Row>
                    <Grid.Column mobile={14} tablet={11} largeScreen={8} widescreen={7}>
                        <Grid Column>
                            <Grid.Row>
                                <Grid.Column className="indicatorsWrap" width={5}>
                                    <div className="indicatorsWrapInner">
                                        <ul className="indicators">
                                            {
                                                this.state.steps.map((step, i) => {
                                                    if (i <= this.state.step) return <li onClick={() => this.setState({...this.state, step: i})} className={step.active}><div className="listContent"><p>{step.text}</p></div></li>
                                                    if (i > this.state.step) return <li className={step.active}><div className="listContent"><p>{step.text}</p></div></li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                </Grid.Column>
                                <Grid.Column className="formWrap" textAlign="center" width={11}>
                                    {
                                        this.whatStep()
                                    }
                                    <Button
                                        className="mt-30"
                                        size="large"
                                        onClick={() => this.jump()}
                                        secondary>
                                        Next
                                    </Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Auth>
    )
  }
}

export default withMasterLayout(ProviderSignup)
