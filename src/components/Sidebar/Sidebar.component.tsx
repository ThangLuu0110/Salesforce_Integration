import React, {Component} from 'react';
import clsx from "clsx";
import * as FaIcons from 'react-icons/fa';
import { SidebarList } from './SideBarList';
import { Link } from 'react-router-dom';

interface SidebarProps{
}

interface SidebarState{
  itemSelected: String;
}

export default class Sidebar extends Component<SidebarProps> {
  state = {
    itemSelected: 'Home',
  } as SidebarState;

  handleSelectItem = (title: string) => {
    console.log(title);
    
    this.setState({
      ...this.state,
      itemSelected: title
    })
  }

  render() {

    return (
      <div className="sidebar">
        <ul className="sidebar-menu">
          {SidebarList.map((item, index) => {
            return (
              <li key={index} className={clsx(item.className, this.state.itemSelected === item.title && "active")} 
                onClick={(e) => {this.handleSelectItem(item.title)}}
              >
                <Link to={item.path}>
                  <span className="nav-text_logo">{item.icon}</span>
                  <span className="nav-text_title">{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="sidebar-button">
          <FaIcons.FaArrowRight />
        </div>
      </div>
    )
  }
}