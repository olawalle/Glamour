import React from 'react';
import { Header, Grid, Image } from 'semantic-ui-react';
import Router from 'next/router';

const styles = {
  Column: {
    // fontSize: '18px',
    // fontFamily: 'sofiapro'
  },
  SubHeader: {},
  Header: {
    marginTop: '7px'
  }
}

const goTo = (name) => {
  let params = {
    searchFor: '',
    postcode: '',
    when: '',
    sortBy: name
  }
  let url = '/serviceproviders?'
  Object.keys(params).forEach((field, i) => i === 0 ? url += `${field}=${params[field]}` : url += `&${field}=${params[field]}`)
  // console.log(url)
  Router.push(url)
}

const Service = (props) => {
  return (
    <Grid.Column style={styles.Column} onClick={() => goTo(props.name)} style={{cursor: 'pointer'}}>
      <Image className="has-full-width" src={props.img} />
      <Header style={styles.Header} as='h4'>
        {props.name}
      </Header>
    </Grid.Column>
  );
}

export default Service;