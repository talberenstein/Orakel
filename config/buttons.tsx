import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpen,
  faUser,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

const navButtons = [
  {
    label: 'Home',
    path: '/',
    icon: <FontAwesomeIcon icon={faBookOpen} />
  },
  {
    label: 'Profetia',
    path: '/profetia',
    icon: <FontAwesomeIcon icon={faShoppingCart} />
  },
  {
    label: 'Profile',
    path: '/profile',
    icon: <FontAwesomeIcon icon={faUser} />
  }
];

export default navButtons;
