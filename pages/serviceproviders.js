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
import Display from '../components/shared/Display';
import { getAllServices, getAllTrends, getAllProviders } from '../services/generatData.ts'


const styles = {
    pageWrap: {
    paddingTop: '60px'
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
        // console.log(e)
        // filter list of providers based on user preferences
        // console.log(this.props.serviceProviders)
        let newArray = this.props.serviceProviders.filter(provider => {
            return provider.description.toLowerCase().includes(e.searchFor.toLowerCase())
                && provider.service.toLowerCase().includes(e.sortBy.toLowerCase())
                && provider.mileRadius.toLowerCase().includes(e.distance.toLowerCase())
                && provider.postcode.toLowerCase().includes(e.postcode.toLowerCase())
        })
        // console.log(newArray)
        this.setState({allProviders: newArray})
    }

    getWhenServiceNeeded = (day) => {
        console.log(day)
        // let providers = [...this.state.allProviders]
        let availableProviders = this.props.serviceProviders.filter(prv => {
          return JSON.stringify(prv.schedules).includes(day)
        })
        console.log(availableProviders)
        if (day !== 'Invalid') {
            this.setState({allProviders: availableProviders})
        }
    }

    componentWillMount() {
        // get list of service categories, trends and serviceProviders
        getAllServices()
        .then(res => {
          this.props.saveServices(res.data.data.services)
        })
        .catch(err => {
          console.log(err)
        })
    
        getAllTrends()
        .then(res => {
          this.props.saveTrends(res.data.data.services)
        })
        .catch(err => {
          console.log(err)
        })
    
        getAllProviders()
        .then(res => {
          this.props.saveProviders(res.data.users)
          this.setState({allProviders: res.data.users})
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
                    <ProvidersForm getWhenServiceNeeded={this.getWhenServiceNeeded} getFormData={this.getFormData} />

                    <Grid columns={3} stackable>
                        <Grid.Row>
                            {
                                this.state.allProviders.map((provider, i) => (
                                    <Grid.Column key={`provider${i}`}>
                                        <Provider  {...provider} />
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
