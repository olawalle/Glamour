import React, { useState, useEffect } from 'react'
import { Table, Grid, Input, Button, Checkbox } from 'semantic-ui-react'
import dayjs from 'dayjs'
import { getAllUsers } from '../../services/generatData.ts'
import { deactivateUser } from '../../services/auth.ts'
import Loader from '../../components/shared/Loader';

export default function ServiceProviderMgt({state}) {

    const [isEditting, updateIsEditting] = useState(false)
    const [selectedUser, updateSelectedUser] = useState({})
    const [loading, updateLoading] = useState(false)
    const [users, updateAllUsers] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
      getUsers()
    }, [])

    const openEdit = (i) => {
      updateIsEditting(true)
      i >= 0 ? updateSelectedUser(users[i]) : updateSelectedUser({})
    }

    const check = (e, id) => {
      updateLoading(true)
      let active = users.find(user => user._id === id).isActive === 1
      let status = null
      active ? status = 0 : status = 1
      deactivateUser(id, status)
      .then(res => {
        getUsers()
      })
      .catch(err => {
        updateLoading(false)
        console.log({...err})
      })
    }

    const getUsers = () => {
      getAllUsers()
      .then(res => {
        updateLoading(false)
        updateAllUsers(res.data.users.filter(user => user.role === 'provider'))
      })
      .catch(err => {
        updateLoading(false)
        console.log(err)
      })
    }

    return (
        <>
        <p className="heading">
          Service provider management 
        </p>
        <Input value={search} placeholder="Search" onChange={(e) => setSearch(e.target.value)} className="search" />
        {
          loading ? <Loader /> : 
            <>
            {
                !isEditting ? 
                <>
                <Table basic='very'>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Full Name</Table.HeaderCell>
                        {/* <Table.HeaderCell>Last Name</Table.HeaderCell> */}
                        <Table.HeaderCell>Email Address</Table.HeaderCell>
                        <Table.HeaderCell>Mobile number</Table.HeaderCell>
                        <Table.HeaderCell>Postcode</Table.HeaderCell>
                        <Table.HeaderCell>Active</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    {
                      users ? users
                      .filter(user => {
                        return user.fullname.toLowerCase().includes(search.toLowerCase()) ||
                        user.email.toLowerCase().includes(search.toLowerCase()) || 
                        user.phone.toLowerCase().includes(search)
                      })
                      .map((user, i) => {
                        return <Table.Row key={i}>
                            <Table.Cell>{user.fullname}</Table.Cell>
                            <Table.Cell>{user.email}</Table.Cell>
                            <Table.Cell>{user.phone}</Table.Cell>
                            <Table.Cell>{user.postcode}</Table.Cell>
                            {/* <Table.Cell>{dayjs(user.createdAt).format('DD MMM YYYY')}</Table.Cell> */}
                            <Table.Cell> 
                              <Checkbox checked={user.isActive === 1} onClick={(e, f) => check(f, user._id)} toggle />
                              {/* <span className="edit" onClick={() => openEdit(i)}>Edit</span>  */}
                            </Table.Cell>
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
          }
        </>
    )
}
