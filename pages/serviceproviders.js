import React, {Component} from 'react';
import Provider from '../components/serviceProviders/Provider'
import ProvidersForm from '../components/serviceProviders/providersForm'
import InnerNav from '../components/shared/InnerNav'
import Footer from '../components/shared/Footer';
import withMasterLayout from '../pages/layouts/withMasterLayout';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { getProviders } from '../store'
import './less/serviceProvider.less'


const styles = {
    pageWrap: {
    // padding: '20px'
    }
}




class ServiceProvider extends Component {
    static async getInitialProps ({ reduxStore, req }) {
        this.test = reduxStore
      // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
  
      return {
      }
    }

    state = {
        position: ''
    }

    componentWillMount() {
    }

    showInnerNav = () => {
        if (this.props.isLoggedIn) {
            return <InnerNav />
        }
    }

    switchPosition = () => {
        if (window.pageYOffset > 77) {
            this.setState({ position : 'fixed'}) 
        } else {
            this.setState({ position : 'uu'}) 
        }
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.switchPosition)
    }

    render () {
        return (
            <>
            <div className={this.state.position}>
            {
                this.showInnerNav()
            }
            </div>
            <Container>
                <div style={styles.pageWrap} className="serviceProviders">
                    <ProvidersForm />

                    <Grid columns={3} stackable>
                        <Grid.Row>
                            {
                                this.props.serviceProviders.map((provider, i) => (
                                    <Grid.Column >
                                        <Provider  key={`provider${i}`} {...provider} />
                                    </Grid.Column>
                                ))
                            }
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


export default connect(mapStateToProps)(withMasterLayout(ServiceProvider));
