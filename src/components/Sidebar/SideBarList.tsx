import React from "react";
import * as FaIcons from 'react-icons/fa';

export const SidebarList = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />,
        className: 'nav-text'
    },
    {
        title: 'Players',
        path: '/players',
        icon: <FaIcons.FaList />,
        className: 'nav-text'
    },
    {
        title: 'Formation',
        path: '/formation',
        icon: <FaIcons.FaSolarPanel  />,
        className: 'nav-text'
    }
]