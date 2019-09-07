import React, { useEffect } from 'react'
import AddressForm from '../../components/shared/AddressForm';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { Grid } from 'semantic-ui-react';
import './less/addressBook.less'


export default connect(null, actions)(function AddressBook(props) {
    useEffect(() => {
      props.saveActiveComponent('Address book')
    }, [])

    return (
        <>
            <Grid stackable className="addressBook">     
                <AddressForm />
            </Grid>
        </>
    )
})
