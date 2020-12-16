import Link from 'next/link';
import { Router, withRouter } from 'next/router';
import styles from '../styles/NavButton.module.scss';

type NavButtonProps = {
  label: string;
  icon: Element;
  router: Router;
  path: string;
};

const NavButton: React.FC<NavButtonProps> = ({ label, icon, router, path }) => (
  <Link href={path}>
    <div
      className={`
      ${styles.NavButton} 
      ${router.pathname === path && styles.NavButton_active}
        `}
    >
      <div className={styles.Icon}>{icon}</div>
      <span className={styles.Label}>{label}</span>
    </div>
  </Link>
);

export default withRouter(NavButton);
