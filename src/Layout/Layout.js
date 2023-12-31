import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Layout = ({userData}) => {

    return (
        <>
            <Navbar userData={userData}/>
            <Outlet />
            <Footer />

        </>

    )
}

export default Layout