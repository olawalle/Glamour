import React, { useEffect, useState } from 'react'
import { Table, Button, Grid, Input } from 'semantic-ui-react'
import dayjs from 'dayjs'
import {addCategory} from '../../services/generatData.ts'
import CustomImageUploader from '../../components/shared/CustomImageUploader';

export default function CategoryMgt({categories}) {

    useEffect(() => {
        console.log(categories)
    }, [])

    const getImage = (e) => {
        console.log(e)
    }

    const addNew = (data) => {
        addCategory({
            image: data
        })
    }

    
    const [isEditting, updateIsEditting] = useState(false)

    return (
        !isEditting ? 
        <>
            <p className="heading">
                Category management
            </p>
            <Table basic='very'>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>Category title</Table.HeaderCell>
                    <Table.HeaderCell>Image</Table.HeaderCell>
                    <Table.HeaderCell>Gender</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                 {
                    categories ? categories.map((category, i) => {
                        return <Table.Row key={i}>
                                <Table.Cell>{category._id}</Table.Cell>
                                <Table.Cell>{category.serviceName}</Table.Cell>
                                <Table.Cell>
                                    <img src={category.pictureUrl} width="80" alt=""/>
                                </Table.Cell>
                                <Table.Cell>Male</Table.Cell>
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
                        <CustomImageUploader getImageFile={getImage}>
                            <div className="empty">
                                <img src="/static/icons/camera.svg" alt=""/> <br/>
                                <p>Add default image</p>
                            </div>
                        </CustomImageUploader>
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <Input placeholder="Address line 1" />
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <Input placeholder="Address line 2" />
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <Input placeholder="last name" />
                    </Grid.Column>
                </Grid.Row>
                
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Button onClick={() => addNew()} floated="right" secondary>
                            Save
                        </Button>
                        <Button floated="right" primary>
                            Edit
                        </Button>
                        <Button floated="right" color="red" inverted>
                            delete
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
