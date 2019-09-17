import React, { useEffect, useState } from 'react'
import {Grid, Header, Select, Input, Checkbox, Button, TextArea, Loader} from 'semantic-ui-react'
import './less/stepOne.less'
import SelectedServices from '../../../components/shared/SelectServices';
import Display from '../../../components/shared/Display';


export default function StepThree(props) {

  
  const [ services, setServices ] = useState([])

  const [desc, updateDesc] = useState('')
    
  useEffect(() => {
    // console.log(props)
    let store = null
    // if (store = JSON.parse(localStorage.getItem('store'))) {
    //   if (store.auth) {
    //     setServices(store.auth.providerSignup.service)
    //     setServices(store.auth.providerSignup.description)
    //   }
    // }
  }, [])

  const jump = () => {
    // console.log({
    //   services: services,
    //   desc: desc
    // })

    props.jump({
      service: services,
      description: desc
    }, 3)
  }

  const pickedServices = (e) => {
    // console.log(e.toString())
    setServices(e.toString())
  }

  return (
    <div id="stepOne" className="stepOne stepThree">
      <Header textAlign="center" className="header" as='h1'>
        Complete profile
      </Header>
        <Grid centered>
        <p className="sectHeading">
        Select the services you offer
        </p>
          <SelectedServices pickedServices={pickedServices} />
          <div className="txt-wrap">
            <p className="sectHeading">
            Add a brief description of your business
            </p>
            <TextArea rows="10" 
              value={desc}
              onChange={(e) => updateDesc(e.target.value)}
              className="textArea" />
            
              <Button
              className="mt-30 nxt-btn"
              size="large"
              onClick={() => jump()}
              secondary>
                  <Display if={props.signingUp}>
                      <Loader active inline='centered' />
                  </Display>
                  <Display if={!props.signingUp}>
                      Submit
                  </Display>
              </Button>
          </div>
        </Grid>
    </div>
  )
}
