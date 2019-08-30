import React, { useEffect, useState, useRef } from 'react';
import Loader from '../components/shared/Loader'
import Router from 'next/router'
import withMasterLayout from '../pages/layouts/withMasterLayout';
import { verify } from '../services/auth.ts'
import { Snackbar } from '../components/shared/SnackBar';

const Activate = () => {
    useEffect(() => {
        const token = window.location.search.split('=')[1]
        console.log(token)
        verify(token)
        .then(res => {
            setVerified(true)
            setMessage(res.data.message)
            setSnackType('success')
            Router.push('/login')
            _showSnackbarHandler()
        })
        .catch(err => {
            setMessage(err.response.data.message)
            setSnackType('error')
            Router.push('/')
            _showSnackbarHandler()
        })
    }, [])

  const snackbarRef = useRef(null);

  const [verified, setVerified] = useState(false)
  const [snackType, setSnackType] = useState('')
  const [message, setMessage] = useState('')

  const _showSnackbarHandler = () => {
    snackbarRef.current.openSnackBar();
  }
    
    return (
        <>
            <Snackbar ref = {snackbarRef} 
            type={snackType} 
            position={'top'} 
            showClose={true} 
            duration={5000} 
            message={message} />
            { !verified && <Loader /> }
        </>
    )
}

export default withMasterLayout(Activate)