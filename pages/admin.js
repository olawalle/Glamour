import React, { useEffect, useState } from 'react'
import withMasterLayout from './layouts/withMasterLayout';
import * as actions from '../store/actions'
import { connect } from 'react-redux';
import './less/admin.less'
import { Table, Menu, Grid } from 'semantic-ui-react'
import CustomerMgt from './admin/customerMgt';
import ServiceProviderMgt from './admin/serviceProviderMgt';
import CategoryMgt from './admin/categoryMgt';
import CityMgt from './admin/cityMgt';
import ContentMgt from './admin/contentMgt';
import OrderMgt from './admin/orderMgt';
import Router from 'next/router'
import { getAllUsers, getAllCategories } from '../services/generatData.ts'

const Admin = (props) => {

    const [activeItem, updateActiveItem] = useState('Customer management')
    const [allUsers, updateAllUsers] = useState([])
    const [allCategories, updateCategories] = useState([])
    const [activeComponent, updateActiveComponent] = useState(<CustomerMgt users={allUsers} />)

    useEffect(() => {
          if (!window.sessionStorage.getItem('glamourToken')) {
              Router.push('/login')
          } else {
            getData()
        }

    }, [])

    const getData = (n) => {
        getAllUsers()
        .then(res => {
            updateAllUsers(res.data.users)
            !n ? updateActiveComponent(<CustomerMgt users={res.data.users.filter(user => user.role === 'client')} />) : null
        })
        .catch(err => {
            console.log(err)
        })

        getAllCategories() 
        .then(res => {
            updateCategories(res.data.services)
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const updateComponent = (name) => {
        switch (name) {
            case 'Customer management':
                updateActiveComponent(<CustomerMgt users={allUsers.filter(user => user.role === 'client')} />)
                break;
                
            case 'Service provider management':
                updateActiveComponent(<ServiceProviderMgt getUsers={getData(2)} users={allUsers.filter(user => user.role === 'provider')} />)
                break;
                
            case 'Category management':
                updateActiveComponent(<CategoryMgt categories={allCategories} />)
                break;
                
            case 'City management':
                updateActiveComponent(<CityMgt {...props} />)
                break;
                
            case 'Order management':
                updateActiveComponent(<OrderMgt {...props} />)
                break;
                
            case 'Content management':
                updateActiveComponent(<ContentMgt {...props} />)
                break;
        
            default:
                break;
        }
    }


   const handleItemClick = (e, { name }) => {
       updateActiveItem(name)
       updateComponent(name)
   }
    return (
        <div className="adminWrap">
        <Grid>
            <Grid.Row>
                <Grid.Column width={4}>
                    <Menu secondary vertical>
                        <Menu.Item
                        name='Customer management'
                        active={activeItem === 'Customer management'}
                        onClick={handleItemClick}
                        />
                        <Menu.Item
                        name='Service provider management'
                        active={activeItem === 'Service provider management'}
                        onClick={handleItemClick}
                        />
                        <Menu.Item
                        name='Category management'
                        active={activeItem === 'Category management'}
                        onClick={handleItemClick}
                        />
                        <Menu.Item
                        name='City management'
                        active={activeItem === 'City management'}
                        onClick={handleItemClick}
                        />
                        <Menu.Item
                        name='Order management'
                        active={activeItem === 'Order management'}
                        onClick={handleItemClick}
                        />
                        <Menu.Item
                        name='Content management'
                        active={activeItem === 'Content management'}
                        onClick={handleItemClick}
                        />
                    </Menu>
                </Grid.Column>
                <Grid.Column width={12}>
                <div className="tablesWrap">
                    {
                        activeComponent
                    }
                </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps, actions)(withMasterLayout(Admin))
