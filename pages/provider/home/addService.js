import React, { useState, useEffect } from 'react'
import { Grid, Input, TextArea, Select, Button } from 'semantic-ui-react';
// import ImageUploader from 'react-images-upload';
import './less/addService.less'
import CustomImageUploader from '../../../components/shared/CustomImageUploader';
import {addServices, getProviderServices} from '../../../services/providerServices.ts'
import * as actions from '../../../store/actions';
import { connect } from 'react-redux';

const AddService = (props) => {
    
  const durations = [
    { key: '< 30 mins', text: '< 30 mins', value: '< 30 mins' },
    { key: '30 mins - 1hr', text: '30 mins - 1hr', value: '30 mins - 1hr' },
    { key: '1 - 3 hrs', text: '1 - 3 hrs', value: '1 - 3 hrs' },
    { key: '> 3 hrs', text: '> 3 hrs', value: '> 3 hrs' },
  ]

  useEffect(() => {
    console.log(props)
  }, [])
  
  const [imgPlaceholder, updatePlaceholder] = useState(true)
  const [imageSrc, updateImageSrc] = useState({image: ''})
  const [serviceName, updateServiceName] = useState('')
  const [description, updateDesc] = useState('')
  const [amount, updateAmount] = useState('')
  const [duration, updateDuration] = useState('')
  const [pictureUrl, updatePic] = useState('https://res.cloudinary.com/esectra-com/image/upload/v1559812943/glow.png')

 const switchPlaceholder = () => {
    if (imgPlaceholder) {
        return <div>
                    <img src="/static/icons/image.svg" alt=""/>
                    <p>Click to upload images for this service or drag in from computer</p>
                </div>
    } else {
        return <div></div>
    }
 }

 const getImageString_ = (imageString) => {
  updateImageSrc({image: imageString});
  updatePlaceholder(false)
 }
 
 const getImageFile = () => {

 }

 const submit = () => {
   let data = {
    serviceName,
    description,
    amount,
    duration,
    pictureUrl
   }
   console.log(data)
   addServices(data)
   .then(res => {
     let token = window.sessionStorage.getItem('glamourToken')
      getProviderServices(token)
      .then(res => {
        console.log(res)
        let services = res.data.data.services
        props.saveProviderServices(services)
      })
      .catch(err => {
        console.log({...err})
      })
   })
   .catch(err => {
     console.log(err)
   })
 }

 const styles = {
    Upload: {
        backgroundImage: `url(${imageSrc.image})`,
        backgroundSize: 'cover'
    }
 }
 

  return (
    <div>
      <Grid centered className="addService">
        <p className="heading">
            Add service
        </p>
          <Grid.Row>
              <Grid.Column width={14}>
                <Input value={serviceName} onChange={(e) => updateServiceName(e.target.value)} placeholder="Name of service (e.g. hair curling and washing)"/>
              </Grid.Column>
              <Grid.Column width={14}>
                <TextArea value={description} onChange={(e) => updateDesc(e.target.value)} className="textArea" placeholder="Brief description of service" rows="5"/>
              </Grid.Column>
              <Grid.Column width={14}>
                <Select value={duration} onChange={(e, data) => updateDuration(data.value)} className="select" options={durations} placeholder="Time estimate" />
              </Grid.Column>
              <Grid.Column width={14}>
                <Input value={amount} onChange={(e) => updateAmount(e.target.value)} placeholder="Amount"/>
              </Grid.Column>
              <Grid.Column width={14}>
                <CustomImageUploader getImageString={getImageString_} getImageFile={getImageFile}>
                  <div className="upload" style={styles.Upload}>
                    {
                      switchPlaceholder()
                    }
                  </div>
                </CustomImageUploader>
              </Grid.Column>
              <Grid.Column width={14} textAlign="center" className="myButtons">
                <Button size="huge"  className="mainBtn" secondary>Save as draft</Button>
                <Button size="huge" onClick={() => submit()} className="mainBtn secondaryBtn"> 
                    Add service
                </Button>
                <p className="delete">Delete service</p>
              </Grid.Column>
          </Grid.Row>
      </Grid>
    </div>
  )
}

export default connect(null, actions)(AddService)
