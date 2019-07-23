import React, {useEffect} from 'react'
import Provider from '../../components/serviceProviders/Provider';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Display from '../../components/shared/Display';

const SavedServiceProviders = (props) => {
    
    return (
        <>
            <Display if={props.savedProviders.length > 0}>
                <Grid stackable style={{maxHeight: '900px', overflow: 'scroll'}}>
                    <Grid.Row>
                        {
                            props.savedProviders &&
                            props.savedProviders.map((provider, i) =>  <Grid.Column key={`providuuer${i}`} width={8}>
                                                                    <Provider {...provider} />
                                                                </Grid.Column>)
                        }
                    </Grid.Row>
                </Grid>
            </Display>
            <Display if={props.savedProviders.length === 0}>
                <div className="emptyState" style={{padding: '30%',
                                                    textAlign: 'center',
                                                    height: '100%'}}>
                    <img src="/static/icons/empty_service.svg" alt=""/> <br/>
                    <p>
                        You have ne saved providers
                    </p>
                </div> 
            </Display>
        </>
    )
}

const mapStateToProps = (state) => ({
    savedProviders : state.serviceProviders.savedProvidersFull
})

export default connect(mapStateToProps)(SavedServiceProviders)
