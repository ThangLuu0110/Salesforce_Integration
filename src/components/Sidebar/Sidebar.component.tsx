import React, {Component} from 'react';
import clsx from "clsx";
import * as FaIcons from 'react-icons/fa';
import { SidebarList } from './SideBarList';
import { Link } from 'react-router-dom';

interface SidebarProps{
  activeTab: string;
  handleActiveTab: (e: any) => void;
}

interface SidebarState{
  isExpand: boolean;
}

export default class Sidebar extends Component<SidebarProps> {
  state = {
    isExpand: false,
  } as SidebarState;

  handleExpandSidebar = (e: any) => {
    this.setState({
      ...this.state,
      isExpand: !this.state.isExpand
    })
  }

  render() {
    const { activeTab, handleActiveTab } = this.props;
    
    return (
      <div className={clsx("sidebar", this.state.isExpand && "expanded")}>
        <ul className="sidebar-menu">
          {SidebarList.map((item, index) => {
            return (
              <li key={index} className={clsx(item.className, activeTab === item.title && "active")} 
                onClick={(e) => {handleActiveTab(item.title)}}
              >
                <Link to={item.path}>
                  <span className="nav-text_logo">{item.icon}</span>
                  <span className={clsx("nav-text_title", this.state.isExpand && "expanded")}>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
        <div 
          className={clsx("sidebar-button", this.state.isExpand && "expanded")}
          onClick={this.handleExpandSidebar}
        >
          <FaIcons.FaArrowsAltH />
        </div>
      </div>
    )
  }
}