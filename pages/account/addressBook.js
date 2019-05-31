import React from 'react'
import AddressForm from '../../components/shared/AddressForm';
import { Grid } from 'semantic-ui-react';
import './less/addressBook.less'
export default function AddressBook() {
    return (
        <>
            <Grid stackable className="addressBook">     
                <AddressForm />

                <hr className="striped-border" />

                <Grid.Row>
                    <Grid.Column>
                        <button className="secondaryBtn">
                            Add new Address
                        </button>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row className="bottom">
                    <Grid.Column textAlign="center">
                        <button className="mainBtn">
                            Save changes
                        </button>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </>
    )
}
