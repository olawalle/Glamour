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
import * as actions from '../store/actions'
import { getAllProviders } from '../services/generatData.ts'
import Display from '../components/shared/Display';


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
        position: '',
        options: [],
        allProviders: []
    }

    getFormData = (e) => {
        // filter list of providers based on user preferences
        let newArray = this.props.serviceProviders.filter(provider => {
            return provider.description.toLowerCase().includes(e.searchFor.toLowerCase())
                    && (provider.service ? provider.service.toLowerCase().includes(e.sortBy.toLowerCase()) : provider)
        })
        this.setState({allProviders: newArray})
    }

    componentDidMount() {
        // set the list of providers in the state
        this.setState({allProviders: this.props.serviceProviders})
    }

    componentWillMount() {
        //API call to get all available providers
        getAllProviders()
        .then(res => {
          this.props.saveProviders(res.data.users)
        })
        .catch(err => {
          console.log(err)
        })
    }

    render () {
        return (
            <>
            <Display if={this.props.isLoggedIn}>
                <InnerNav userRole={this.props.user.role} />
            </Display>
            <Container>
                <div style={styles.pageWrap} className="serviceProviders">
                    <ProvidersForm getFormData={this.getFormData} />

                    <Grid columns={3} stackable>
                        <Grid.Row>
                            {
                                this.state.allProviders.map((provider, i) => (
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
    services: state.service.beautyServices.allServices,
    isLoggedIn: state.user.isLoggedIn,
    user: state.user
})


export default connect(mapStateToProps, actions)(withMasterLayout(ServiceProvider));
