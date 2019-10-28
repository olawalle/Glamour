import React, {useState, useEffect, useRef} from 'react';
import withMasterLayout from '../../pages/layouts/withMasterLayout';
import { connect } from 'react-redux';
import { Container, Grid, Button, Modal } from 'semantic-ui-react';
import { getProviders, getUserData } from '../../store'
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
import { getCurrentUser, updateProvider } from '../../services/auth.ts'
import { getProviderServices, getProviderBookings } from '../../services/providerServices.ts'
import { uploadImage, uploadBanner , getAllServices} from '../../services/generatData.ts'
import Loader from '../../components/shared/Loader'
import { Snackbar } from '../../components/shared/SnackBar';


const ProviderHome = (props) => {


    const showInnerNav = () => {
        // if (this.props.isLoggedIn) {
        return <InnerNav />
        // }
    }

    useEffect(() => {

        let userData = window.sessionStorage.getItem('glamourToken')
        if (userData) {
            // props.saveUserData(JSON.parse(userData))
            // updateBannerSrc({image: props.user.bannerUrl})
            // updateUserPhoto(props.user.pictureUrl)
            getUserDetails()            
            
            getProviderBookings()
            .then(providerBookings => {
              props.saveUserBookings(providerBookings.data.data)
            })
            .catch(err => {
              console.log({...err})
            })
        }

        getAllServices()
        .then(res => {
            props.saveServices(res.data.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    const [bannerSrc, updateBannerSrc] = useState({image: props.userData.bannerUrl})
    const [userPhoto, updateUserPhoto] = useState(props.userData.pictureUrl)
    const [showNav, updateShowNav] = useState(true)
    const [bookingStatus, updateBookingStatus] = useState([])


    const styles = {
        UserPhoto: {
            backgroundImage: `url(${userPhoto})`,
            border: '3px solid #fff'
        },
        UserPhoto_: {
            backgroundImage: `url(${userPhoto})`,
            border: '3px solid #E84671'
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
                updateUserPhoto(reader.result)
                console.log('photo')
            }
        };
        reader.onerror = function (error) {
        console.log('Error: ', error);
        };
    }
    

    const getUserbannerImageString = (imageString) => {
        // updateBannerSrc({image: imageString})
        console.log('banner')
    }

    const getUserphotoImageString = (imageString) => {
        // updateUserPhoto(imageString)
        console.log('userphoto')
    }

    
    const getBannerFile = (imageFile) => {
        console.log('imageFile', imageFile)
        let formData = new FormData()
        formData.append('picture', imageFile)
        uploadBanner(formData, props.user.id)
        .then(res => {
            // console.log(res)
            getUserDetails()
        })
        .catch(err => {
            console.log(err)
        })
    }

    const getImageFile = (imageFile) => {
        let formData = new FormData()
        formData.append('picture', imageFile)
        setloading(true)
        uploadImage(formData, props.user.id)
        .then(res => {
            setloading(false)
            getUserDetails()
        })
        .catch(err => {
            setloading(false)
            console.log({...err})
            setSnackType('error')
            setMessage(err.response.data.message)
            _showSnackbarHandler()
        })
    }

    const _showSnackbarHandler = () => {
        snackbarRef.current.openSnackBar();
    }

    const getImageFile_ = (imageFile) => {
        let formData = new FormData()
        formData.append('picture', imageFile)
        setloading(true)
        uploadBanner(formData, props.user.id)
        .then(res => {
            setloading(false)
            getUserDetails()
        })
        .catch(err => {
            setloading(false)
            console.log({...err})
            setSnackType('error')
            setMessage(err.response.data.message)
            _showSnackbarHandler()
        })
    }

    const getUserDetails = () => {
        getCurrentUser()
        .then(response => {
            let payload = {
            ...response.data.me,
            isLoggedIn: true
            }
            updateBannerSrc({image: response.data.me.bannerUrl})
            updateUserPhoto(response.data.me.pictureUrl)

            response.data.me.instant ? updateBookingStatus([
                {
                    status: 'Advanced bookings only', selected: ''
                },
                {
                    status: 'I\'m available immediately', selected: 'activeStatus'
                }
            ]) : updateBookingStatus([
                {
                    status: 'Advanced bookings only', selected: 'activeStatus'
                },
                {
                    status: 'I\'m available immediately', selected: ''
                }
            ])

            props.saveUserData(payload)

            getProviderServices(response.data.me.id)
            .then(res => {
                let services = res.data.data.services
                props.saveProviderServices(services)
            })
            .catch(err => {
                console.log({...err})
            })
        })
        .catch(err => {
            console.log({...err})
        })
    }
    
    const renderServiceComponent = (serviceProvider) => {
        return serviceProvider.servicesRendered.map((service, i) => <Service key={`service${i}`} id={serviceProvider.id} userServices={service} selected={false} />)
    }

    const [modal, updateModal] = useState({open: false, edit: false})
    const [selectedService, setSelectedService] = useState({})
    const [loading, setloading] = useState(false)

    const [snackType, setSnackType] = useState('')
    const [message, setMessage] = useState('')
    const snackbarRef = useRef(null);
    
    const show = () => {
        updateModal({ open: true, edit: false })
        updateShowNav(false)
    }

    
    const edit = (i) => {
        console.log(i)
        setSelectedService(props.providersServices.find(service => service._id === i))
        updateModal({ open: false, edit: true })
        updateShowNav(false)
    }

    const close = () => {
        console.log('closing')
        updateModal({ open: false, edit: false })
        updateShowNav(true)
    }

    const selectStatus = (i) => {
        let user = props.user
        setloading(true)
        if ( i === 0 ) {
        updateProvider({...user, instant: false})
        .then(res => {
            setloading(false)
            getUserDetails()
            setSnackType('success')
            setMessage('Booking status sucessfully changed')
            _showSnackbarHandler()
        })
        .catch(err => {
            console.log({...err})
            setloading(false)
            setSnackType('error')
            setMessage('An error occured, Please try again')
            _showSnackbarHandler()
        })
      } else {
        updateProvider({...user, instant: true})
        .then(res => {
            getUserDetails()
            setloading(false)
            setSnackType('success')
            setMessage('Booking status sucessfully changed')
            _showSnackbarHandler()
        })
        .catch(err => {
            setloading(false)
            console.log({...err})
            setSnackType('error')
            setMessage('An error occured, Please try again')
            _showSnackbarHandler()
        })
      }
    }

    return (
        <>
        <Display if={showNav}>
            <InnerNav userRole={props.user.role} />
        </Display>
        {loading && <Loader />}
        <Snackbar ref = {snackbarRef} 
            type={snackType} 
            position={'top'} 
            showClose={true} 
            duration={5000} 
            message={message} />
        <div className="outerBannerWrap">
            <CustomImageUploader getImageString={getUserbannerImageString} getImageFile={getImageFile_}>
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
                                    <CustomImageUploader getImageFile={getImageFile}>
                                        <div style={{height: '100%', position: 'relative', zIndex: 20}}>
                                            <div className="imgWrap" style={props.user.instant ? styles.UserPhoto_ : styles.UserPhoto}>
                                                <img src='/static/icons/camera.svg' className="camera" alt=""/>
                                            </div>
                                        </div>
                                    </CustomImageUploader>
                                <p className="userName">
                                    {props.user.fullname}
                                </p>
                                <p className="userJob">
                                    {props.user.service}
                                </p>
                                <p className="userDetails">
                                    {props.user.description}
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
                                <Display if={props.providersServices.length === 0}>
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
                                <Display if={props.providersServices.length > 0}>
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
                                            {
                                                props.providersServices.map((service, i) => {
                                                    return <HomeService service={service} key={'service'+i} openEdit={() => edit(service._id)} />
                                                })
                                            }
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
                                        <Display if={props.bookings.filter(booking => booking.message.status !== 'completed').length === 0}>
                                            <div className="emptyState">
                                                <img src="/static/icons/empty-bookings.svg" alt=""/>
                                                <p>
                                                No upcoming bookings
                                                </p>
                                            </div>
                                        </Display>
                                        <Display if={props.bookings.filter(booking => booking.message.status !== 'completed').length > 0}>
                                            <UpcomingBookings user={props.user} bookings={props.bookings} />
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
                <AddService onClose={() => close()} />
            </Modal.Content>
        </Modal>
        
        <Modal size='tiny' open={modal.edit} onClose={() => close()}>
            <Modal.Content>
                <AddService selectedService={selectedService} onClose={() => close()} />
            </Modal.Content>
        </Modal>
        </>
    );
}

const mapStateToProps = (state) => ({
    serviceProviders: getProviders(state),
    providersServices: state.providerServices,
    userData: getUserData(state),
    user: state.user,
    bookings: state.bookings.bookedItems,
    isLoggedIn: state.user.isLoggedIn
})


export default connect(mapStateToProps, actions)(withMasterLayout(ProviderHome));
