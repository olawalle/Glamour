import React, {useState, useEffect} from 'react';
import { Menu, Image, Button, Container, Divider } from 'semantic-ui-react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { getUserData } from '../../store'
import './less/navbar.less';
import Display from './Display';
import Router from "next/router"
import * as actions from '../../store/actions'

const styles = {
  Image: {
    height: '50px',
    cursor: 'pointer'
  },
  UserIconWrap: {
    background: '#fafafa',
    padding: '0.92857143em 2.4em'
  },
  UserIcon: {
    margin: '0 10px 0 0',
    // borderRadius: '50%',
  }
}


const Navbar = (props) => {

  const [burgerId, updateBurgerId] = useState('')
  const [inside, updateInside] = useState({wrap: 'hide', inner: 'none'})

  const [activeItem, setactiveItem] = useState('')

  const [onAccount, setOnAccount] = useState(false)

  const [clientLinks, updateClient] = useState([
    'Personal details',
    'Address book',
    // 'Payment methods and invoices',
    'Saved service providers'
  ])

  
  const [providerLinks, updateProvider] = useState([
    'Personal details',
    'Business details',
    'Manage subscriptions',
    'Manage payments',
    'Upload Lookbook',
  ])

  const toActiveLink = (link) => {
    props.saveActiveComponent(link)
    updateBurgerId('')
    updateInside({wrap: 'hide', inner: 'none'})
  }

  const toggleClass = () => {
    if (burgerId === '') {
      updateBurgerId('open')
      updateInside({wrap: 'display', inner: 'block'})
    } else {
      updateBurgerId('')
      updateInside({wrap: 'hide', inner: 'none'})
    }
  }

  const handleItemClick = () => {
    updateBurgerId('')
    updateInside({wrap: 'hide', inner: 'none'})
  }

  useEffect(() => {
    if (Router.router.route === "/account") setOnAccount(true)
  }, [])

  return (
    <span className="navbar">
    <Menu
      borderless
      className="mb-0"
    >
      <Container >
        <Menu.Item>
          <Link href="/">
            {
              props.from === 'banner' ? <Image className="logo" src='/static/images/logoWhite.svg' size='small' /> :
                <Image className="logo" src='/static/images/logoWhite.svg' size='small' />
            }
          </Link>
        </Menu.Item>

          <Menu.Menu position='right' className="mobile hidden">
            <Link href="/serviceproviders">
              <Menu.Item as='a'>Services</Menu.Item>
            </Link>
            <Link href="/aboutus">
              <Menu.Item  className="mobile hidden" position='right' as='a'>About us</Menu.Item>
            </Link>

            {/* links to be shown if user is not logged in */}
            <Display if={!props.userData.isLoggedIn}>
                <Link href="/signup/provider">
                  <Menu.Item className="mobile hidden" position='right' as='a'>Become a provider</Menu.Item>
                </Link>
                <Link href="/login">
                  <Menu.Item position='right' as='a'>Log in</Menu.Item>
                </Link>
                <Link href="/signup">
                  <Menu.Item className="mobile hidden" as='div'>
                  {
                    props.from === 'banner' ? <Button className="navbar-signup-btn_" size="huge">Sign up</Button> :
                                              <Button className="navbar-signup-btn" size="huge" secondary>Sign up</Button>
                  }
                  </Menu.Item>
                </Link>
            </Display>

            {/* links to be shown if a client is logged in */}
            <Display if={props.userData.isLoggedIn && props.userData.role === 'client'}>
              <Link href="/account">
                <Menu.Item className="mobile hidden cursor" as='div'>
                  <Image circular={true} style={styles.UserIcon} src={props.userData.pictureUrl} size='mini' /> { props.userData.fullname }
                </Menu.Item>
              </Link>
              
              {/* <Link href="/cart">
                <Menu.Item className="mobile hidden cursor" as='div'>
                  <Image style={styles.UserIcon} src='/static/images/basket.svg' size='mini' />
                </Menu.Item>
              </Link> */}

            </Display>
            {/* links to be shown if a provider logs in */}
            <Display if={props.userData.isLoggedIn && props.userData.role !== 'client'}>
            
              <Link href="/provider/home">
                <Menu.Item className="mobile hidden" as='div'>
                  <Image circular={true} style={styles.UserIcon} src={props.userData.pictureUrl} size='mini' /> { props.userData.fullname }
                </Menu.Item>
              </Link> 
                          
            </Display> 
            
          </Menu.Menu>

        <span className="mobile-links">
          <div id="nav-icon4" className={burgerId} onClick={() => toggleClass()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </span>
      </Container>
    </Menu>



    <div className={`mobile-nav ${inside.wrap}`}>
      <span className="mobile-links">
        <div id="nav-icon4" className={burgerId} onClick={() => toggleClass()}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </span>
      <div className={`inside ${inside.inner}`}>
        <Menu secondary vertical>
          <Link href="/serviceproviders">
            <Menu.Item
              name='Services'
              active={activeItem === 'Services'}
              onClick={() => handleItemClick()}
            />
          </Link>
          <Link href="/aboutus">
            <Menu.Item
              name='About us'
              active={activeItem === 'About us'}
              onClick={() => handleItemClick()}
            />
          </Link>

          {/* links to be shown if user is not logged in */}
          <Display if={!props.userData.isLoggedIn}>
            <Link href="/signup/provider">
              <Menu.Item
                name='Become a provider'
                active={activeItem === 'Become a provider'}
                onClick={() => handleItemClick()}
              />
            </Link>
            <Link href="/login">
              <Menu.Item position='right' as='a'>Log in</Menu.Item>
            </Link>
            <Menu.Item
              name='Sign up'
              active={activeItem === 'Sign up'}
              onClick={() => handleItemClick()}
            >
              <Link href="/signup">
                  <Button className="navbar-signup-btn" size="huge" secondary>Sign up</Button>
            </Link>
            </Menu.Item>
          </Display>
          
            {/* links to be shown if a client is logged in */}
            <Display if={props.userData.isLoggedIn && props.userData.role === 'client'}>
            <Link href="/notifications">
              <Menu.Item position='right' onClick={() => handleItemClick()} as='a'>Notifications</Menu.Item>
            </Link>
            <Link href="/messages">
              <Menu.Item position='right' onClick={() => handleItemClick()} as='a'>Messages</Menu.Item>
            </Link>
              <Link href="/account">
                <Menu.Item className="cursor name" as='div' onClick={() => handleItemClick()}>
                  <Image circular={true} style={styles.UserIcon} src={props.userData.pictureUrl} size='mini' /> { props.userData.fullname }
                </Menu.Item>
              </Link>
              
              <Link href="/bookings">
                <Menu.Item className="cursor" as='div' onClick={() => handleItemClick()}>
                  <Image src='/static/images/basket.svg' size='mini' />
                </Menu.Item>
              </Link>

            </Display>

            {/* links to be shown if a provider logs in */}
            <Display if={props.userData.isLoggedIn && props.userData.role !== 'client'}>
            
              <Link href="/provider/home">
                <Menu.Item className="" as='div' onClick={() => handleItemClick()}>
                  <Image circular={true} style={styles.UserIcon} src={props.userData.pictureUrl} size='mini' /> { props.userData.fullname }
                </Menu.Item>
              </Link> 
                          
            </Display> 

            <hr className="hr"/>
            
            <Display if={Router.router && Router.router.route === "/account" && props.userData.role === 'provider'}>
              { providerLinks.map(link => {
                return <Menu.Item key={link} className="" as='div' onClick={() => toActiveLink(link)} className="acctLinks">
                        {link}
                      </Menu.Item>
                })
              }
            </Display>
            
            <Display if={Router.router && Router.router.route === "/account" && props.userData.role === 'client'}>
              { clientLinks.map(link => {
                return <Menu.Item key={link} className="" as='div' onClick={() => toActiveLink(link)} className="acctLinks">
                        {link}
                      </Menu.Item>
                })
              }
            </Display>
  
        </Menu>
      </div>
    </div>
    </span>
  );
}

const mapStateToProps = (state) => ({
  userData: getUserData(state)
})

export default connect(mapStateToProps, actions)(Navbar);