import React, { useState, useRef } from 'react'
import AddressForm from '../../components/shared/AddressForm';
import { Grid } from 'semantic-ui-react';
import './less/addressBook.less'
export default function AddressBook() {
    return (
        <>
            <Grid stackable className="addressBook">     
                <AddressForm />
            </Grid>
        </>
    )
}
