import React, { useEffect } from 'react'
import { Table, Input, Button, Grid, Radio } from 'semantic-ui-react'

export default function CityMgt({state}) {

    useEffect(() => {
        console.log(state)
    }, [])

    return (
        <>
            <p className="heading">
                City management
            </p>
            <Table basic='very'>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>City name</Table.HeaderCell>
                        <Table.HeaderCell>Country</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell>Active</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>0023234</Table.Cell>
                        <Table.Cell>London</Table.Cell>
                        <Table.Cell>United Kingdom</Table.Cell>
                        <Table.Cell style={{color: '#0DD29A'}}>Active</Table.Cell>
                        <Table.Cell>
                            <Radio toggle checked={true} />
                        </Table.Cell>
                        <Table.Cell style={{color: 'red'}}>remove</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>0023234</Table.Cell>
                        <Table.Cell>London</Table.Cell>
                        <Table.Cell>United Kingdom</Table.Cell>
                        <Table.Cell style={{color: '#0DD29A'}}>Active</Table.Cell>
                        <Table.Cell>
                            <Radio toggle checked={true} />
                        </Table.Cell>
                        <Table.Cell style={{color: 'red'}}>remove</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>0023234</Table.Cell>
                        <Table.Cell>London</Table.Cell>
                        <Table.Cell>United Kingdom</Table.Cell>
                        <Table.Cell>Not active</Table.Cell>
                        <Table.Cell>
                            <Radio toggle checked={false} />
                        </Table.Cell>
                        <Table.Cell style={{color: 'red'}}>remove</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>    
            
            <p className="heading">
                Add city
            </p>   
            <Grid className="my-form">
                <Grid.Row>
                    <Grid.Column width={12}>
                        <Input placeholder="search city"/> 
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Button secondary style={{marginTop: '11px'}}>Search</Button> 
                    </Grid.Column>
                </Grid.Row>
            </Grid> 
        </>
    )
}
