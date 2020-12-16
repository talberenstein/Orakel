import styles from '../styles/NavBar.module.scss';
import NavButton from './NavButton';

type NavBarProps = {
  navButtons: any;
};

const NavBar: React.FC<NavBarProps> = ({ navButtons }) => (
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
