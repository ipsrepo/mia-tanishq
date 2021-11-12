import React from 'react'
import logo from '../../Assets/logo.svg';

import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
       <img src={logo} alt="logo" />
    </header>
  )
}

export default Header
