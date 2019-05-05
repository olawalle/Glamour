import React from 'react';
import { Table, Divider, Tag } from 'antd';
import { Button } from 'semantic-ui-react';
import ServiceProviderMedia from '../../components/shared/ServiceProviderMedia';
import ServicesList from '../../components/shared/ServicesList';
import 'antd/lib/table/style/index.css';
import 'antd/lib/pagination/style/index.css';
import 'antd/lib/checkbox/style/index.css';
import './less/bookingsList.less';

const columns = [
  {
    dataIndex: 'providerInfo',
    key: 'providerInfo',
    align: 'left',
    width: '40%',
    render: (providerInfo, row) => (
      <div>
        <ServiceProviderMedia
          showAvatar={true}
          className="mb-30"
          providerInfo={row.providerInfo}
        />
        <ServicesList
          className="mb-20"
          services={row.services}
        />
      </div>
    ),
  },
  {
    dataIndex: 'id',
    width: '40%',
    align: 'center',
    key: 'id',
    render: (id, row) => (
      <div className="actions">
        <Button className={row.status == 'running' ? 'progress-btn' : row.status +'-btn'}>
          {row.progressText}
        </Button>
      </div>
    )
  },
];


const CartList = (props) => {
  return (
    <div className="bookingslist">
      <Table
        showHeader={false}
        showFooter={false}
        scroll={{ x: false, y: 750 }}
        columns={columns}
        dataSource={props.bookings}
      />
    </div>
  );
}

export default CartList;
