import React from 'react'
import Provider from '../../components/serviceProviders/Provider';
import { Grid } from 'semantic-ui-react';

export default function SavedServiceProviders(props) {
    return (
        <>
            <Grid stackable>
                <Grid.Row>
                    {
                        props.providers ? 
                        props.providers.map((provider, i) =>  <Grid.Column key={`providuuer${i}`} width={8}>
                                                                <Provider {...provider} />
                                                            </Grid.Column>) : null
                    }
                </Grid.Row>
            </Grid>
        </>
    )
}
