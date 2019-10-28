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
import { getAllServices } from '../services/generatData.ts'
import { getBeautyServices } from '../store';
import TestimonialMgt from './admin/TestimonialMgt';

const Admin = (props) => {

    const [activeItem, updateActiveItem] = useState('Customer management')
    const [allUsers, updateAllUsers] = useState([])
    const [allCategories, updateCategories] = useState([])
    const [activeComponent, updateActiveComponent] = useState(<CustomerMgt users={allUsers} />)
    const [categories, saveServices] = useState([])

    useEffect(() => {
          if (!window.sessionStorage.getItem('glamourToken')) {
              Router.push('/login')
          } else {
            getData()
        }

        // get list of service categories, trends and serviceProviders
        getAllServices()
        .then(res => {
            // // console.log(res)
            saveServices(res.data.data)
        })
        .catch(err => {
            console.log(err)
        })

    }, [])

    const getData = (n) => {
    }

    const updateComponent = (name) => {
        switch (name) {
            case 'Customer management':
                updateActiveComponent(<CustomerMgt />)
                break;
                
            case 'Service provider management':
                updateActiveComponent(<ServiceProviderMgt />)
                break;
                
            case 'Category management':
                updateActiveComponent(<CategoryMgt />)
                break;
                
            case 'City management':
                updateActiveComponent(<CityMgt {...props} />)
                break;
                
            case 'Order management':
                updateActiveComponent(<OrderMgt {...props} />)
                break;
                
            case 'Subscription management':
                updateActiveComponent(<ContentMgt {...props} />)
                break;
                
            case 'Testimonial Management':
                updateActiveComponent(<TestimonialMgt />)
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
                        name='Subscription management'
                        active={activeItem === 'Subscription management'}
                        onClick={handleItemClick}
                        />
                        <Menu.Item
                        name='Testimonial Management'
                        active={activeItem === 'Testimonial Management'}
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
        state,
        beautyServices: getBeautyServices(state),
    }
}

export default connect(mapStateToProps, actions)(withMasterLayout(Admin))
