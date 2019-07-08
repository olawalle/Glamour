import React, { useState, useEffect } from 'react'
import { Table, Grid, Input, Button } from 'semantic-ui-react'
import dayjs from 'dayjs'

export default function ServiceProviderMgt({state, users}) {

    const [isEditting, updateIsEditting] = useState(false)
    const [selectedUser, updateSelectedUser] = useState({})

    useEffect(() => {
      console.log(users)
    }, [])

    const openEdit = (i) => {
      updateIsEditting(true)
      i >= 0 ? updateSelectedUser(users[i]) : updateSelectedUser({})
    }

    return (
        <>
        <p className="heading">
            Service provider management
        </p>
        {
            !isEditting ? 
            <>
            <Table basic='very'>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>First Name</Table.HeaderCell>
                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                    <Table.HeaderCell>Email Address</Table.HeaderCell>
                    <Table.HeaderCell>Mobile number</Table.HeaderCell>
                    <Table.HeaderCell>Postcode</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                {
                  users ? users.map((user, i) => {
                    return <Table.Row key={i}>
                        <Table.Cell>{user.fullname}</Table.Cell>
                        <Table.Cell>{user.email}</Table.Cell>
                        <Table.Cell>{user.phone}</Table.Cell>
                        <Table.Cell>{user.postcode}</Table.Cell>
                        <Table.Cell>{dayjs(user.createdAt).format('DD MMM YYYY')}</Table.Cell>
                        <Table.Cell> <span className="edit" onClick={() => openEdit(i)}>Edit</span> </Table.Cell>
                    </Table.Row>
                  }): null
                }
                </Table.Body>
            </Table>        
            {/* <Button onClick={() => openEdit()} floated="right" color='black'>Add new</Button>        */}
            </>  
       
           :
           <div className="my-form">
              <Grid>
                  <Grid.Row>
                      <Grid.Column width={16}>
                        <Input value={selectedUser.fullname} placeholder="full name" />
                      </Grid.Column>
                      <Grid.Column width={16}>
                        <Input value={selectedUser.email} placeholder="Email" />
                      </Grid.Column>
                      <Grid.Column width={16}>
                        <Input placeholder="00-00-00" />
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
                      <Grid.Column width={16}>
                        <Input placeholder="last name" />
                      </Grid.Column>
                      <Grid.Column width={16}>
                        <Button floated="right" color="pink" onClick={() => updateIsEditting(false)}>
                            Save
                        </Button>
                        <Button floated="right" secondary onClick={() => updateIsEditting(false)}>
                            Reset password
                        </Button>
                      </Grid.Column>
                  </Grid.Row>
              </Grid>
           </div>
        }
        </>
    )
}
