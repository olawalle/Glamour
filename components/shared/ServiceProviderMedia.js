import React, {useEffect, useState} from 'react';
import Display from './Display';
import './less/serviceProviderMedia.less';
import { connect } from 'react-redux';
import dayjs from 'dayjs';

const ServiceProviderMedia = (props) => {
  const [provider, setprovider] = useState({
    pictureUrl: '',
    fullname: '',
  })
  return (
    <div className={ 'is-flex ' + props.className }>
      <img className="h40 is-round mr-15" src={props.clientDetails.from.userPhoto}></img>
      <div>
        <h4 className="has-font-freightbigpro fw900">{props.clientDetails.from.name}</h4>
        <span className="time-container">
          <img className="pr-10" src="/static/images/clock.svg" />
          <span className="time ">{dayjs(props.clientDetails.message.time).format('DD MMM YYYY')}</span>
        </span>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => ({
  serviceProviders: state.serviceProviders.allProviders,
})

export default connect(mapStateToProps, null)(ServiceProviderMedia);