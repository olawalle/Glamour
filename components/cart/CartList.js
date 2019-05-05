import React from 'react';
import { Table, Divider, Tag } from 'antd';
import 'antd/lib/table/style/index.css';
import 'antd/lib/pagination/style/index.css';
import 'antd/lib/checkbox/style/index.css';
import './less/cartList.less';
import { Button } from 'semantic-ui-react';
import ServiceProviderMedia from '../../components/shared/ServiceProviderMedia';
import ServicesList from '../../components/shared/ServicesList';

const columns = [
  {
    dataIndex: 'providerInfo',
    width: '3%',
    fixed: true,
    key: 'avatar',
    render: providerInfo => <img className="h40 is-round" src={providerInfo.avatar}></img>,
  },
  {
    dataIndex: 'providerInfo',
    key: 'providerInfo',
    width: '30%',
    render: providerInfo => <ServiceProviderMedia showAvatar={false} providerInfo={providerInfo}/>,
  },
  {
    dataIndex: 'id',
    width: '40%',
    key: 'id',
    render: (id) => (
      <div className="actions">
        <img src='/static/images/trash.svg' />
        <img src='/static/images/edit.svg' />
      </div>
    )
  },
  {
    key: 'services',
    width: '25%',
    dataIndex: 'services',
    render: services => <ServicesList services={services}/>,
  }
];


const CartList = (props) => {
  return (
    <div className="cartlist">
      <Table
        rowSelection={{}}
        showHeader={false}
        showFooter={false}
        scroll={{ x: false, y: 400 }}
        columns={columns}
        dataSource={props.cart}
      />
      <div className="is-h-centered">
        <Button className="h60 checkout-btn" secondary>
          <span className="text">
            Proceed to checkout
          </span>
          <span className="total pl-2">
            £225
          </span>
        </Button>
      </div>
    </div>
  );
}

export default CartList;
