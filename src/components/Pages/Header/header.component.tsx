import React, {Component} from 'react';
import Logo from '../../../assets/images/Chelsea_crest.svg.png';

interface HeaderProps{

}

export default class Header extends Component<HeaderProps> {
  pageTitle: string = "Chelsea Football Club";

    render() {
      return (
        <div className="header">
            <a href="/">
                <img src={Logo} alt="logo" className="header-logo"/>
            </a>
            <span className="header-title">{this.pageTitle}</span>
        </div>
      )
    }
}