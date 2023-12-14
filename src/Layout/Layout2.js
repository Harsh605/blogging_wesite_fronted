import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../DoctorDashboard/Sidebar'

const DoctorLayout = ({userData}) => {
   
    return (
        <>
            <Sidebar Outlet={Outlet} userData={userData}/>
        </>

    )
}

export default DoctorLayout