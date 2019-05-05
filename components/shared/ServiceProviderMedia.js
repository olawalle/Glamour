import React from 'react';
import Display from './Display';
import './less/serviceProviderMedia.less';

const ServiceProviderMedia = (props) => {
  return (
    <div className={ 'is-flex ' + props.className }>
       <Display if={props.showAvatar}>
         <img className="h40 is-round mr-15" src={props.providerInfo.avatar}></img>
       </Display>
      <div>
        <h4 className="has-font-freightbigpro fw900">{props.providerInfo.name}</h4>
        <span className="time-container">
          <img className="pr-10" src="/static/images/clock.svg" />
          <span className="time ">{props.providerInfo.formattedTime}</span>
        </span>
      </div>
    </div>
  );
}

export default ServiceProviderMedia;