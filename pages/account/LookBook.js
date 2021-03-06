import React, {useState, useEffect} from 'react'
import CustomImageUploader from '../../components/shared/CustomImageUploader';
import './less/lookbook.less'
import { connect } from 'react-redux';
import { Grid, Button, Modal } from 'semantic-ui-react';
import * as actions from '../../store/actions'
import { addLookbook, getLookbook, deleteLookbook } from '../../services/providerServices.ts'
import Loader from '../../components/shared/Loader';

export default function LookBook (props) {

    useEffect(() => {
        if (props.user.id) {
            getLookbook(props.user.id)
            .then(response => {
                updateIsAdding(false)
                setlookBook(response.data.looks)
            })
        }
    }, [])

    const getUserphotoImageString = (e) => {
        // console.log(e)
    }

    const close = () => {
        updateIsAdding(false)
    }

    const [lookBook, setlookBook] = useState([])
    const [deleting, setdeleting] = useState(false)
    const [open, setOpen] = useState(false)

    const getImageFile = (e) => {
        setdeleting(true)
        let formData = new FormData()
        formData.append('picture', e)
        addLookbook(props.user.id, formData)
        .then(res => {
            getLookbook(props.user.id)
            .then(response => {
                updateIsAdding(false)
                setdeleting(false)
                setlookBook(response.data.looks)
            })
        })
        .catch(err => {
            setdeleting(false)
            console.log(err)
        })
    }

    const removeLookbook = (id) => {
        setdeleting(true)
        setOpen(false)
        deleteLookbook(id)
        .then(res => {
            getLookbook(props.user.id)
            .then(response => {
                setdeleting(false)
                updateIsAdding(false)
                setlookBook(response.data.looks)
            })
        })
        .catch(err => {
            setdeleting(false)
            console.log(err)
        })
    }

    const [isAdding, updateIsAdding] = useState(false)

    return (
        <div className="look">
            { deleting && <Loader /> }
            <Grid columns={1}>
                <p className="sectionTitle">
                    Look book 
                    
                    {
                        lookBook.length < 6 && !isAdding ? 
                        <Button style={{float: 'right', cursor: 'pointer'}} className="secondaryBtn" onClick={() => updateIsAdding(true)}>
                            Add new Image
                        </Button> : <span onClick={close} style={{float: 'right', cursor: 'pointer'}}>close</span>
                    }
                </p>
            </Grid>
            {
                isAdding ? <CustomImageUploader  getImageString={getUserphotoImageString} getImageFile={getImageFile}>
                                <div className="imgWrap">
                                    <div>
                                        <img src="/static/icons/image.svg" alt=""/>
                                        <p>Click to upload images for this service or drag in from computer</p>
                                    </div>
                                </div>
                            </CustomImageUploader> :
                <div>
                    <Grid columns={2}>
                        <Grid.Row>
                            {
                                lookBook ? lookBook.map((look, i) => {
                                    return <Grid.Column key={i} className="lookColumn">
                                        <span className="deleteBtn" onClick={() => setOpen(true)}>
                                            <img src="/static/images/bin.svg" width="20" alt="" /> Delete
                                        </span>
                                        <img className="look" src={look.pictureUrl} alt=""/>

                                        <Modal size='mini' open={open} onClose={() => setOpen(false)}>
                                            <Modal.Header>Delete Lookbook</Modal.Header>
                                            <Modal.Content>
                                            <p>Are you sure you want to delete this account lookbook?</p>
                                            </Modal.Content>
                                            <Modal.Actions>
                                            <Button negative onClick={() => setOpen(false)}>No</Button>
                                            <Button
                                                positive
                                                content='Yes'
                                                onClick={() => removeLookbook(look._id)}
                                            />
                                            </Modal.Actions>
                                        </Modal>  
                                    </Grid.Column>
                                }) : null
                            }
                        </Grid.Row>
                    </Grid>
                </div>
            }          
        </div>
    )
}

