import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const style = () => {
  return (
    <>
      <Navbar />
      <div className='pt-16'>
      <Outlet /> 
      </div>
      <Footer />
    </>
  )
}

export default style