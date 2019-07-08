import React, {Component} from 'react';
import withMasterLayout from '../pages/layouts/withMasterLayout';
import { connect } from 'react-redux';
import { Container, Grid, Button } from 'semantic-ui-react';
import { getProviders, getUserData } from '../store'
import Banner from '../components/shared/Banner'
import Footer from '../components/shared/Footer'
import Stars from '../components/shared/stars'
import Service from '../components/serviceDetails/service'
import LookBook from '../components/serviceDetails/lookBook'
import Reviews from '../components/serviceDetails/reviews'
import BookService from '../components/serviceDetails/bookService'
import Router from 'next/router';
import * as actions from '../store/actions'
import './less/serviceDetails.less'
import { getAllProviders } from '../services/generatData.ts'
import { getProviderDetails, getProviderReviews, getProviderServices } from '../services/providerServices.ts'

class ServiceDetails extends Component {
    static async getInitialProps ({ reduxStore, req }) {
        this.test = reduxStore
      // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
  
      return {
      }
    }

    state = {
        selectedProvider: {
            isActive: 0,
            isOnline: 0,
            schedules: [],
            _id: "",
            services: [],
            fullname: "",
            email: "",
            password: "",
            phone: "",
            meta: "",
            role: "",
            pictureUrl: "",
            postcode: "",
            mileRadius: "",
            description: "",
            createdAt: "",
            __v: 0,
        },
        reviews: [],
        servicesRendered: []
    }

    componentDidMount() {
        let id = Router.router.query.provider
        if (this.props.serviceProviders.length > 0) {
                this.setState({selectedProvider: this.props.serviceProviders.find(provider => provider._id === id)}, () => {
                // console.log(this.state.selectedProvider)
            })
        }
    }

    componentDidMount() {
        //API call to get all available providers
        getAllProviders()
        .then(res => {
          this.props.saveProviders(res.data.users)
          this.setState({
            selectedProvider: res.data.users.find(provider => provider._id === Router.router.query.provider)
          })
        })
        .catch(err => {
          console.log(err)
        })

        getProviderReviews(Router.router.query.provider)
        .then(res => {
            this.setState({reviews: res.data.reviews})
        })
        .catch(err => {
          console.log(err)
        })
        
        getProviderServices(Router.router.query.provider)
        .then(res => {
          let services = res.data.data.services
          this.setState({servicesRendered: services})
        //   props.saveProviderServices(services)
        })
        .catch(err => {
          console.log({...err})
        })
    }
    showInnerNav = () => {
        if (this.props.isLoggedIn) {
            return <InnerNav userRole={props.userData.role} />
        }
    }

    
    renderServiceComponent() {
        if (this.state.servicesRendered.length > 0) return this.state.servicesRendered.map((service, i) => <Service isEmpty={false} key={`service${i}`} id={service._id} userServices={service} selected={false} />)
        else return <Service isEmpty={true} />
    }

    render () {
        return (
            <>
            <Banner banner={this.state.selectedProvider.banner ? this.state.selectedProvider.banner : '/static/images/EmptyBanner.png'}  text={''} />
            <Container>
                <div className="serviceDetails">
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={10}>
                                <div className="userDesc">
                                    <img src={this.state.selectedProvider.pictureUrl } className={this.state.selectedProvider.instant ? "userPhoto_" : "userPhoto"} alt=""/>
                                    <div className="buttons">
                                        <Button size="huge" className="mainBtn secondaryBtn"> 
                                            <img src="../static/icons/heart.svg" alt=""/> <span>Save</span>
                                        </Button>
                                        <Button size="huge"  className="mainBtn" secondary>
                                            <img src="../static/icons/heart.svg" alt=""/>Send Message
                                        </Button>
                                    </div>
                                    <p className="userName">
                                        {this.state.selectedProvider.fullname }
                                    </p>
                                    <p className="userJob">
                                        {this.state.selectedProvider.service}
                                    </p>
                                    <p className="userDetails">
                                        {this.state.selectedProvider.description}
                                    </p>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={10}>
                                    <div className="serviceWrap lightShadow">
                                        <div className="serviceWrapTitle">
                                            Services
                                        </div>
                                        <div className="servicesChildWrap">
                                            {
                                                this.renderServiceComponent()
                                            }
                                        </div>
                                    </div>
                                </Grid.Column>
                                
                                <Grid.Column width={6} className="forBig">
                                    <div className="lightShadow bookServiceComponent">
                                        <BookService providerDetails={this.state.selectedProvider} />
                                    </div>
                                </Grid.Column>  
                                <Grid.Column width={10}>
                                    <div className="lookBookWrap lightShadow">
                                        <Grid columns={2}>
                                            <Grid.Row>
                                                <Grid.Column>
                                                    <span className="lookBookWrapTitle">
                                                        Look book
                                                    </span>
                                                </Grid.Column>
                                                <Grid.Column className="lookStars">
                                                    <span className="arrows">
                                                        <img src="../static/icons/right-arrow.svg" className="left dim" alt=""/>
                                                        <img src="../static/icons/right-arrow.svg" className="right" alt=""/>
                                                    </span>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                        
                                        <LookBook />
                                    </div>
                                    <div className="reviewsComponentWrap lightShadow">
                                        <div className="reviewsWrapTitle">
                                        <Grid columns={2}>
                                            <Grid.Row>
                                                <Grid.Column mobile={6} tablet={8} computer={8} largeScreen={8}>
                                                    <span className="serviceWrapTitle">
                                                        Reviews
                                                    </span>
                                                </Grid.Column>
                                                <Grid.Column  mobile={10} tablet={8} computer={8} largeScreen={8} className="lookStars">
                                                    <span>
                                                        {
                                                            <Stars stars={this.state.selectedProvider.stars ? this.state.selectedProvider.stars : 0} />
                                                        }      
                                                        ({this.state.reviews.length})                                   
                                                    </span>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                        </div>
                                        <div className="reviewsComponentWrapChild">
                                            <Reviews reviews={this.state.reviews} />
                                        </div>
                                    </div>
                            </Grid.Column>                       
                        </Grid.Row>
                    </Grid>
                </div>
            </Container>
            <Footer />
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    serviceProviders: getProviders(state),
    userData: getUserData(state),
    isLoggedIn: state.user.isLoggedIn
})


export default connect(mapStateToProps, actions)(withMasterLayout(ServiceDetails));
