import React from 'react';
import { Table, Divider, Tag } from 'antd';
import 'antd/lib/table/style/index.css';
import 'antd/lib/pagination/style/index.css';
import 'antd/lib/checkbox/style/index.css';
import './less/cartList.less';
import { Button } from 'semantic-ui-react';

const columns = [{
  dataIndex: 'avatar',
  width: '3%',
  fixed: true,
  key: 'avatar',
  render: avatar => <img className="h40 is-round" src={avatar}></img>,
},
{
  dataIndex: 'providerInfo',
  key: 'providerInfo',
  width: '30%',
  render: providerInfo => (
    <>
      <h4 className="has-font-freight fw900">{providerInfo.name}</h4>
      <span className="time-container">
        <img className="pr-10" src="/static/images/clock.svg" />
        <span className="time ">{providerInfo.formattedTime}</span>
      </span>
    </>
  ),
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
  render: services => (
    <table className="services">
      <tbody>
        {services.map((service, index) => {
          return (
            <tr key={index}>
              <td className="fw600 h40 pb-15">
                {service.name}
              </td>
              <td className="fw600 h40 pb-15 has-text-aligned-right">
                £{service.price}
              </td>
            </tr>
          )
        })}
        <tr>
          <td className="fw600">Total</td>
          <td className="is-pink fw900 has-text-aligned-right">
            £{services.reduce((agg, cur) => agg + cur.price, 0)}
          </td>
        </tr>
      </tbody>
    </table>
  ),
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
