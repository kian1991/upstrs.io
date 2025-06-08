import { useState } from 'react';
import classes from './navbar.module.css';
import { cn } from '../../lib/utils';

type Props = {
  links: {
    name: string;
    href: string;
  }[];
};

export function Navbar({ links }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div
        className={cn(classes['hamburger-icon'], isOpen && classes.open)}
        onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={classes['nav-links']}>
        <div>
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
