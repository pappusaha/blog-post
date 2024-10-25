import React from 'react';
import Navbar from '../../Components/Navbar';
import BLog from '../Blog/BLog';
import Hero from '../../Components/Hero';
import wafe from '../../assets/wave.svg'

const Home = () => {
    return (
        <div className=' relative flex flex-col items-center justify-center min-h-[calc(100vh-116px)]'>
  
  <Hero></Hero>

            <img  className='absolute bottom-0 w-full -z-10' src={wafe} alt="" />
     
        </div>
    );
};

export default Home;