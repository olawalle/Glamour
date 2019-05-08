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


const styles = {
    pageWrap: {
    // padding: '20px'
    },
    Left: {
        // background: 'red'
    },
    Right: {
        // background: 'blue'
    }
}




class ServiceDetails extends Component {
    static async getInitialProps ({ reduxStore, req }) {
        this.test = reduxStore
      // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
  
      return {
      }
    }

    componentWillMount() {
        let id = Router.router.query.provider
        this.selectedProvider = this.props.serviceProviders.find(provider => provider.id === id)
        console.log('called')
        this.props.selectProvider(this.selectedProvider)
    }

    showInnerNav = () => {
        if (this.props.isLoggedIn) {
            return <InnerNav />
        }
    }

    
    renderServiceComponent(serviceProvider) {
        return serviceProvider.servicesRendered.map((service, i) => <Service key={`service${i}`} id={serviceProvider.id} userServices={service} selected={false} />)
    }

    render () {
        return (
            <>
            <Banner banner={this.selectedProvider.banner}  text={''} />
            <Container>
                <div style={styles.pageWrap} className="serviceDetails">
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column  style={styles.Right} width={10}>
                                <div className="userDesc">
                                    <img src={this.selectedProvider.userPhoto} className="userPhoto" alt=""/>
                                    <div className="buttons">
                                        <Button size="huge" className="mainBtn secondaryBtn"> 
                                            <img src="../static/icons/heart.svg" alt=""/> <span>Save</span>
                                        </Button>
                                        <Button size="huge"  className="mainBtn" secondary>Send Message</Button>
                                    </div>
                                    <p className="userName">
                                        {this.selectedProvider.name}
                                    </p>
                                    <p className="userJob">
                                        {this.selectedProvider.jobDesc}
                                    </p>
                                    <p className="userDetails">
                                        {this.selectedProvider.description}
                                    </p>
                                    <div className="serviceWrap lightShadow">
                                        <div className="serviceWrapTitle">
                                            Services
                                        </div>
                                        <div className="servicesChildWrap">
                                            {
                                                this.renderServiceComponent(this.selectedProvider)
                                            }
                                        </div>
                                    </div>
                                    <div className="lookBookWrap lightShadow">
                                        <Grid columns={2}>
                                            <Grid.Row>
                                                <Grid.Column  style={styles.Right}>
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
                                                <Grid.Column  style={styles.Right}>
                                                <span className="serviceWrapTitle">
                                                    Reviews
                                                </span>
                                                </Grid.Column>
                                                <Grid.Column className="lookStars">
                                                    <span>
                                                        {
                                                            <Stars stars={this.selectedProvider.stars} />
                                                        }      
                                                        ({this.selectedProvider.ratingsCount})                                   
                                                    </span>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                        </div>
                                        <div className="reviewsComponentWrapChild">
                                            <Reviews />
                                            <Reviews />
                                            <Reviews />
                                            <Reviews />
                                            <Reviews />
                                            <Reviews />
                                            <Reviews />
                                            <Reviews />
                                        </div>
                                    </div>
                                </div>
                            </Grid.Column>
                            <Grid.Column  style={styles.Left} width={6}>
                                <div className="lightShadow bookServiceComponent">
                                    <BookService providerDetails={this.selectedProvider} />
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
