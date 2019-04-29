import React, {Component} from 'react';
import Auth from '../components/shared/Auth';
import SingleProvider from '../components/\/singleProvider/singleProvider'
import ProvidersForm from '../components/providersForm/providersForm'
import withMasterLayout from '../pages/layouts/withMasterLayout';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Grid, Header, Select, Input, Checkbox, Button } from 'semantic-ui-react';


const styles = {
    pageWrap: {
    margin: '20px',
    // padding: '20px'
    }
}




class ServiceProvider extends Component {
    static async getInitialProps ({ reduxStore, req }) {
      const isServer = !!req
      // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
  
      return {
      }
    }
    componentWillMount() {
        console.log(this)
    }
    render () {
        return (
            <Container>
                <button onClick={test}>uycuy</button>
                <div style={styles.pageWrap}>
                    <ProvidersForm />

                    <Grid columns={3}>
                        <Grid.Row>
                            <Grid.Column>
                                <SingleProvider />
                            </Grid.Column>
                            <Grid.Column>
                                <SingleProvider avail='true' />
                            </Grid.Column>
                            <Grid.Column>
                                <SingleProvider />
                            </Grid.Column>
                            <Grid.Column>
                                <SingleProvider />
                            </Grid.Column>
                        </Grid.Row> 
                    </Grid>  
                </div>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    serviceProviders: state.serviceProviders
})

const test = () => {
    console.log(props)
}

export default connect(mapStateToProps)(withMasterLayout(ServiceProvider));
