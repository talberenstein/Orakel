import Link from 'next/link';

import styles from '../styles/NavButton.module.scss';

export default function NavButton(props) {
  return (
    <Link href={props.path}>
      <div className={styles.NavButton + styles.active}>
        <div className="Icon">{props.icon}</div>
        <span className="Label">{props.label}</span>
      </div>
    </Link>
  );
}
