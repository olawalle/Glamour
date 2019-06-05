import React, { useEffect, useState } from 'react'
import {Grid, Header, Select, Input, Checkbox, Button, TextArea} from 'semantic-ui-react'
import './less/stepOne.less'
import SelectedServices from '../../../components/shared/SelectServices';


export default function StepThree(props) {

  
  const [ services, setServices ] = useState([])

  const [desc, updateDesc] = useState('')
    
  const jump = () => {
    console.log({
      services: services,
      desc: desc
    })

    props.jump({
      services: services,
      desc: desc
    }, 3)
  }

  const pickedServices = (e) => {
    console.log(e)
    setServices(e)
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
              Submit
            </Button>
          </div>
        </Grid>
    </div>
  )
}
