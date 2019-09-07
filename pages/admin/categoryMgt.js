import React, { useEffect, useState } from 'react'
import { Table, Button, Grid, Input, TextArea, Message, Loader } from 'semantic-ui-react'
import dayjs from 'dayjs'
import { addCategory, getAllCategories} from '../../services/generatData.ts'
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

    const getAll = () => {
        getAllCategories() 
        .then(res => {
            updateCategories(res.data.data)
        })
        .catch(err => {
            console.log(err)
        })
    
    }
    const getImage = (e) => {
        updatePicture(e)
    }

    const getImageString = (e) => {
        updateImage(e)
    }

    const addNew = () => {
        let data = {
            serviceName,
            metaDescription,
            picture
        }
        let form = new FormData()
        Object.keys(data).forEach(key => {
            form.append(key, key)
        })
        updateLoading(true)
        addCategory(form)
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

    
    const [isEditting, updateIsEditting] = useState(false)

    const [loading, updateLoading] = useState(false)
    return (
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
                    <Table.HeaderCell>Status</Table.HeaderCell>
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
                                <Table.Cell><span className="edit">Edit</span></Table.Cell>
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
                    <Grid.Column width={16}>
                        <CustomImageUploader getImageString={getImageString} getImageFile={getImage}>
                            <Display if={image === ''}>
                                <div className="empty">
                                    <img src="/static/icons/camera.svg" alt=""/> <br/>
                                    <p>Add default image</p>
                                </div>
                            </Display>
                            <Display if={image !== ''}>
                                <img src={image} />
                            </Display>
                        </CustomImageUploader>
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <Input onChange={(e) => updateName(e.target.value)} placeholder="Service name" />
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <TextArea style={{width: '100%'}} onChange={(e) => updateDesc(e.target.value)}  placeholder="Service description" />
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
                        </Display>
                        <Display if={!newService}>
                            <Button floated="right" primary>
                                Edit
                            </Button>
                            <Button floated="right" color="red" inverted>
                                delete
                            </Button>
                        </Display>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
