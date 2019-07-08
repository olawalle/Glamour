import React, { useEffect, useState } from 'react'
import { Table, Grid, Icon } from 'semantic-ui-react'

export default function OrderMgt({state}) {
    const [isViewing, updateIsViewing] = useState(false)
    useEffect(() => {
        console.log(state)
    }, [])

    return (
        <>
            <p className="heading">
                Order management
            </p>
            {
            !isViewing ? 
            <Table basic='very'>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Order No</Table.HeaderCell>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                    <Table.HeaderCell>Customer name</Table.HeaderCell>
                    <Table.HeaderCell>Service</Table.HeaderCell>
                    <Table.HeaderCell>Price</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                <Table.Row onClick={() => updateIsViewing(true)}>
                    <Table.Cell>129977</Table.Cell>
                    <Table.Cell>01/12/2019</Table.Cell>
                    <Table.Cell>Jane Mary</Table.Cell>
                    <Table.Cell>Massage</Table.Cell>
                    <Table.Cell>£54.00</Table.Cell>
                    <Table.Cell style={{color: '#0DD29A'}}>Completed</Table.Cell>
                </Table.Row>
                <Table.Row onClick={() => updateIsViewing(true)}>
                    <Table.Cell>129977</Table.Cell>
                    <Table.Cell>01/12/2019</Table.Cell>
                    <Table.Cell>Jane Mary</Table.Cell>
                    <Table.Cell>Hair removal</Table.Cell>
                    <Table.Cell>£100.00</Table.Cell>
                    <Table.Cell style={{color: '#FFCC5B'}}>Pending</Table.Cell>
                </Table.Row>
                <Table.Row onClick={() => updateIsViewing(true)}>
                    <Table.Cell>129977</Table.Cell>
                    <Table.Cell>01/12/2019</Table.Cell>
                    <Table.Cell>Jane Mary</Table.Cell>
                    <Table.Cell>Massage</Table.Cell>
                    <Table.Cell>£32.00</Table.Cell>
                    <Table.Cell style={{color: '#FA5C5D'}}>Cancelled</Table.Cell>
                </Table.Row>
                </Table.Body>
            </Table>  
            : 
            <>
                <div className="boxx">
                    <Icon size="small" name="home" className="icon" onClick={() => updateIsViewing(false)} />
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <p className="row-heading">
                                    ORDER NUMBER:
                                </p>
                                <p className="row-text">
                                    909654
                                </p>

                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <p className="row-heading">
                                    TASK CATEGORY:
                                </p>
                                <p className="row-text">
                                    Massae, Hair removal
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <p className="row-heading">
                                    Customer name:
                                </p>
                                <p className="row-text">
                                    Lola Anthwerp
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8} className="leftside">
                                Service provider
                            </Grid.Column>
                            <Grid.Column width={8} className="rightside">
                                Martha Jones
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8} className="leftside">
                                Date
                            </Grid.Column>
                            <Grid.Column width={8} className="rightside">
                                12/05/2019
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8} className="leftside">
                                Cost of service
                            </Grid.Column>
                            <Grid.Column width={8} className="rightside">
                            £66.00
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8} className="leftside">
                                Status
                            </Grid.Column>
                            <Grid.Column width={8} className="rightside">
                                Completed
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </>  
            }     
        </>
    )
}
