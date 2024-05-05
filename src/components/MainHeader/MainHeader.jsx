import React, { useEffect, useState } from 'react';
import './Header.scss'
import { Link } from 'react-router-dom'
import { Layout, Flex } from 'antd';
import { Navigator } from './Navigator';
// import { SearchForm } from './SearchForm'; -- предыдущая версия поисковой строки
import logo from "../../../public/img/Main/Logo.svg"
import { SearchForm } from './SearchForm/SearchForm';

export const MainHeader = () => {

    const [sctickyHeader, setstickyHeader] = useState(false);

    function setHeader() {
        let poosition = document.querySelector('.main--header');

        if (scrollY > 60) {
            poosition.classList.add('scticky-header');
        } else {
            poosition.classList.remove('scticky-header');
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', setHeader);
    }, [])

    return (
        <header
        className='main--header'>
            <div style={{padding: '0.5em', minWidth:'130px'}} className="main-header-logo"><Link to='/'> <img src={logo} alt="No logo" /> </Link></div>
            <SearchForm />
            <Navigator style={{padding: '0.5em', minWidth:'130px'}}/>
        </header>
    )
}