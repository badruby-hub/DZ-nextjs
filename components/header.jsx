import Link from 'next/link';
import styles from '@/styles/header.module.css';

const
  pages = [
    { href: '/', title: 'Home' },
    { href: 'todo1', title: 'To Do List' },
    { href: 'todo2', title: 'To Do (Deligation)' },
    { href: 'calendar', title: 'Календарь' },
  ];

export function Header() {
  console.log('styles=', styles);
  return <>
    <nav className={styles.main}>
      <ul>
        {pages.map(({ href, title }) =>
          <li key={href}>
            <Link href={href}> {title} </Link>
          </li>)}
      </ul>
    </nav>
  </>;
}