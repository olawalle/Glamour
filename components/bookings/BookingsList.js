import React, { useEffect } from 'react';
import { Table, Divider, Tag } from 'antd';
import { Button } from 'semantic-ui-react';
import ServiceProviderMedia from '../../components/shared/ServiceProviderMedia';
import ServicesList from '../../components/shared/ServicesList';
import 'antd/lib/table/style/index.css';
import 'antd/lib/pagination/style/index.css';
import 'antd/lib/checkbox/style/index.css';
import './less/bookingsList.less';
import { connect } from 'react-redux';
import * as actions from '../../store/actions'
import Display from '../shared/Display';
import { updateStatus } from '../../services/auth.ts'
import { getProviderBookings } from '../../services/providerServices.ts'



const CartList = (props) => {

  const markAsCompleted = (id) => {
    console.log(id)
    let data = {
      status: 'completed'
    }
    updateStatus(data, id)
    .then(res => {
      console.log(res)
      getProviderBookings()
      .then(providerBookings => {
        props.fetchData(providerBookings.data.data)
      })
      .catch(err => {
        console.log({...err})
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  const leaveFeedback = (id) => {

  }

  const providerCols = [
    {
      dataIndex: 'providerId',
      key: 'providerId',
      align: 'left',
      width: '40%',
      render: (row, full) => (
        <div>
          <ServiceProviderMedia
            showAvatar={true}
            className="mb-30"
            clientDetails={full}
          />
          <ServicesList
            className="mb-20"
            role={props.role}
            services={full}
          />
        </div>
      ),
    },
    {
      dataIndex: '_id',
      width: '30%',
      align: 'center',
      key: '_id',
      render: (id, row) => (
        <div className="actions">
          <Button className={row.message.status == "pending" ? 'progress-btn' : row.message.status +'-btn'}>
            {row.message.status}
          </Button>
        </div>
      )
    },
    {
      dataIndex: 'mark',
      width: '30%',
      align: 'center',
      key: 'mark',
      render: (id, row) => (
        <>
          <Display if={props.role === 'provider' && row.message.status === "pending"}>
            <div className="actions"> 
              <Button className="secondaryBtn" onClick={() => markAsCompleted(row.message._id)}>
                Mark as completed
              </Button>
            </div>
          </Display>  
          <Display if={props.role === 'provider' && row.message.status === "completed"}>
            <div className="actions"> 
              <Button className="secondaryBtn" onClick={() => leaveFeedback(row.message._id)}>
                Leave feedback
              </Button>
            </div>
          </Display>    
        </>
      )
    },
  ];

  const clientCols = [
    {
      dataIndex: 'providerId',
      key: 'providerId',
      align: 'left',
      width: '60%',
      render: (row, full) => (
        <div>
          <ServiceProviderMedia
            showAvatar={true}
            className="mb-30"
            clientDetails={full}
          />
          <ServicesList
            className="mb-20"
            role={props.role}
            services={full}
          />
        </div>
      ),
    },
    {
      dataIndex: '_id',
      width: '40%',
      align: 'center',
      key: '_id',
      render: (id, row) => (
        <div className="actions">
          <Button className={row.message.status == "pending" ? 'progress-btn' : row.message.status +'-btn'}>
            {row.message.status}
          </Button>
        </div>
      )
    },
  ];

  return (
    <>
      <Display if={props.role === 'provider'}>
        <div className="bookingslist">
          <Table
            showHeader={false}
            showFooter={false}
            scroll={{ x: false, y: 450 }}
            columns={providerCols}
            dataSource={props.bookings_}
          />
        </div>
      </Display>
      <Display if={props.role === 'client'}>
        <div className="bookingslist">
          <Table
            showHeader={false}
            showFooter={false}
            scroll={{ x: false, y: 450 }}
            columns={clientCols}
            dataSource={props.bookings_}
          />
        </div>
      </Display>
    </>
  );
}

const mapStateToProps = (state) => ({
  serviceProviders: state.serviceProviders.allProviders,
  bookings_: state.bookings.bookedItems
})

export default connect(mapStateToProps, actions)(CartList);
