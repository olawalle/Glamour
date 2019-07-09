import React, {useEffect, useState} from 'react';
import Display from './Display';
import './less/serviceProviderMedia.less';
import { connect } from 'react-redux';

const ServiceProviderMedia = (props) => {

  const [provider, setprovider] = useState({
    pictureUrl: '',
    fullname: '',
  })

  useEffect(() => {
    let provider = props.serviceProviders.find(prv => prv._id === props.providerId)
    setprovider( provider )
  }, [])

  return (
    <div className={ 'is-flex ' + props.className }>
      <img className="h40 is-round mr-15" src={provider.pictureUrl}></img>
      <div>
        <h4 className="has-font-freightbigpro fw900">{provider.fullname}</h4>
        <span className="time-container">
          <img className="pr-10" src="/static/images/clock.svg" />
          {/* <span className="time ">{props.providerInfo.formattedTime}</span> */}
        </span>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => ({
  serviceProviders: state.serviceProviders.allProviders,
})

export default connect(mapStateToProps, null)(ServiceProviderMedia);