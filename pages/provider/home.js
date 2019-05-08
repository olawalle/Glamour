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


const ProviderHome = () => {


    const showInnerNav = () => {
        // if (this.props.isLoggedIn) {
        return <InnerNav />
        // }
    }

    const [bannerSrc, updateBannerSrc] = useState({image: '/static/images/EmptyBanner.png'})
    const [userPhoto, updateUserPhoto] = useState({image: ''})
    const styles = {
        UserPhoto: {
            backgroundImage: `url(${userPhoto.image})`
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

    
    const renderServiceComponent = (serviceProvider) => {
        return serviceProvider.servicesRendered.map((service, i) => <Service key={`service${i}`} id={serviceProvider.id} userServices={service} selected={false} />)
    }

    const [modal, updateModal] = useState({open: false})
    
    const show = () => updateModal({ open: true })
    const close = () => updateModal({ open: false })

    return (
        <>
        <InnerNav />
        <div className="outerBannerWrap">
            <Banner banner={bannerSrc.image}  text={''} />            
            <img src='/static/icons/camera.svg' className="bannerChange" alt=""/>
            <input type="file" className="bannerInput" title="Click to upload image" onDrop={() => dropdown(event, 1)} onChange={() => dropdown(event, 1)} id="test" multiple />
        </div>
        <Container>
            <div className="providerHome">
                <Grid stackable>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <div className="userDesc">
                                <div className="imgWrap" style={styles.UserPhoto}>
                                    <img src='/static/icons/camera.svg' className="userPhoto camera" alt=""/>
                                    <input type="file" className="userphotoInput" title="Click to upload image" onDrop={() => dropdown(event, 2)} onChange={() => dropdown(event, 2)} id="test" multiple />
                                </div>
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
                                    <span className="status activeStaus">
                                    Advanced bookings only
                                    </span>
                                    <span className="status">
                                    I'm available immediately
                                    </span>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                {/* <div className="serviceWrap lightShadow">
                                    <div className="serviceWrapTitle">
                                        Services
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
                                </div> */}
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
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <div className="serviceWrap lightShadow">
                                    <div className="serviceWrapTitle">
                                        Upcoming booking
                                    </div>
                                    <div className="servicesChildWrap">
                                        {/* <div className="emptyState">
                                            <img src="/static/icons/empty-bookings.svg" alt=""/>
                                            <p>
                                            No upcoming bookings
                                            </p>
                                        </div> */}
                                        <UpcomingBookings />
                                        <UpcomingBookings />
                                        <UpcomingBookings />
                                        <UpcomingBookings />
                                        <UpcomingBookings />
                                        <UpcomingBookings />
                                        <UpcomingBookings />
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
