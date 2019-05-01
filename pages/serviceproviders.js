import React, {Component} from 'react';
import Auth from '../components/shared/Auth';
import Provider from '../components/singleProvider/Provider'
import ProvidersForm from '../components/providersForm/providersForm'
import InnerNav from '../components/shared/InnerNav'
import Footer from '../components/shared/Footer';
import withMasterLayout from '../pages/layouts/withMasterLayout';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { getProviders } from '../store'


const styles = {
    pageWrap: {
    margin: '20px',
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

    componentWillMount() {
    }

    showInnerNav = () => {
        if (this.props.isLoggedIn) {
            return <InnerNav />
        }
    }

    render () {
        return (
            <>
            {
                this.showInnerNav()
            }
            <Container>
                <div style={styles.pageWrap}>
                    <ProvidersForm />

                    <Grid columns={3}>
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
