import React, {useState} from 'react';
import Header from './Module/Header/Header.component';

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
        </div>
    );
}

export default WebContent;