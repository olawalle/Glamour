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



const CartList = (props) => {

  const getProvider = (id) => {
    let provider = props.serviceProviders.find(prv => prv._id === id)
    return provider
  }

const columns = [
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
          providerId={row}
        />
        <ServicesList
          className="mb-20"
          services={full.services}
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
        <Button className={row.status == "pending" ? 'progress-btn' : row.status +'-btn'}>
          {row.status}
        </Button>
      </div>
    )
  },
];

  return (
    <div className="bookingslist">
      <Table
        showHeader={false}
        showFooter={false}
        scroll={{ x: false, y: 450 }}
        columns={columns}
        dataSource={props.bookings_}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  serviceProviders: state.serviceProviders.allProviders,
  bookings_: state.bookings.bookedItems
})

export default connect(mapStateToProps, actions)(CartList);
