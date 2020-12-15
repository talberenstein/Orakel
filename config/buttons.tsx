import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpen,
  faUser,
  faShoppingCart,
  faHome
} from '@fortawesome/free-solid-svg-icons';

const navButtons = [
  {
    label: 'Home',
    path: '/',
    icon: <FontAwesomeIcon icon={faHome} />
  },
  {
    label: 'Böcker',
    path: '/bocker',
    icon: <FontAwesomeIcon icon={faBookOpen} />
  },
  {
    label: 'My Cart',
    path: '/mycart',
    icon: <FontAwesomeIcon icon={faShoppingCart} />
  },
  {
    label: 'Profile',
    path: '/profile',
    icon: <FontAwesomeIcon icon={faUser} />
  }
];

export default navButtons;
