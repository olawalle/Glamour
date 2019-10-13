import React, { useEffect, useState } from 'react'
import { Table, Input, Button, Grid, Radio, Loader, Modal } from 'semantic-ui-react'
import { 
    getSubscriptions,
    addSubscription,
    deleteSubscription} from '../../services/providerServices.ts'

export default function ContentMgt(props) {

    useEffect(() => {
        setLoading(true)
        getAll()
    }, [])

    const [subs, updateSubscriptions] = useState([])
    const [name, updateName] = useState('')
    const [amount, updateAmount] = useState('')
    const [duration, updateDuration] = useState('')
    const [currency, updateCurrency] = useState('gbp')
    const [sendingRequest, updatesendingRequest] = useState(false)
    const [loading, setLoading] = useState(false)
    const [adding, setAdding] = useState(false)
    const [open, setOpen] = useState(false)
    const [id, setId] = useState('')


    const getAll = () => {
        getSubscriptions()
        .then(res => {
            setLoading(false)
            updateSubscriptions(res.data.subscriptions)
        })
        .catch(err => {
            setLoading(false)
        })
    }

    const openModal = (id) => {
        setId(id)
        setOpen(true)
    }

    const postSubscription = () => {
        setLoading(true)
        updatesendingRequest(true)
        let data = {
            name,
            amount,
            duration,
            currency
        }

        addSubscription(data)
        .then(res => {
            updatesendingRequest(false)
            setAdding(false)
            getAll()
            setOpen(false)
            setLoading(false)
        })
        .catch(err => {
            setLoading(false)
            setOpen(false)
            setAdding(false)
            updatesendingRequest(false)
        })
    }

    const deleteSub = () => {
        setLoading(true)
        deleteSubscription(id)
        .then(res => {
            getAll()
            setLoading(false)
            setOpen(false)
        })
        .catch(err => {
            setLoading(false)
            setOpen(false)
        })
    }

    return (
        <>
            { !loading ? 
            <>
            { !adding ?
                <>
                <p className="heading">
                    Subscriptions management 
                    <Button secondary style={{
                            position: 'absolute',
                            right: '0',
                            marginTop: '-20px'
                    }} onClick={() => setAdding(true)}>
                        Add new subscription
                    </Button>
                </p>
                <Table basic='very'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Amount</Table.HeaderCell>
                            <Table.HeaderCell>Duration</Table.HeaderCell>
                            <Table.HeaderCell>Currency</Table.HeaderCell>
                            {/* <Table.HeaderCell>Active</Table.HeaderCell> */}
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            subs.map((city, i) => {
                            return <Table.Row key={'city'+i}>
                                <Table.Cell>
                                    {city.name}
                                </Table.Cell>
                                <Table.Cell>
                                    £{city.amount}
                                </Table.Cell>
                                <Table.Cell>
                                    {city.duration} days
                                </Table.Cell>
                                <Table.Cell>
                                    {city.currency}
                                </Table.Cell>
                                {/* { city.status === 'Active' ? <Table.Cell style={{color: '#0DD29A'}}>
                                    {city.status}
                                </Table.Cell> : <Table.Cell style={{color: 'red'}}>
                                    {city.status}
                                </Table.Cell>
                                }  */}
                                <Table.Cell style={{color: 'red'}}>
                                    <b onClick={() => openModal(city._id)} style={{cursor: 'pointer'}}>
                                        Delete
                                    </b>
                                </Table.Cell>
                            </Table.Row>
                            })
                        }
                    </Table.Body>
                </Table>    
                
                </> : <>
                <p className="heading">
                    Add Subscription
                    <Button secondary style={{
                            position: 'absolute',
                            right: '0',
                            marginTop: '-20px'
                    }} onClick={() => setAdding(false)}>
                        Close
                    </Button>
                </p>   
                <Grid className="my-form">
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Input 
                                placeholder="Name" 
                                onChange={(e) => updateName(e.target.value)}
                                value={name}
                                /> 
                        </Grid.Column>
                        <Grid.Column width={16}>
                            <Input 
                                placeholder="Duration" 
                                onChange={(e) => updateDuration(e.target.value)}
                                value={duration}
                                /> 
                        </Grid.Column>
                        <Grid.Column width={16}>
                            <Input 
                                placeholder="Amount" 
                                onChange={(e) => updateAmount(e.target.value)}
                                value={amount}
                                />
                        </Grid.Column>
                        <Grid.Column width={16}>
                            <Input 
                                placeholder="Currency" 
                                onChange={(e) => updateCurrency(e.target.value)}
                                value={currency}
                                />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Button secondary style={{marginTop: '11px'}} onClick={() => postSubscription()}>
                                {
                                    sendingRequest ? <Loader active /> : <>Add</>
                                }
                            </Button> 
                        </Grid.Column>
                    </Grid.Row>
                </Grid> 
                </>
            }
            </> : <Loader active />
            } 
            <Modal size='mini' open={open} onClose={() => setOpen(false)}>
              <Modal.Header>Delete Subscription</Modal.Header>
              <Modal.Content>
                <p>Are you sure you want to delete this subscription?</p>
              </Modal.Content>
              <Modal.Actions>
                <Button negative onClick={() => setOpen(false)}>No</Button>
                <Button
                  positive
                  content='Yes'
                  onClick={deleteSub}
                />
              </Modal.Actions>
            </Modal>
        </>
    )
}
