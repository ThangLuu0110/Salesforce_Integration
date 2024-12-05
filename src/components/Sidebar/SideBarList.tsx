import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';

export const SidebarList = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />,
        className: 'nav-text'
    },
    {
        title: 'Players List',
        path: '/players-list',
        icon: <FaIcons.FaList />,
        className: 'nav-text'
    },
    {
        title: 'Formation',
        path: '/formation',
        icon: <GiIcons.GiSoccerField />,
        className: 'nav-text'
    }
]