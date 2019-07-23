import React, {useEffect} from 'react';
import './less/servicesList.less';
import Display from './Display';

const ServicesList = (props) => {
  return (
    <>
    <Display if={props.role === 'provider'}>
      {props.services.message.services.map((service, index) => {
          return (
            <tr key={index}>
              <td className="fw600 h40 pb-15">
                {/* {
                  JSON.stringify(service)
                } */}
                <span>{service.serviceName}</span>
              </td>
              <td className="fw600 h40 pb-15 has-text-aligned-right">
                £{parseFloat(service.amount).toFixed(2)}
              </td>
            </tr>
          )
        })}
        <tr>
          <td className="fw600">Total</td>
          <td className="is-pink fw900 has-text-aligned-right">
            {/* £{props.services.reduce((agg, cur) => agg + parseFloat(cur.message.amount), 0)} */}
            £{(parseFloat(props.services.message.amount)/ 100).toFixed(2) }
          </td>
        </tr>
    </Display>
    <Display if={props.role === 'client'}>
      <table className={ "services " + props.className }>
        <tbody>
        {props.services.message.services.map((service, index) => {
            return (
              <tr key={index}>
                <td className="fw600 h40 pb-15">
                  {/* {
                    JSON.stringify(service)
                  } */}
                  <span>{service.serviceName}</span>
                </td>
                <td className="fw600 h40 pb-15 has-text-aligned-right">
                  £{parseFloat(service.amount).toFixed(2)}
                </td>
              </tr>
            )
          })}
          <tr>
            <td className="fw600">Total</td>
            <td className="is-pink fw900 has-text-aligned-right">
              {/* £{props.services.reduce((agg, cur) => agg + parseFloat(cur.message.amount), 0)} */}
              £{(parseFloat(props.services.message.amount)/ 100).toFixed(2) }
            </td>
          </tr>
        </tbody>
      </table>
    </Display>
    </>
  );
}

export default ServicesList;