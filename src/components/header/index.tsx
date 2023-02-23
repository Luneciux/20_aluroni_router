import { ReactComponent as Logo } from 'assets/images/logo.svg';
import styles from './Header.module.scss';

function Header() {
  const routes = [{
    label: 'Início',
    to: '/'
  }, {
    label: 'Cardápio',
    to: '/menu'
  }, {
    label: 'Sobre',
    to: '/about'
  }];
  return (
    <div className={styles.menuStyle}>
      <Logo />
      <ul className={styles.menuStyle__list}>
        {routes.map((item, index) => (
          <li key={index} className={styles.menuStyle__link}>
            <a href={item.to}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;