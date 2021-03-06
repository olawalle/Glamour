import React, { Component } from 'react'
import Provider from '../components/serviceProviders/Provider'
import ProvidersForm from '../components/serviceProviders/providersForm'
import InnerNav from '../components/shared/InnerNav'
import Footer from '../components/shared/Footer'
import withMasterLayout from '../pages/layouts/withMasterLayout'
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import { getProviders } from '../store'
import './less/serviceProvider.less'
import * as actions from '../store/actions'
import Display from '../components/shared/Display'
import {
  getAllServices,
  getAllTrends,
  getAllProviders,
} from '../services/generatData.ts'
import Router from 'next/router'
import { Button } from 'antd'

const styles = {
  pageWrap: {
    paddingTop: '10px',
  },
}

class ServiceProvider extends Component {
  static async getInitialProps({ reduxStore, req }) {
    this.test = reduxStore
    // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`

    return {}
  }

  state = {
    position: '',
    options: [],
    allProviders: []
  }

  getFormData = (e, f) => {
    let ranges = e.priceRange.split(' - ')
    // filter list of providers based on user preferences
    let newArray = []
    !f
      ? (newArray = this.props.serviceProviders.filter(provider => {
        return (
          provider.description
            .toLowerCase()
            .includes(e.searchFor.toLowerCase()) &&
          provider.mileRadius
            .toLowerCase()
            .includes(e.distance.toLowerCase()) &&
          provider.postcode.toLowerCase().includes(e.postcode.toLowerCase()) &&
          provider.avgPrice >= parseFloat(ranges[0])
          &&
          provider.avgPrice <= parseFloat(ranges[1])
        )
      }))
      : (newArray = this.state.allProviders.filter(provider => {
        return (
          provider.description
            .toLowerCase()
            .includes(f.searchFor.toLowerCase()) &&
          provider.postcode
            .toLowerCase()
            .includes(f.postcode.toLowerCase()) &&
          provider.schedules.filter(
            schedule => schedule.day.toLowerCase() === f.when.toLowerCase(),
          ).length > 0
        )
      }))
    this.setState({ allProviders: newArray })
  }

  getWhenServiceNeeded = day => {
    // let providers = [...this.state.allProviders]
    let availableProviders = this.props.serviceProviders.filter(prv => {
      return JSON.stringify(prv.schedules).includes(day)
    })
    if (day !== 'Invalid') {
      this.setState({ allProviders: availableProviders })
    }
  }

  clearFilter = () => {
    this.setState({
      allProviders: this.props.serviceProviders,
    })
  }

  componentDidMount() {
    // console.log(window.localStorage.getItem('store'))
    let token = window.sessionStorage.getItem('glamourToken')
    if (token) {
      //   this.props.saveUserData(JSON.parse(userData))
    }

    // get list of serviceProviders
    getAllProviders()
      .then(res => {
        this.props.saveProviders(res.data.users)
        Object.keys(Router.router.query).length > 0
          ? this.setState({ allProviders: res.data.users }, () => {
            this.getFormData(null, Router.router.query)
          })
          : this.setState({ allProviders: res.data.users })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <>
        <Display if={this.props.isLoggedIn}>
          <InnerNav userRole={this.props.user.role} />
        </Display>
        <Container>
          <div style={styles.pageWrap} className="serviceProviders">
            <ProvidersForm
              getWhenServiceNeeded={this.getWhenServiceNeeded}
              getFormData={this.getFormData}
              clearFilter={this.clearFilter}
            />

            {this.state.allProviders.length > 0 ? (
              <Grid columns={3} stackable>
                <Grid.Row>
                  {this.state.allProviders.map((provider, i) => (
                    <Grid.Column key={`provider${i}`}>
                      <Provider {...provider} />
                    </Grid.Column>
                  ))}
                </Grid.Row>
              </Grid>
            ) : (
                <div className="emptyProviders">
                  <img src="/static/icons/empty_service.svg" alt="" />
                  {this.props.serviceProviders.length === 0 ? (
                    <div>
                      <h1>No Providers yet. Kindly check back later</h1>
                    </div>
                  ) : (
                      <div>
                        <h1>No providers match your specified criteria</h1>
                        <Button
                          className="mainBtn secondaryBtn"
                          onClick={this.clearFilter}
                        >
                          View All
                    </Button>
                      </div>
                    )}
                </div>
              )}
          </div>
        </Container>
        <Footer />
      </>
    )
  }
}

const mapStateToProps = state => ({
  serviceProviders: getProviders(state),
  services: state.service.beautyServices.allServices,
  isLoggedIn: state.user.isLoggedIn,
  user: state.user,
})

export default connect(
  mapStateToProps,
  actions,
)(withMasterLayout(ServiceProvider))
