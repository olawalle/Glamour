import React, {Component} from 'react';
import withMasterLayout from '../pages/layouts/withMasterLayout';
import { connect } from 'react-redux';
import { Container, Grid, Button } from 'semantic-ui-react';
import { getProviders } from '../store'
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

class ServiceDetails extends Component {
    static async getInitialProps ({ reduxStore, req }) {
        this.test = reduxStore
      // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
  
      return {
      }
    }

    state = {
        selectedProvider: {}
    }

    componentDidMount() {
        let id = Router.router.query.provider
        this.setState({selectedProvider: this.props.serviceProviders.find(provider => provider.id === id)}, () => {
            console.log(this.state.selectedProvider)
        })
    }

    showInnerNav = () => {
        if (this.props.isLoggedIn) {
            return <InnerNav userRole={'client'} />
        }
    }

    
    renderServiceComponent(serviceProvider) {
        if (this.state.selectedProvider.servicesRendered) return serviceProvider.servicesRendered.map((service, i) => <Service key={`service${i}`} id={serviceProvider.id} userServices={service} selected={false} />)
    }

    render () {
        return (
            <>
            <Banner banner={this.state.selectedProvider.banner}  text={''} />
            <Container>
                <div className="serviceDetails">
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={10}>
                                <div className="userDesc">
                                    <img src={this.state.selectedProvider.userPhoto} className={this.state.selectedProvider.userPhoto ? "userPhoto_" : "userPhoto"} alt=""/>
                                    <div className="buttons">
                                        <Button size="huge" className="mainBtn secondaryBtn"> 
                                            <img src="../static/icons/heart.svg" alt=""/> <span>Save</span>
                                        </Button>
                                        <Button size="huge"  className="mainBtn" secondary>
                                            <img src="../static/icons/heart.svg" alt=""/>Send Message
                                        </Button>
                                    </div>
                                    <p className="userName">
                                        {this.state.selectedProvider.name}
                                    </p>
                                    <p className="userJob">
                                        {this.state.selectedProvider.jobDesc}
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
                                                this.renderServiceComponent(this.state.selectedProvider)
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
                                                            <Stars stars={this.state.selectedProvider.stars} />
                                                        }      
                                                        ({this.state.selectedProvider.ratingsCount})                                   
                                                    </span>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                        </div>
                                        <div className="reviewsComponentWrapChild">
                                            <Reviews />
                                            <Reviews />
                                            <Reviews />
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
    isLoggedIn: state.auth.login.isLoggedIn
})


export default connect(mapStateToProps, actions)(withMasterLayout(ServiceDetails));
