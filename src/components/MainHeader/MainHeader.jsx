import React, { useEffect } from 'react';
import './Header.scss'
import { Link } from 'react-router-dom'
import { Layout, Flex } from 'antd';
import { Navigator } from './Navigator';
import { SearchForm } from './SearchForm';
import logo from "../../../public/img/Main/Logo.svg"

export const MainHeader = () => {

    const setScrollPosition = (event) => {
        console.log(event.target)
    }

    useEffect(() => {
        
    }, [])

    return (
        <header id='main--header' onScroll={setScrollPosition}>
            <div style={{padding: '0.5em', minWidth:'130px'}} className="main-header-logo"><Link to='/'> <img src={logo} alt="No logo" /> </Link></div>
            <SearchForm />
            <Navigator style={{padding: '0.5em', minWidth:'130px'}}/>
        </header>
    )
}