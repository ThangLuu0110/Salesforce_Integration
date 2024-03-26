import React, {Component} from 'react';

interface HeaderProps {

}

export default class Header extends Component<HeaderProps> {
    pageTitle: string = "Chelsea Football Club";

    tabMenuList: {index: number; tabName: string; tabPage: string}[] = [
        {index: 0, tabName: "Home", tabPage: ""},
        {index: 1, tabName: "Squad List", tabPage: "squadlist"},
        {index: 0, tabName: "Team Formation", tabPage: "teamformation"},
    ];

    render() {
        return (
            <header className="wrapper-header grid">
                <div className="header grid wide">
                    {this.pageTitle}
                </div>
            </header>
        );
    }
}
