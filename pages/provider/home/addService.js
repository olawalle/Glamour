import React, { useState, useEffect } from 'react'
import { Grid, Input, TextArea, Select, Button, Loader, Checkbox, Message } from 'semantic-ui-react';
// import ImageUploader from 'react-images-upload';
import './less/addService.less'
import CustomImageUploader from '../../../components/shared/CustomImageUploader';
import {addServices, getProviderServices, editService, deleteProviderServices} from '../../../services/providerServices.ts'
import { generalUploadImage } from '../../../services/generatData.ts'
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
    if (props.selectedService) {
      updateAmount(props.selectedService.amount)
      updateDesc(props.selectedService.description)
      updateDuration(props.selectedService.duration)
      updateImageSrc({image: props.selectedService.pictureUrl})
      updatePic(props.selectedService.pictureUrl)
      updatePlaceholder(false)
      updateServiceName(props.selectedService.serviceName)
      props.selectedService.status === "active" ? setstatus({text: 'active', value: true}) : setstatus({text: 'inactive', value: false})
    }
  }, [])
  
  const [imgPlaceholder, updatePlaceholder] = useState(true)
  const [imageSrc, updateImageSrc] = useState({image: ''})
  const [serviceName, updateServiceName] = useState('')
  const [description, updateDesc] = useState('')
  const [amount, updateAmount] = useState('')
  const [duration, updateDuration] = useState('')
  const [pictureUrl, updatePic] = useState(null)
  const [deleting, setdeleting] = useState(false)
  const [error, updateError] = useState({
    show: false,
    text: ''
  })
  const [status, setstatus] = useState({
    text: 'active',
    value: true
  })
  const [disableAdd, setdisableAdd] = useState(false)

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
 
 const getImageFile = (file) => {
  if (props.selectedService) {
    let data = new FormData()
    data.append('pictureUrl', file)
    generalUploadImage(data)
    .then(res => {
      console.log(res)
      updatePic(res.data.data)
    })
    .catch(err => {
      console.log({...err})
      updateError({
        show: true,
        text: err.response.data.message
      })
    })
  } else {
    updatePic(file)
  }
 }

 const submit = () => {
   let formData = new FormData()
   let data = {
    serviceName,
    description,
    amount,
    duration,
    pictureUrl,
    status: status.text
   }

   
   if (props.selectedService) {
    // Object.keys(data).forEach(obj => {
    //   if (data[obj] !== props.selectedService[obj]) {
    //     formData.append(obj, data[obj])
    //   }
    // })
    editService(data, props.selectedService._id)
    .then(res => {
      getProviderServices(props.user.id)
      .then(res => {
        let services = res.data.data.services
        props.saveProviderServices(services)
      })
      .catch(err => {
        console.log({...err})
      })
    })
    .catch(err => {
      updateError({
        show: true,
        text: err.response.data.message
      })
    })
  } else {
    setdisableAdd(true)
    Object.keys(data).forEach(obj => formData.append(obj, data[obj]))
    addServices(formData)
    .then(res => {
      getProviderServices(props.user.id)
      .then(res => {
        setdisableAdd(false)
        let services = res.data.data.services
        props.saveProviderServices(services)
        closee()
      })
      .catch(err => {
        setdisableAdd(false)
        console.log({...err})
      })
    })
    .catch(err => {
      updateError({
        show: true,
        text: err.response.data.message
      })
    })
  }
 }

 const switchStatus = (e, f) => {
  f.checked ? setstatus({text: 'active', value: f.checked}) : setstatus({text: 'inactive', value: f.checked})
 }

 const deleteService = () => {
  setdeleting(true)
  deleteProviderServices(props.selectedService._id)
  .then(res => {
    console.log(res)
    getProviderServices(props.user.id)
    .then(res => {
      setdeleting(false)
      let services = res.data.data.services
      props.saveProviderServices(services)
      closee()
    })
    .catch(err => {
      setdeleting(false)
      console.log({...err})
      closee()
    })
  })
  .catch(err => {
    console.log(err)
  })
 }

 const closee = () => {
    props.onClose()
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
        <p className="heading" onClick={() => closee()}>
          { props.selectedService ? <>Edit service</> :  <>Add service</> }
        </p>
          <Grid.Row>
              <Grid.Column width={14}>
                { props.selectedService && <span className="labell">Service Name</span> }
                <Input value={serviceName} onChange={(e) => updateServiceName(e.target.value)} placeholder="Name of service (e.g. hair curling and washing)"/>
              </Grid.Column>
              <Grid.Column width={14}>
                { props.selectedService && <span className="labell">Service description</span> }
                <TextArea value={description} onChange={(e) => updateDesc(e.target.value)} className="textArea" placeholder="Brief description of service" rows="5"/>
              </Grid.Column>
              <Grid.Column width={14}>
                { props.selectedService && <span className="labell">Duration</span> }
                <Select value={duration} onChange={(e, data) => updateDuration(data.value)} className="select" options={durations} placeholder="Time estimate" />
              </Grid.Column>
              <Grid.Column width={14}>
                { props.selectedService && <span className="labell">Amount</span> }
                <Input value={amount} onChange={(e) => updateAmount(e.target.value)} placeholder="Amount"/>
              </Grid.Column>
              <Grid.Column width={14}>
                { props.selectedService && <span className="labell">Banner</span> }
                <CustomImageUploader getImageString={getImageString_} getImageFile={getImageFile}>
                  <div className="upload" style={styles.Upload}>
                    {
                      switchPlaceholder()
                    }
                  </div>
                </CustomImageUploader>
              </Grid.Column>
              <Grid.Column width={14}>
              { props.selectedService  && <><Checkbox checked={status.value} onClick={(e, f) => switchStatus(e, f)} /> <span>Make Service Active?</span></> }
              </Grid.Column>
              {
                error.show ? <Message negative>
                  <p>
                    {error.text}
                  </p>
                </Message> : null
              }
              <Grid.Column width={14} textAlign="center" className="myButtons">
                { !props.selectedService && <>
                  {/* <Button size="huge"  className="mainBtn" secondary>Save as draft</Button> */}
                  <Button size="huge" disabled={disableAdd} onClick={() => submit()} className="mainBtn secondaryBtn"> 
                      Add service
                  </Button>
                  {/* <p className="delete" onClick={deleteService}>Delete service</p> */}
                  </>
                }
                { props.selectedService && <><Button size="huge" onClick={() => submit()} className="mainBtn secondaryBtn"> 
                      Update service
                  </Button>
                  <span className="delete" onClick={deleteService}>
                    { !deleting ? <>Delete service</> : <>Deleting</> }
                  </span></>
                }
              </Grid.Column>
          </Grid.Row>
      </Grid>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, actions)(AddService)
