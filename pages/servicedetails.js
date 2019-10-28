import React, { Component } from 'react';
import withMasterLayout from '../pages/layouts/withMasterLayout';
import { connect } from 'react-redux';
import { Container, Grid, Button, Loader } from 'semantic-ui-react';
import { getProviders, getUserData } from '../store'
import Banner from '../components/shared/Banner'
import Footer from '../components/shared/Footer'
import Stars from '../components/shared/stars'
import Service from '../components/serviceDetails/service'
import LookBook_ from '../components/serviceDetails/lookBook'
import Reviews from '../components/serviceDetails/reviews'
import BookService from '../components/serviceDetails/bookService'
import Router from 'next/router';
import * as actions from '../store/actions'
import './less/serviceDetails.less'
import { getAllProviders } from '../services/generatData.ts'
import { getProviderSchedule, getLookbook, getProviderReviews, getProviderPublicServices } from '../services/providerServices.ts'
import { saveProvider, getSavedProviders, deleteSavedProvider, createConversation } from '../services/auth.ts'
import Display from '../components/shared/Display';

class ServiceDetails extends Component {
    static async getInitialProps({ reduxStore, req }) {
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
        present: false,
        lookbook: [],
        reviews: [],
        servicesRendered: [],
        saving: false,
        bookedTimes: []
    }


    componentDidMount() {

        let userData = window.sessionStorage.getItem('glamourToken')

        //API call to get all available providers
        getAllProviders()
            .then(res => {
                this.props.saveProviders(res.data.users)
                this.setState({
                    selectedProvider: res.data.users.find(provider => provider._id === Router.router.query.provider)
                }, () => {
                    this.props.selectProvider(this.state.selectedProvider)
                })

                if (userData) {
                    getSavedProviders()
                        .then(prv => {
                            this.props.saveFavedProviders(prv.data.providers)
                            let present = this.props.savedProviders.find(provider => provider.providerId === Router.router.query.provider)
                            if (present) {
                                this.setState({ present: true })
                            }
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
            })
            .catch(err => {
                console.log(err)
            })

        getProviderSchedule(Router.router.query.provider)
            .then(res => {
                // console.log(res)
                this.setState({
                    bookedTimes: res.data.data
                })
            })
            .catch(err => {
                console.log(err)
            })

        getProviderReviews(Router.router.query.provider)
            .then(res => {
                res.data.data ? this.setState({ reviews: res.data.data }) : null
            })
            .catch(err => {
                console.log(err)
            })

        getProviderPublicServices(Router.router.query.provider)
            .then(res => {
                let services = res.data.data.services
                this.setState({ servicesRendered: services })
                //   props.saveProviderServices(services)
            })
            .catch(err => {
                console.log({ ...err })
            })

        getLookbook(Router.router.query.provider)
            .then(res => {
                this.setState({ lookbook: res.data.looks })
            })
            .catch(err => {
                console.log(err)
            })

        let id = Router.router.query.provider
        if (this.props.serviceProviders.length > 0) {
            this.setState({ selectedProvider: this.props.serviceProviders.find(provider => provider._id === id) }, () => {
                // console.log(this.state.selectedProvider)
            })
        }
    }

    favProvider = () => {
        this.setState({ saving: true })
        saveProvider({ providerId: Router.router.query.provider })
            .then(res => {
                // console.log(res)
                getSavedProviders()
                    .then(prv => {
                        this.setState({ saving: false, present: true })
                        this.props.saveFavedProviders(prv.data.providers)
                    })
                    .catch(err => {
                        this.setState({ saving: false })
                        console.log({ ...err })
                    })
            })
            .catch(err => {
                this.setState({ saving: false })
                console.log(err)
            })
    }


    unFavProvider = () => {
        this.setState({ saving: true })
        deleteSavedProvider(Router.router.query.provider)
            .then(res => {
                // console.log(res)
                getSavedProviders()
                    .then(prv => {
                        this.setState({ saving: false })
                        this.props.saveFavedProviders(prv.data.providers)
                        this.setState({ saving: false, present: false })
                    })
                    .catch(err => {
                        this.setState({ saving: false })
                        console.log(err)
                    })
            })
            .catch(err => {
                this.setState({ saving: false })
                console.log(err)
            })
    }

    sendMessage = () => {
        let data = {
            clientId: this.props.userData.id,
            providerId: Router.router.query.provider
        }
        console.log(data)
        createConversation(data)
            .then(res => {
                // console.log(res)
                Router.push('/messages?conversationId=' + res.data.data._id)
            })
            .catch(err => {
                console.log(err)
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

    render() {
        return (
            <>
                <Banner banner={this.state.selectedProvider.bannerUrl ? this.state.selectedProvider.bannerUrl : '/static/images/EmptyBanner.png'} text={''} />
                <Container>
                    <div className="serviceDetails">
                        <Grid stackable>
                            <Grid.Row>
                                <Grid.Column width={10}>
                                    <div className="userDesc">
                                        <div className={this.state.selectedProvider.instant ? "userPhoto_" : "userPhoto"}>
                                            <img src={this.state.selectedProvider.pictureUrl} alt="" />
                                        </div>
                                        {this.props.isLoggedIn && <span className="buttons">
                                            {
                                                !this.state.present ? <Button size="huge" onClick={this.favProvider} className="mainBtn secondaryBtn">
                                                    <Display if={this.state.saving}>
                                                        <Loader active inline='centered' />
                                                    </Display>
                                                    <Display if={!this.state.saving}>
                                                        <img src="../static/icons/heart.svg" alt="" />
                                                        <span>Save</span>
                                                    </Display>
                                                </Button> : <Button size="huge" onClick={this.unFavProvider} className="mainBtn secondaryBtn">
                                                        <Display if={this.state.saving}>
                                                            <Loader active inline='centered' />
                                                        </Display>
                                                        <Display if={!this.state.saving}>
                                                            <img src="../static/icons/heart.svg" alt="" />
                                                            <span>Unsave</span>
                                                        </Display>
                                                    </Button>
                                            }
                                            <Button size="huge" className="mainBtn" secondary onClick={this.sendMessage}>
                                                Send Message
                                        </Button>
                                        </span>
                                        }
                                        <p className="userName">
                                            {this.state.selectedProvider.fullname}
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
                                        <BookService bookedTimes={this.state.bookedTimes} providerDetails={this.state.selectedProvider} />
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
                                                {/* <Grid.Column className="lookStars">
                                                    <span className="arrows">
                                                        <img src="../static/icons/right-arrow.svg" className="left dim" alt=""/>
                                                        <img src="../static/icons/right-arrow.svg" className="right" alt=""/>
                                                    </span>
                                                </Grid.Column> */}
                                            </Grid.Row>
                                        </Grid>

                                        {this.state.lookbook.length > 0 ? <LookBook_ looks={this.state.lookbook} /> :
                                            <div className="emptyState">
                                                <img src="/static/icons/empty_service.svg" alt="" />
                                                <p>
                                                    This provider has no lookbook uploaded.
                                                </p>
                                            </div>
                                        }
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
                                                    <Grid.Column mobile={10} tablet={8} computer={8} largeScreen={8} className="lookStars">
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
                                            <Display if={this.state.reviews.length === 0}>
                                                <div className="emptyState">
                                                    <img src="/static/icons/empty_service.svg" alt="" />
                                                    <p>
                                                        This provider has no reviews yet.
                                                    </p>
                                                </div>
                                            </Display>
                                            <Display if={this.state.reviews.length > 0}>
                                                <Reviews reviews={this.state.reviews} />
                                            </Display>
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
    savedProviders: state.serviceProviders.savedProviders,
    userData: getUserData(state),
    isLoggedIn: state.user.isLoggedIn
})


export default connect(mapStateToProps, actions)(withMasterLayout(ServiceDetails));
