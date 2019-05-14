import React, { useState } from 'react'
import { Grid, Input, TextArea, Select, Button } from 'semantic-ui-react';
// import ImageUploader from 'react-images-upload';
import './less/addService.less'
import CustomImageUploader from '../../../components/shared/CustomImageUploader';

export default function AddService() {
  
  const [imgPlaceholder, updatePlaceholder] = useState(true)
  const [imageSrc, updateImageSrc] = useState({image: ''})

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
                <Input placeholder="Name of service (e.g. hair curling and washing)"/>
              </Grid.Column>
              <Grid.Column width={14}>
                <TextArea className="textArea" placeholder="Brief description of service" rows="5"/>
              </Grid.Column>
              <Grid.Column width={14}>
                <Select className="select" placeholder="Time estimate" />
              </Grid.Column>
              <Grid.Column width={14}>
                <Input placeholder="Amount"/>
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
                <Button size="huge" className="mainBtn secondaryBtn"> 
                    Add service
                </Button>
                <p className="delete">Delete service</p>
              </Grid.Column>
          </Grid.Row>
      </Grid>
    </div>
  )
}
