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
      { props.clientDetails && 
        // <img className="h40 is-round mr-15" src={props.clientDetails.from.userPhoto}></img> 
        <div style={{
          width: '50px', 
          height: '50px', 
          borderRadius: '50%', 
          overflow: 'hidden', 
          backgroundSize: 'cover', 
          margin: '0 10px 0 0',
          backgroundImage: `url(${props.clientDetails.from.userPhoto})`}}>
        </div>
      }
      <div>
        { props.clientDetails && <h4 className="has-font-freightbigpro fw900">{props.clientDetails.from.name}</h4> }
        <span className="time-container">
          <img className="pr-10" src="/static/images/clock.svg" />
          { props.clientDetails && <span className="time ">{dayjs(props.clientDetails.message.time).format('DD MMM YYYY')}</span> }
        </span>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => ({
  serviceProviders: state.serviceProviders.allProviders,
})

export default connect(mapStateToProps, null)(ServiceProviderMedia);