import React, { useState, useEffect } from 'react'
import {Grid} from 'semantic-ui-react'
import './less/SelectedServices.less'

export default function SelectedServices(props) {    
  
  const renderServices = () => {
    return services.map((service, i) => {
        if (service.selected) {              
            return <Grid.Column width={8} key={'box'+(Math.random() * 10) + (Math.random() * 10)}>
                <div className="box selectedBox" onClick={() => selectService(i)}>{service.title}</div>
            </Grid.Column>
        } else {       
            return <Grid.Column width={8} key={'box'+(Math.random() * 10) + (Math.random() * 10)}>
                <div className="box" onClick={() => selectService(i)}>{service.title}</div>
            </Grid.Column>
        }
    })
  }

  const [services, updateServices] = useState([
    {title: 'Massage', selected: false},
    {title: 'Face', selected: false},
    {title: 'Hair', selected: false},
    {title: 'Body', selected: false},
    {title: 'Nails', selected: false},
    {title: 'Make up', selected: false}
  ])
  
  const selectService = (n) => {
    let newServicesArray = services.map((service, i) => {
        if (i === n && service.selected) {
            return {...service, selected: false}
        } else if (i === n && !service.selected) {
            return {...service, selected: true}
        } else {
            return service
        }
    })
    updateServices(newServicesArray)

    props.pickedServices(
        newServicesArray.filter(service => service.selected === true)
        .map(ser => ser.title)
    )
  }
  
  useEffect(() => {
    if (props.userServices) {
      let preSelectedservices = props.userServices.split(",")
      let services_ = [...services]
      let newArr = services_.map(serv => {
        let isThere = preSelectedservices.find(pre => pre === serv.title)
        return isThere ? {...serv, selected: true} : {...serv, selected: false}
      })
      updateServices(newArr)
    }
  }, [])

  return (
    <>
      <Grid.Row className="selectedServices">
        {renderServices()}
      </Grid.Row>
    </>
  )
}
