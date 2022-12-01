import React from 'react'
import { Link } from 'react-router-dom';
import Apps from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import "./Home.css"
import Search from '../components/Search';

function Home() {
  return (
    <div className='home'>
      <div className='home_header'>
        <div className='home_headerL'>
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className='home_headerR'>
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <Apps />
          <Avatar />
        </div>
      </div>
      <div className='home_body'>
       <img 
          src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'alt='logo'
       />
       <Search />
      </div>
    </div>
  )
}

export default Home     