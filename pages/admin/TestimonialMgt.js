import React, { useEffect, useState } from 'react'
import { Table, Button, Grid, Input, TextArea, Message, Loader , Modal} from 'semantic-ui-react'
import dayjs from 'dayjs'
import { 
    getAllTestimonials, 
    addTestimonial, 
    editTestimonial,
    deleteTestimonial
} from '../../services/generatData.ts'
import CustomImageUploader from '../../components/shared/CustomImageUploader';
import Display from '../../components/shared/Display';

export default function TestimonialMgt(props) {

    useEffect(() => {
        getAll()
    }, []);

    const [image, updateImage] = useState('')
    const [newService, updateNewService] = useState(true)
    const [picture, updatePicture] = useState(null)
    const [fullname, updateName]= useState('')
    const [body, updateDesc]= useState('') 
    const [userLocation, updateLocation]= useState('') 
    const [testimonials, updateTestimonials] = useState([])
    const [error, updateError] = useState(false)
    const [toCloud, uploadToCloud] = useState(false)
    const [selectedTestimonial, updateSelectedTestimonial] = useState({})
    const [disable, updateDisable] = useState(false)
    const [open, setOpen] = useState(false)

    const getAll = () => {
        updateLoading2(true)
        getAllTestimonials() 
        .then(res => {
            updateTestimonials(res.data.data)
            updateLoading2(false)
        })
        .catch(err => {
            console.log(err)
            updateLoading2(false)
        })
    }

    const getImage = (e) => {
        updatePicture(e)
    }

    const getImageString = (e) => {
        updateImage(e)
    }

    const getUrl = (pictureUrl) => {
        updateDisable(false)
        updateSelectedTestimonial({
            ...selectedTestimonial,
            pictureUrl
        })
    }

    const check = () => {
        if (selectedTestimonial.pictureUrl) {
            uploadToCloud(true)
            updateDisable(true)
        } else {
            updateDisable(false)
        }
    } 

    const addNew = () => {
        let form = new FormData()
        form.append('picture', picture)
        form.append('fullname', fullname)
        form.append('body', body)
        form.append('location', userLocation)
        updateLoading(true)
        addTestimonial(form)
        .then(res => {
            getAll()
            updateIsEditting(false)
            updateLoading(false)
        })
        .catch(err => {
            updateError(true)
            updateLoading(false)
            setTimeout(() => {
                updateError(true)
            }, 5000);
            console.log({...err})
        })
    }

    const postEdit = () => {
        let data = {
            ...selectedTestimonial,
            body: body,
            fullname: fullname
        }
        editTestimonial(data)
        .then(res => {
            getAll()
            updateIsEditting(false)
        })
        .catch(err => {
            console.log({...err})
        })
    }

    const removeCategory = () => {
        deleteTestimonial(selectedTestimonial._id)
        .then(res => {
            getAll()
            setOpen(false)
            updateIsEditting(false)
        })
        .catch(err => {
            console.log({...err})
            setOpen(false)
        })
    }

    const openEdit = (id) => {
        let selectedTestimonial = testimonials.find(cat => cat._id === id)
        updateSelectedTestimonial(selectedTestimonial)
        updateImage(selectedTestimonial.pictureUrl)
        updateName(selectedTestimonial.fullname)
        updateDesc(selectedTestimonial.body)
        updateIsEditting(true)
        updateNewService(false)
    }

    
    const [isEditting, updateIsEditting] = useState(false)

    const [loading, updateLoading] = useState(false)
    const [loading2, updateLoading2] = useState(false)
    
    return (
        <>
        { !loading2 ? <>
        {
            !isEditting ? 
                <>
                    <p className="heading">
                        Testimonial management
                    </p>
                    <Table basic='very'>
                        <Table.Header>
                        <Table.Row>
                            {/* <Table.HeaderCell>ID</Table.HeaderCell> */}
                            <Table.HeaderCell>Full name</Table.HeaderCell>
                            <Table.HeaderCell>Location</Table.HeaderCell>
                            <Table.HeaderCell>Photo</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Created on</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                        {
                            testimonials ? testimonials.map((testimonial, i) => {
                                return <Table.Row key={i}>
                                        {/* <Table.Cell>{testimonial._id}</Table.Cell> */}
                                        <Table.Cell>{testimonial.fullname}</Table.Cell>
                                        <Table.Cell>{testimonial.location}</Table.Cell>
                                        <Table.Cell>
                                            <img src={testimonial.pictureUrl} width="80" alt=""/>
                                        </Table.Cell>
                                        <Table.Cell>{testimonial.body}</Table.Cell>
                                        <Table.Cell>{dayjs(testimonial.createdAt).format('DD MMM YYYY')}</Table.Cell>
                                        <Table.Cell>
                                            <span onClick={() => openEdit(testimonial._id)} className="edit">Edit</span>
                                            <span onClick={() => setOpen(true)} style={{color: 'red', padding: '0 20px', cursor: 'pointer'}}>Delete</span>
                                        </Table.Cell>
                                    </Table.Row>
                            }) : null
                        }
                        </Table.Body>
                    </Table>         
                    <Button color='black' floated="right" onClick={() => updateIsEditting(true)}>Add new</Button>   
                </>
                :
                <div className="adminWrap">
                    <Grid className="my-form">
                        <Grid.Row>
                            <Grid.Column width={16}
                                onClick={() => check()}>
                                <CustomImageUploader 
                                    getImageString={getImageString} 
                                    toCloud={toCloud} 
                                    getImageFile={getImage} 
                                    getUrl={getUrl}
                                >
                                    <Display if={image === ''}>
                                        <div className="empty">
                                            <img src="/static/icons/camera.svg" alt=""/> <br/>
                                            <p>Add default image</p>
                                        </div>
                                    </Display>
                                    <Display if={image !== ''}>
                                        <div style={{width: '100%', height: '200px', overflow: 'hidden'}}>
                                            <img src={image} style={{width:'100%'}} />
                                        </div>
                                    </Display>
                                </CustomImageUploader>
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Input value={fullname} onChange={(e) => updateName(e.target.value)} placeholder="Fullname" />
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <Input value={userLocation} onChange={(e) => updateLocation(e.target.value)} placeholder="Location" />
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <TextArea value={body} style={{width: '100%'}} onChange={(e) => updateDesc(e.target.value)}  placeholder="Testimonial body" />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={16}>
                                { error ? <Message negative>
                                    An error occured, Please try again
                                </Message> : null }
                            </Grid.Column>
                        </Grid.Row>
                        
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <Display if={newService}>
                                    <Button onClick={() => addNew()} floated="right" secondary>
                                        <Display if={!loading}>
                                            Save
                                        </Display>
                                        <Display if={loading}>
                                        <Loader active inline='centered' />
                                        </Display>
                                    </Button>
                                    <Button floated="right" onClick={() => updateIsEditting(false)}>
                                        Cancel
                                    </Button>
                                </Display>
                                <Display if={!newService}>
                                    <Button floated="right" onClick={postEdit} disabled={disable}>
                                        Edit
                                    </Button>
                                    <Button floated="right" onClick={() => updateIsEditting(false)}>
                                        Cancel
                                    </Button>
                                </Display>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            }
            </>
            : <Loader active /> 
        }


        <Modal size='mini' open={open} onClose={() => setOpen(false)}>
          <Modal.Header>Delete Category</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete this Testimonial?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={() => setOpen(false)}>No</Button>
            <Button
              positive
              content='Yes'
              onClick={removeCategory}
            />
          </Modal.Actions>
        </Modal>
        </>
    
        )
}
