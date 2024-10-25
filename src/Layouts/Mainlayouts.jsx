import React from 'react';
import Navbar from '../Components/Navbar';
import Home from '../pages/Home/Home';
import BLog from '../pages/Blog/BLog';
import Bookmarks from '../pages/Bookmarks/Bookmarks';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Mainlayouts = () => {
    return (
        <div className=''>
        <div className='h-16'>
        <Navbar></Navbar>
        </div>
     <div className='min-h-[calc(100vh-116px)]'>
     <Outlet></Outlet>
     </div>
     
      <Footer></Footer>
   
        </div>
    );
};

export default Mainlayouts;


//min-h-[calc(100hh-116px)]  //h-[483PX]