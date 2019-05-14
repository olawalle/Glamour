import React, {useState} from 'react';
import withMasterLayout from '../../pages/layouts/withMasterLayout';
import { connect } from 'react-redux';
import { Container, Grid, Button, Modal } from 'semantic-ui-react';
import { getProviders } from '../../store'
import Banner from '../../components/shared/Banner'
import Footer from '../../components/shared/Footer'
import Service from '../../components/serviceDetails/service'
import InnerNav from '../../components/shared/InnerNav'
import * as actions from '../../store/actions'
import './less/home.less'
import AddService from './home/addService';
import HomeService from './home/homeService';
import UpcomingBookings from './home/upcomingBookings';
import CustomImageUploader from '../../components/shared/CustomImageUploader';
import Display from '../../components/shared/Display';


const ProviderHome = () => {


    const showInnerNav = () => {
        // if (this.props.isLoggedIn) {
        return <InnerNav />
        // }
    }

    const [bannerSrc, updateBannerSrc] = useState({image: '/static/images/EmptyBanner.png'})
    const [userPhoto, updateUserPhoto] = useState({image: ''})
    const [showNav, updateShowNav] = useState(true)
    const [servicesEmpty, updateServiceEmpty] = useState(false)
    const [bookingsEmpty, updateBookingsEmpty] = useState(false)
    const [bookingStatus, updateBookingStatus] = useState([
        {
            status: 'Advanced bookings only', selected: ''
        },
        {
            status: 'I\'m available immediately', selected: ''
        }
    ])


    const styles = {
        UserPhoto: {
            backgroundImage: `url(${userPhoto.image})`
        },
        imgWrap: {
            width: '130px',
            height: '130px',      
            'border-radius':' 50%',      
            border: '3px solid #fff',
            'background-size': 'cover',
            'background-position-y': 'center',
            'background-color': '#637381',
            overflow: 'hidden',
            display: 'flex',
            'justify-content': 'center',
            cursor: 'pointer'
        },
        img: {
            width: '30px'
        },
        userPhoto: {
            width: '100%'
        },
        camera: {
            'margin-left': '138px',
            width: '30%',
            opacity: '0.4'
        },
        test: {
            width: '200px',
            height: '200px',
            backgroundColor: 'red'
        }
    }

    const dropdown = (e, n) => {
        let file = e.target.files[0]
        getBase64(file, n)
    }

    function getBase64(file, n) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            if (n === 1) {
                updateBannerSrc({image: reader.result})
                console.log('banner')
            } else {
                updateUserPhoto({image: reader.result})
                console.log('photo')
            }
        };
        reader.onerror = function (error) {
        console.log('Error: ', error);
        };
    }
    

    const getImageString = (imageString) => {
        updateBannerSrc({image: imageString})
        console.log('banner')
    }
    const getImageString_ = (imageString) => {
        updateUserPhoto({image: imageString})
        console.log('userphoto')
    }

    const getImageFile = (imageFile) => {
        console.log(imageFile)
    }
    
    const renderServiceComponent = (serviceProvider) => {
        return serviceProvider.servicesRendered.map((service, i) => <Service key={`service${i}`} id={serviceProvider.id} userServices={service} selected={false} />)
    }

    const [modal, updateModal] = useState({open: false})
    
    const show = () => {
        updateModal({ open: true })
        updateShowNav(false)
    }

    const close = () => {
        updateModal({ open: false })
        updateShowNav(true)
    }

    const selectStatus = (i) => {
        console.log(i)
        if ( i === 0 ) {
            updateBookingStatus([
            
            {
                status: 'Advanced bookings only', selected: 'activeStatus'
            },
            {
                status: 'I\'m available immediately', selected: ''
            }
        ])
      } else {
        return updateBookingStatus([
            {
                status: 'Advanced bookings only', selected: ''
            },
            {
                status: 'I\'m available immediately', selected: 'activeStatus'
            }
        ])
      }
    }

    return (
        <>
        <Display if={showNav}>
            <InnerNav />
        </Display>
        <div className="outerBannerWrap">
            <CustomImageUploader getImageString={getImageString} getImageFile={getImageFile}>
                <Banner banner={bannerSrc.image}  text={''} />  
                <img src='/static/icons/camera.svg' className="bannerChange" alt=""/>
            </CustomImageUploader>          
        </div>
        <Container>
            <div className="providerHome">
                <Grid stackable>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <div className="userDesc">
                                    <CustomImageUploader getImageString={getImageString_} getImageFile={getImageFile}>
                                        <div className="imgWrap" style={styles.UserPhoto}>
                                            <img src='/static/icons/camera.svg' className="camera" alt=""/>
                                        </div>
                                    </CustomImageUploader>
                                <p className="userName">
                                    Mary Jane
                                </p>
                                <p className="userJob">
                                    Makeup, Massage
                                </p>
                                <p className="userDetails">
                                    Hey, you know how I'm, like, always trying to save the 
                                    planet? Here's my chance. Life finds a way. Do you have 
                                    any idea how long it takes those cups to decompose.
                                </p>
                            </div>
                        </Grid.Column>
                            
                            <Grid.Column width={8}>
                                <div className="availability">
                                    <p>
                                        <b>Your booking status</b>
                                    </p>
                                    {
                                        bookingStatus.map((service, i) => {
                                            return  <span key={`status${i}`} onClick={() => selectStatus(i)} className={`${service.selected} status`}>
                                                        {service.status}
                                                    </span>
                                        })
                                    }
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Display if={servicesEmpty}>
                                    <div className="serviceWrap lightShadow">
                                        <div className="serviceWrapTitle">
                                          Your Services
                                        </div>
                                        <div className="servicesChildWrap">
                                            <div className="emptyState">
                                                <img src="/static/icons/empty_service.svg" alt=""/>
                                                <p>
                                                You have not added any services yet
                                                </p>
                                                
                                                <Button size="huge" onClick={() => show()} className="mainBtn"> 
                                                    Add service
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Display>
                                <Display if={!servicesEmpty}>
                                    <div className="serviceWrap lightShadow">
                                        <div className="serviceWrapTitle">
                                        <span>
                                            Your services
                                        </span>
                                        <span className="right">
                                            <Button size="huge" onClick={() => show()} className="mainBtn right"> 
                                                Add service
                                            </Button>
                                        </span>
                                        </div>
                                        <div className="servicesChildWrap">
                                            <HomeService />
                                            <HomeService />
                                            <HomeService />
                                            <HomeService />
                                            <HomeService />
                                            <HomeService />
                                            <HomeService />
                                            <HomeService />
                                        </div>
                                    </div>
                                </Display>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <div className="serviceWrap lightShadow">
                                    <div className="serviceWrapTitle">
                                        Upcoming booking
                                    </div>
                                    <div className="servicesChildWrap">
                                        <Display if={bookingsEmpty}>
                                            <div className="emptyState">
                                                <img src="/static/icons/empty-bookings.svg" alt=""/>
                                                <p>
                                                No upcoming bookings
                                                </p>
                                            </div>
                                        </Display>
                                        <Display if={!bookingsEmpty}>
                                            <UpcomingBookings />
                                            <UpcomingBookings />
                                            <UpcomingBookings />
                                            <UpcomingBookings />
                                            <UpcomingBookings />
                                            <UpcomingBookings />
                                            <UpcomingBookings />
                                        </Display>
                                    </div>
                                </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </Container>
        <Footer />


        <Modal size='tiny' open={modal.open} onClose={() => close()}>
            <Modal.Content>
                <AddService />
            </Modal.Content>
        </Modal>
        </>
    );
}

const mapStateToProps = (state) => ({
    serviceProviders: getProviders(state),
    isLoggedIn: state.auth.login.isLoggedIn
})


export default connect(mapStateToProps, actions)(withMasterLayout(ProviderHome));
