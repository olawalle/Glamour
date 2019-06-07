import React, { Component } from 'react'
import withMasterLayout from '../../pages/layouts/withMasterLayout';
import './less/providerSignup.less'
import {Container, Grid, Button} from 'semantic-ui-react'
import StepOne from './providerSignupComponents/stepOne';
import Auth from '../../components/shared/Auth';
import StepTwo from './providerSignupComponents/stepTwo';
import StepThree from './providerSignupComponents/stepThree';
import { providerRegister } from '../../services/signup.ts'

class ProviderSignup extends Component {
  state= {
    step: 0,
    steps: [
        {text: 'Enter Details', no: 1, active: 'activeStep'},
        {text: 'Set Availability', no: 2, active: 'inactiveStep'},
        {text: 'Complete Profile', no: 3, active: 'inactiveStep'}
    ],
    stepOne: {},
    stepTwo: {},
    stepThree: {}
  };

//   componentDidMount() {
//     this.jump({}, this.state.step)
//   }

  jump = (data, n) => {
    if (n === 1) {
        this.setState({
            stepOne: data
        })
    } else if (n === 2) {
        this.setState({
            stepTwo: data
        })
    } else {
        this.setState({
            stepThree: data
        }, () => {
            let data = {
                ...this.state.stepOne,
                ...this.state.stepTwo,
                ...this.state.stepThree,
                meta: 'nothing here'
            }
            console.log(data)
            providerRegister(data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        })
    }

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
        return <StepOne jump={this.jump} />
    } else if (this.state.step === 1) {
        return <StepTwo jump={this.jump} />
    } else {
        return <StepThree jump={this.jump} />
    }
  }

  render() {
    return (
        <Auth>
            <Grid id="signup" className="providerSignup" columns={2} centered>
                <Grid.Row>
                    <Grid.Column mobile={14} tablet={11} computer={10} largeScreen={8} widescreen={7}>
                        {/* <Grid Column> */}
                            {/* <Grid.Row> */}
                                <div className="indicatorsWrap_"  mobile={16} tablet={11}>
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
                                </div>
                                <div className="indicatorsWrap">
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
                                </div>
                                <div className="formWrap">
                                    {
                                        this.whatStep()
                                    }
                                </div>
                            {/* </Grid.Row> */}
                        {/* </Grid> */}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Auth>
    )
  }
}

export default withMasterLayout(ProviderSignup)
