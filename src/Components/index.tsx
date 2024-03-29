import React, {useState} from 'react';
import Header from './Module/Header/Header.component';
import {Route, Routes} from 'react-router-dom';
import SquadListPage from './Module/Body/SquadListPage.component';
import TeamFormationPage from './Module/Body/TeamFormationPage.component';
import HomePage from './Module/Body/HomePage.component';

enum ActiveTab {
    Home,
    SquadList,
    TeamFormation,
}

type ActiveTabKey = keyof typeof ActiveTab;

const WebContent = () => {
    const [activeTab, setActiveTab] = useState<ActiveTabKey>(
        window.location.pathname === '/' ? 'Home' : (
            window.location.pathname === '/squadlist' ? 'SquadList' : 'TeamFormation'
        )
    );
    const handleActiveTab = (tabname: ActiveTabKey) => {
        setActiveTab(tabname);
    }

    return (
        <div className="grid">
            <Header
                activeTab={activeTab}
                handleActiveTab={handleActiveTab}
                pathname={window.location.pathname}
            />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/squadlist" element={<SquadListPage handleActiveTab={handleActiveTab}/>} />
                <Route path="/teamformation" element={<TeamFormationPage />} />
            </Routes>
        </div>
    );
}

export default WebContent;