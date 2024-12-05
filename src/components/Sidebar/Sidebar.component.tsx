import React, {Component} from 'react';
import { SidebarList } from './SideBarList';
import { Link } from 'react-router-dom';

interface SidebarProps{

}

export default class Sidebar extends Component<SidebarProps> {
  render() {

    return (
      <div className="sidebar">
        <div className="sidebar-title">
          <span className="sidebar-title_label">
            Chelsea Football Club
          </span>
        </div>
        <ul className="siderbar-menu">
          {SidebarList.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}