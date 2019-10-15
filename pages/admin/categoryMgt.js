import React, { useEffect, useState } from 'react'
import { Table, Button, Grid, Input, TextArea, Message, Loader , Modal} from 'semantic-ui-react'
import dayjs from 'dayjs'
import { 
    addCategory, 
    getAllCategories, 
    editCategory,
    deleteCategory
} from '../../services/generatData.ts'
import CustomImageUploader from '../../components/shared/CustomImageUploader';
import Display from '../../components/shared/Display';

export default function CategoryMgt(props) {

    useEffect(() => {
        getAll()
    }, [])

    const [image, updateImage] = useState('')
    const [newService, updateNewService] = useState(true)
    const [picture, updatePicture] = useState(null)
    const [serviceName, updateName]= useState('')
    const [metaDescription, updateDesc]= useState('') 
    const [categories, updateCategories] = useState([])
    const [error, updateError] = useState(false)
    const [toCloud, uploadToCloud] = useState(false)
    const [selectedCategory, updateSelectedCategory] = useState({})
    const [disable, updateDisable] = useState(false)
    const [open, setOpen] = useState(false)

    const getAll = () => {
        updateLoading2(true)
        getAllCategories() 
        .then(res => {
            updateCategories(res.data.data)
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
        updateSelectedCategory({
            ...selectedCategory,
            pictureUrl
        })
    }

    const check = () => {
        if (selectedCategory.pictureUrl) {
            uploadToCloud(true)
            updateDisable(true)
        } else {
            updateDisable(false)
        }
    } 

    const addNew = () => {
        let form = new FormData()
        form.append('picture', picture)
        form.append('serviceName', serviceName)
        form.append('metaDescription', metaDescription)
        updateLoading(true)
        addCategory(form)
        .then(res => {
            getAll()
            updateIsEditting(false)
            updateLoading(false)
            updateImage('')
            updatePicture(null)
            updateName('')
            updateDesc('')
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
            ...selectedCategory,
            metaDescription: metaDescription,
            serviceName: serviceName
        }
        editCategory(data)
        .then(res => {
            getAll()
            updateIsEditting(false)
            updateSelectedCategory({})
            updateImage('')
            updatePicture(null)
            updateName('')
            updateDesc('')
            updateNewService(true)
        })
        .catch(err => {
            console.log({...err})
        })
    }

    const removeCategory = () => {
        // console.log(selectedCategory)
        deleteCategory(selectedCategory._id)
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
        let selectedCategory = categories.find(cat => cat._id === id)
        updateSelectedCategory(selectedCategory)
        updateImage(selectedCategory.pictureUrl)
        updateName(selectedCategory.serviceName)
        updateDesc(selectedCategory.metaDescription)
        updateIsEditting(true)
        updateNewService(false)
    }

    const openDelete = (id) => {
        let selectedCategory = categories.find(cat => cat._id === id)
        updateSelectedCategory(selectedCategory)
        setOpen(true)
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
                        Category management
                    </p>
                    <Table basic='very'>
                        <Table.Header>
                        <Table.Row>
                            {/* <Table.HeaderCell>ID</Table.HeaderCell> */}
                            <Table.HeaderCell>Category title</Table.HeaderCell>
                            <Table.HeaderCell>Image</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Created on</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                        {
                            categories ? categories.map((category, i) => {
                                return <Table.Row key={i}>
                                        {/* <Table.Cell>{category._id}</Table.Cell> */}
                                        <Table.Cell>{category.serviceName}</Table.Cell>
                                        <Table.Cell>
                                            <img src={category.pictureUrl} width="80" alt=""/>
                                        </Table.Cell>
                                        <Table.Cell>{category.metaDescription}</Table.Cell>
                                        <Table.Cell>{dayjs(category.createdAt).format('DD MMM YYYY')}</Table.Cell>
                                        <Table.Cell>
                                            <span onClick={() => openEdit(category._id)} className="edit">Edit</span>
                                            <span onClick={() => openDelete(category._id)} style={{color: 'red', padding: '0 20px', cursor: 'pointer'}}>Delete</span>
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
                                <Input value={serviceName} onChange={(e) => updateName(e.target.value)} placeholder="Service name" />
                            </Grid.Column>
                            <Grid.Column width={16}>
                                <TextArea value={metaDescription} style={{width: '100%'}} onChange={(e) => updateDesc(e.target.value)}  placeholder="Service description" />
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
                                    <Button floated="right"  onClick={() => updateIsEditting(false)}>
                                        Cancel
                                    </Button>
                                </Display>
                                <Display if={!newService}>
                                    <Button floated="right" color="green" onClick={postEdit} disabled={disable}>
                                        Save
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
            <p>Are you sure you want to delete this category?</p>
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
