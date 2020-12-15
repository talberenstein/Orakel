import styles from '../styles/NavBar.module.scss';
import NavButton from './NavButton';

const NavBar = ({ navButtons }) => (
  <div className={styles.NavBar}>
    {navButtons.map(button => (
      <NavButton
        key={button.path}
        path={button.path}
        label={button.label}
        icon={button.icon}
      />
    ))}
  </div>
);

export default NavBar;
