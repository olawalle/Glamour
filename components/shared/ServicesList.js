import React, {useEffect} from 'react';
import './less/servicesList.less';

const ServicesList = (props) => {

  return (
    <table className={ "services " + props.className }>
      <tbody>
        {props.services.map((service, index) => {
          return (
            <tr key={index}>
              <td className="fw600 h40 pb-15">
                {service.serviceName}
              </td>
              <td className="fw600 h40 pb-15 has-text-aligned-right">
                £{service.amount}
              </td>
            </tr>
          )
        })}
        <tr>
          <td className="fw600">Total</td>
          <td className="is-pink fw900 has-text-aligned-right">
            £{props.services.reduce((agg, cur) => agg + parseFloat(cur.amount), 0)}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ServicesList;