import React, {Component} from 'react';
import withMasterLayout from '../pages/layouts/withMasterLayout';
import { connect } from 'react-redux';
import { Container, Grid, Button } from 'semantic-ui-react';
import { getProviders } from '../store'
import Banner from '../components/shared/Banner'
import Footer from '../components/shared/Footer'
import Service from '../components/serviceDetails/service'
import LookBook from '../components/serviceDetails/lookBook'
import Reviews from '../components/serviceDetails/reviews'
import BookService from '../components/serviceDetails/bookService'
import Router from 'next/router';
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
    },
    mainBtn: {
      borderRadius: '0px',
      height: '49px',
      fontSize: '14px',
      margin: '10px',
      paddingLeft: '30px',
      paddingRight: '30px',
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
        console.log(this.selectedProvider)
    }

    showInnerNav = () => {
        if (this.props.isLoggedIn) {
            return <InnerNav />
        }
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
                                    <span className="buttons">
                                        <Button style={styles.mainBtn} size="huge" className="secondaryBtn">Save</Button>
                                        <Button style={styles.mainBtn} size="huge" secondary>Send Message</Button>
                                    </span>
                                    <p className="userName">
                                        {this.selectedProvider.name}
                                    </p>
                                    <p className="userJob">
                                        {this.selectedProvider.jobDesc}
                                    </p>
                                    <p className="userDetails">
                                        {this.selectedProvider.description}
                                        {this.selectedProvider.description}
                                    </p>
                                    <div className="serviceWrap">
                                        <span className="serviceWrapTitle">
                                            Services
                                        </span>
                                        <Service />
                                        <Service />
                                        <Service />
                                        <Service />
                                        <Service />
                                    </div>
                                    <div className="serviceWrap">
                                        <span className="serviceWrapTitle">
                                            Services
                                        </span>
                                        <span className="lookStars">
                                            <img src="../static/icons/filled-star.svg" alt=""/>
                                        </span>
                                        <LookBook />
                                    </div>
                                    <div className="serviceWrap">
                                        <span className="serviceWrapTitle">
                                            Reviews
                                        </span>
                                        <span className="lookStars">
                                            <img src="../static/icons/filled-star.svg" alt=""/>
                                            <img src="../static/icons/filled-star.svg" alt=""/>
                                            <img src="../static/icons/filled-star.svg" alt=""/>
                                            <img src="../static/icons/empty-star.svg" alt=""/>
                                            <img src="../static/icons/empty-star.svg" alt=""/>
                                        </span>
                                        <Reviews />
                                        <Reviews />
                                        <Reviews />
                                        <Reviews />
                                        <Reviews />
                                        <Reviews />
                                    </div>
                                </div>
                            </Grid.Column>
                            <Grid.Column  style={styles.Left} width={6}>
                                <div className="serviceWrap bookServiceComponent">
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


export default connect(mapStateToProps)(withMasterLayout(ServiceDetails));
