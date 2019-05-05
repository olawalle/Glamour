import React from 'react';
import './less/servicesList.less';

const ServicesList = (props) => {
  return (
    <table className={ "services " + props.className }>
      <tbody>
        {props.services.map((service, index) => {
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
            £{props.services.reduce((agg, cur) => agg + cur.price, 0)}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ServicesList;