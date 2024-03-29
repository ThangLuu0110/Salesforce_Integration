import clsx from 'clsx';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

interface HeaderProps {
    activeTab: string,
    handleActiveTab: (e: any) => void;
    pathname: string
}

export default class Header extends Component<HeaderProps> {
    pageTitle: string = "Chelsea Football Club";

    tabMenuList: {index: number; tabTitle: string, tabName: string; tabPage: string}[] = [
        {index: 0, tabTitle: "Home", tabName: "Home", tabPage: ""},
        {index: 1, tabTitle: "Squad List", tabName: "SquadList", tabPage: "squadlist"},
        {index: 2, tabTitle: "Team Formation", tabName: "TeamFormation", tabPage: "teamformation"},
    ];

    render() {
        const { activeTab, handleActiveTab } = this.props;

        console.log(activeTab);

        return (
            <header className="wrapper-header grid">
                <div className="header grid wide">
                    <span className='header__title'>
                        {this.pageTitle}
                    </span>
                    <nav className="header__navbar">
                        <ul className="header__navbar-list">
                        {this.tabMenuList.map((tab) => (
                            <li
                                className={clsx(
                                    "header__navbar-item",
                                    activeTab === tab.tabName && "active"
                                )}
                                key={tab.index}
                                onClick={(e) => {
                                    switch (tab.tabPage) {
                                    case "":
                                        handleActiveTab("Home");
                                        break;
                                    case "squadlist":
                                        handleActiveTab("SquadList");
                                        break;
                                    case "teamformation":
                                        handleActiveTab("TeamFormation");
                                        break;
                                    default:
                                        break;
                                    }
                                }}
                            >
                                <Link to={`/${tab.tabPage}`} className="item-text">
                                    {tab.tabTitle}
                                </Link>
                                <span className="dot"></span>
                            </li>
                        ))}
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}
