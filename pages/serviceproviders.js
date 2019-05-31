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

    showInnerNav = () => {
        if (this.props.isLoggedIn) {
            return <InnerNav userRole={'client'} />
        }
    }

    render () {
        return (
            <>
            {
                this.showInnerNav()
            }
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
                            {
                                this.props.serviceProviders.map((provider, i) => (
                                    <Grid.Column >
                                        <Provider  key={`providuuer${i}`} {...provider} />
                                    </Grid.Column>
                                ))
                            }
                            {
                                this.props.serviceProviders.map((provider, i) => (
                                    <Grid.Column >
                                        <Provider  key={`prbbovider${i}`} {...provider} />
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
