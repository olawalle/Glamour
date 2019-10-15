import React, { useEffect, useState } from 'react'
import { Table, Grid, Icon, Loader } from 'semantic-ui-react'
import { getAllBookings } from '../../services/providerServices.ts'
import dayjs from 'dayjs';

export default function OrderMgt(props) {

    const [isViewing, updateIsViewing] = useState(false)
    const [bookings, updateBookings] = useState([])
    const [selectedBooking, updateSelected] = useState({})
    const [loading, updateloading] = useState(false)

    useEffect(() => {
        updateloading(true)
        getAllBookings()
        .then(res => {
            updateloading(false)
            updateBookings(res.data.data.reverse())
        })
        .catch(err => {
            updateloading(false)
            console.log(err)
        })

    }, [])

    const selectOrder = (i) => {
        updateSelected(bookings[i])
        updateIsViewing(true)
    }

    const unopen = () => {
        updateIsViewing(false)
        console.log(isViewing)
    }

    return (
        <>
            {
                !loading ?    <>
                    <p className="heading">
                        Order management
                    </p>
                    {
                    !isViewing ? 
                    <Table basic='very'>
                        <Table.Header>
                        <Table.Row>
                            {/* <Table.HeaderCell>Order No</Table.HeaderCell> */}
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell>Booked for</Table.HeaderCell>
                            <Table.HeaderCell>Customer name</Table.HeaderCell>
                            <Table.HeaderCell>Service</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {
                                bookings.map((booking, i) => {
                                    return <Table.Row onClick={() => selectOrder(i)} style={{cursor: 'pointer'}} title="click for more details">
                                        {/* <Table.Cell>129977</Table.Cell> */}
                                        <Table.Cell>
                                            {dayjs(booking.message.createdAt).format('DD MMM, YYYY')}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {booking.message.time}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {booking.from.name}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {
                                                booking.message.services.map((serv, i) => {
                                                    return i < booking.message.services.length - 1 ? `${serv.serviceName},` : `${serv.serviceName}`
                                                })
                                            }
                                        </Table.Cell>
                                        <Table.Cell>£{(booking.message.amount / 100).toFixed(2)}</Table.Cell>
                                        { booking.message.status === "completed" && <Table.Cell style={{color: '#0DD29A'}}>{booking.message.status}</Table.Cell> }
                                        { booking.message.status === "pending" && <Table.Cell style={{color: '#FFCC5B'}}>{booking.message.status}</Table.Cell> }
                                        { booking.message.status === "cancelled" && <Table.Cell style={{color: '#FA5C5D'}}>{booking.message.status}</Table.Cell> }
                                    </Table.Row>
                                })
                            }
                        {/* <Table.Row onClick={() => updateIsViewing(true)}>
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
                        </Table.Row> */}
                        </Table.Body>
                    </Table>  
                    : 
                    <>
                        <div className="boxx">
                            {/* <Icon size="small" name="home" className="icon" onClick={() => updateIsViewing(false)} /> */}
                            <span style={{padding: '20px', cursor: 'pointer'}} onClick={() => unopen()}>
                                Close
                            </span>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <p className="row-heading">
                                            ORDER NUMBER:
                                        </p>
                                        <p className="row-text">
                                            {selectedBooking.message.reference}
                                        </p>

                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <p className="row-heading">
                                            TASK CATEGORY:
                                        </p>
                                        <p className="row-text">
                                            {
                                                selectedBooking.message.services.map((serv, i) => {
                                                    return i < selectedBooking.message.services.length - 1 ? `${serv.serviceName},` : `${serv.serviceName}`
                                                })
                                            }
                                        </p>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <p className="row-heading">
                                            Customer name:
                                        </p>
                                        <p className="row-text">
                                            {
                                                selectedBooking.from.name
                                            }
                                        </p>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={8} className="leftside">
                                        Service provider
                                    </Grid.Column>
                                    <Grid.Column width={8} className="rightside">
                                        {
                                            selectedBooking.provider.name
                                        }
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={8} className="leftside">
                                        Date
                                    </Grid.Column>
                                    <Grid.Column width={8} className="rightside">
                                        {dayjs(selectedBooking.message.createdAt).format('DD MMM, YYYY')}
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={8} className="leftside">
                                        Cost of service
                                    </Grid.Column>
                                    <Grid.Column width={8} className="rightside">
                                    £{(selectedBooking.message.amount / 100).toFixed(2)}
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={8} className="leftside">
                                        Status
                                    </Grid.Column>
                                    <Grid.Column width={8} className="rightside">
                                        {
                                            selectedBooking.message.status
                                        }
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </div>
                    </>  
                    }
                </> : <Loader active />
            }
        </>
    )
}
