import React from 'react';
import Sidebar from './Sidebar/Sidebar.component';
import Header from './Pages/Header/header.component';

export default function WebContent(){
    return (
        <div className="web-wrapper">
            <Header/>
            <Sidebar/>
        </div>
    )
}