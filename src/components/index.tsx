import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar.component';
import Header from './Pages/Header/header.component';

enum ActiveTab {
    Home,
    Players,
    Formation,
}

type ActiveTabKey = keyof typeof ActiveTab;
export default function WebContent(){
    const [activeTab, setActiveTab] = useState<ActiveTabKey>(
        window.location.pathname === '/' ? 'Home' : (
            window.location.pathname === '/players' ? 'Players' : 'Formation'
        )
    );

    const handleActiveTab = (tabname: ActiveTabKey) => {
        setActiveTab(tabname);
    }

    return (
        <div className="web-wrapper">
            <Header/>
            <div>
                <Sidebar 
                    activeTab={activeTab}
                    handleActiveTab={handleActiveTab}
                    />
                <Routes>
                    <Route path="/" element="" />
                    <Route path="/players" element="" />
                    <Route path="/formation" element="" />
                </Routes>
            </div>
        </div>
    )
}