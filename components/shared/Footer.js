import React, { useEffect, useState } from 'react';
import { Container, Segment, Header, Divider, Grid, Image, List, Button } from 'semantic-ui-react';
import Link from 'next/link';
import './less/footer.less';
import Router from 'next/router'
import { connect } from 'react-redux';
import { chunk } from 'lodash';
import { getBeautyServices } from '../../store';

const Footer = (props) => {
  useEffect(() => {
    let cookieAcceptance = window.localStorage.getItem("cookieAcceptance")
    cookieAcceptance ? setCookie(false) : setCookie(true)

    Router.router.route === '/' ? showHow(true) : showHow(false)
  }, [])

  const [cookieSet, setCookie] = useState(false)
  const [how, showHow] = useState(false)

  const cookieAccept = () => {
    window.localStorage.setItem('cookieAcceptance', true)
    setCookie(false)
  }

  const jumpUp = () => {
    props.fromHow()
  }

  const toServices = (val) => {
    let url = '/serviceproviders?'
    let fields = {
      sortBy: val,
      searchFor: '',
      postcode: '',
      distance: '',
      priceRange: '',
      when: '',
    }
    Object.keys(fields).forEach((field, i) =>
      i === 0
        ? (url += `${field}=${fields[field]}`)
        : (url += `&${field}=${fields[field]}`),
    )
    Router.push(url)
  }

  return (
    <Segment className="footer">
      <Container>
        <Grid stackable columns={4}>
          <Grid.Row>
            <Grid.Column width="4" >
              <Image src='/static/images/logowhite.svg' size='small' />
            </Grid.Column>
            <Grid.Column width="4">
              <List link>
                <List.Header>Company</List.Header>
                <Link href="/aboutus"><List.Item as='a'>About us</List.Item></Link>
                {how && <List.Item as='' style={{ cursor: 'pointer' }} onClick={jumpUp}>How it works</List.Item>}
                {/* <Link href="/termsandconditions"><List.Item as='a'>Terms and conditions</List.Item></Link> */}
                <Link href="/privacypolicy"><List.Item as='a'>Privacy policy</List.Item></Link>
              </List>
            </Grid.Column>
            <Grid.Column width="4" >
              <List link>
                <List.Header>Services</List.Header>
                {
                  props.beautyServices.map(service => <List.Item as='a' onClick={() => toServices(service.serviceName)} id={service.serviceName}>{service.serviceName}</List.Item>)}
              </List>
            </Grid.Column>
            <Grid.Column width="4" >
              <List link>
                <List.Header>Contact us</List.Header>
                <List.Item as='a'>
                  <a href="mailto:support@glamourondemand.com ">
                    support@glamourondemand.com
                  </a>
                </List.Item>
                <List.Item>020 3570 3466</List.Item>
              </List>
              <List className="social-links" horizontal relaxed>
                <List.Item>
                  <a href="https://www.instagram.com/glamourondemandltd/" style={{ color: 'white' }}><Image size="tiny" src="/static/icons/instagram.svg" /></a>
                </List.Item>
              </List> <br />
              <List className="" horizontal relaxed>
                <List.Item >
                  <img src="/static/images/stripe.png" style={{ width: '250px', marginTop: '20px' }} />
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider />
        <Header className="copyright" textAlign="center" as="h3">
          <Image src="/static/icons/copyright.svg" />
          <span>Glamour on Demand 2019</span>
        </Header>
      </Container>
      {cookieSet &&
        <Grid>
          <Grid.Row className="cookie">
            <Grid.Column largeScreen={14} mobile={16}>
              This website uses cookies <br /> <br />
              We use cookies to personalise and provide certain functionalities across the Urban website. They also help us analyse how people use our site and help us improve it.
              By continuing to use this site you are agreeing to use our cookies as defined in our

              <Link href="/privacypolicy">
                <a style={{ marginLeft: '5px' }}>cookie policy</a>
              </Link>
            </Grid.Column>
            <Grid.Column largeScreen={2} mobile={16}>
              <Button color="green" onClick={cookieAccept} style={{ float: 'right' }}>Got it</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      }
    </Segment>
  );
}


const mapStateToProps = (state) => {
  return {
    beautyServices: getBeautyServices(state)
  }
}

export default connect(mapStateToProps, null)(Footer)