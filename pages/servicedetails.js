import React, {Component} from 'react';
import Footer from '../components/shared/Footer';
import withMasterLayout from '../pages/layouts/withMasterLayout';
import { connect } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';
import { getProviders } from '../store'
import Info from '../components/shared/Info'
import Router from 'next/router';


const styles = {
    pageWrap: {
    // padding: '20px'
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
            <Info text="About us" banner={this.selectedProvider.banner}>
            </Info>
            <Container>
                <div style={styles.pageWrap} className="serviceDetails">
                </div>
            </Container>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    serviceProviders: getProviders(state),
    isLoggedIn: state.auth.login.isLoggedIn
})


export default connect(mapStateToProps)(withMasterLayout(ServiceDetails));
