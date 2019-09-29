import React, { useEffect, useState } from 'react'
import { Table, Input, Button, Grid, Radio, Loader, Modal } from 'semantic-ui-react'
import { getCities, addCity, removeCity, editCity } from '../../services/generatData.ts'

export default function CityMgt(props) {

    useEffect(() => {
        setLoading(true)
        getCities()
        .then(res => {
            setLoading(false)
            updateCities(res.data.cities)
        })
        .catch(err => {
            setLoading(false)
        })
    }, [])

    const [cities, updateCities] = useState([])
    const [city, updateCity] = useState('')
    const [country, updateCountry] = useState('')
    const [postCode, updatePostcode] = useState('')
    const [sendingRequest, updatesendingRequest] = useState(false)
    const [loading, setLoading] = useState(false)
    const [adding, setAdding] = useState(false)
    const [open, setOpen] = useState(false)
    const [id, setId] = useState('')

    const postCity = () => {
        updatesendingRequest(true)
        let data = {
            postCode,
            city,
            country
        }

        addCity(data)
        .then(res => {
            updatesendingRequest(false)
            getCities()
            .then(res => {
                setLoading(false)
                setAdding(false)
                updateCities(res.data.cities)
            })
            .catch(err => {
                setAdding(false)
            })
        })
        .catch(err => {
            updatesendingRequest(false)
        })
    }

    const openModal = (id) => {
        setId(id)
        setOpen(true)
    }
    
    const updateCity_ = (e, id) => {
        setLoading(true)
        let selectedCity = cities.find(city => city._id === id)
        let data = {
            ...selectedCity,
            status: e.checked ? 'Active' : 'Inactive'
        }
        editCity(data)
        .then(res => {
            getCities()
            .then(res => {
                setLoading(false)
                updateCities(res.data.cities)
            })
            .catch(err => {
                setLoading(false)
            })
        })
        .catch(err => {
            setLoading(false)
            updatesendingRequest(false)
        })
        
    }

    const deleteCity = () => {
        removeCity(id)
        .then(res => {
            getCities()
            .then(res => {
                setLoading(false)
                setAdding(false)
                updateCities(res.data.cities)
            })
            .catch(err => {
                setAdding(false)
            })
        })
    }

    return (
        <>
            { !loading ? 
            <>
            { !adding ?
                <>
                <p className="heading">
                    City management 
                    <Button secondary style={{
                            position: 'absolute',
                            right: '0',
                            marginTop: '-20px'
                    }} onClick={() => setAdding(true)}>
                        Add new city
                    </Button>
                </p>
                <Table basic='very'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Postcode</Table.HeaderCell>
                            <Table.HeaderCell>City name</Table.HeaderCell>
                            <Table.HeaderCell>Country</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>Active</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            cities.map((city, i) => {
                            return <Table.Row key={'city'+i}>
                                <Table.Cell>
                                    {city.postCode}
                                </Table.Cell>
                                <Table.Cell>
                                    {city.city}
                                </Table.Cell>
                                <Table.Cell>
                                    {city.country}
                                </Table.Cell>
                                { city.status === 'Active' ? <Table.Cell style={{color: '#0DD29A'}}>
                                    {city.status}
                                </Table.Cell> : <Table.Cell style={{color: 'red'}}>
                                    {city.status}
                                </Table.Cell>
                                } 
                                <Table.Cell>
                                    <Radio toggle checked={city.status === 'Active'} onChange={(a, b) => updateCity_(b, city._id)} />
                                </Table.Cell>
                                <Table.Cell style={{color: 'red', cursor: 'pointer'}}>
                                    <span onClick={() => openModal(city._id)}>
                                        remove
                                    </span>
                                </Table.Cell>
                            </Table.Row>
                            })
                        }
                    </Table.Body>
                </Table>    
                
                </> : <>
                <p className="heading">
                    Add city
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
                                placeholder="post code" 
                                onChange={(e) => updatePostcode(e.target.value)}
                                value={postCode}
                                /> 
                        </Grid.Column>
                        <Grid.Column width={16}>
                            <Input 
                                placeholder="city" 
                                onChange={(e) => updateCity(e.target.value)}
                                value={city}
                                /> 
                        </Grid.Column>
                        <Grid.Column width={16}>
                            <Input 
                                placeholder="Country" 
                                onChange={(e) => updateCountry(e.target.value)}
                                value={country}
                                /> 
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Button secondary style={{marginTop: '11px'}} onClick={() => postCity()}>
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
              <Modal.Header>Delete City</Modal.Header>
              <Modal.Content>
                <p>Are you sure you want to delete this city?</p>
              </Modal.Content>
              <Modal.Actions>
                <Button negative onClick={() => setOpen(false)}>No</Button>
                <Button
                  positive
                  content='Yes'
                  onClick={deleteCity}
                />
              </Modal.Actions>
            </Modal>
        </>
    )
}
