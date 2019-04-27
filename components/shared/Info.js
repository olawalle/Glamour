import React from 'react';
import Footer from './Footer'
import Banner from './Banner'

const Info = (props) => {
  return (
    <>
      <Banner {...props}/>
        {props.children}
      <Footer />
    </>
   );
}

export default Info;