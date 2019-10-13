import React from 'react';
import { Header, Grid, Image } from 'semantic-ui-react';
import Router from 'next/router'

const styles = {
  Column: {
    // fontSize: '18px',
    // fontFamily: 'sofiapro'
    cursor: 'pointer'
  },
  SubHeader: {},
  Header: {
    marginTop: '7px'
  }
}

const Service =  (props) => {
  const toServices = () => {
    let url = '/serviceproviders?'
    let fields = {
      sortBy: props.name,
      searchFor: '',
      postcode: '',
      distance: '',
      priceRange: ''
    }
    Object.keys(fields).forEach((field, i) => i === 0 ? url += `${field}=${fields[field]}` : url += `&${field}=${fields[field]}`)
    Router.push(url)
  }
  return (
    <Grid.Column style={styles.Column} onClick={toServices}>
      <div style={{width: '100%', height: '200px', overflow: 'hidden', backgroundSize: 'cover', backgroundImage: `url(${props.img})`}}>
        {/* <Image className="has-full-width" src={props.img} /> */}
      </div>
      <Header style={styles.Header} as='h4'>
        {props.name}
      </Header>
    </Grid.Column>
  );
}

export default Service;