'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { font } from '@/config/font';
import { LinkMenu } from '@/interfaces';
import styles from './dropdown.module.css';

interface Props {
  label: string;
  items: LinkMenu[];
  className?: string;
  align?: 'left' | 'right';
}

export const Dropdown = ({
  label,
  items,
  className = '',
  align = 'left',
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <div
      ref={dropdownRef}
      className={`${font.className} ${styles.dropdown} ${className}`}
    >
      <button
        type="button"
        className={`${styles.trigger} regular-body`}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={() => setIsOpen((open) => !open)}
      >
        {label}
        <Image
          src="/assets/svg/arrow-select.svg"
          alt=""
          width={10}
          height={8}
          className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}
        />
      </button>

      {isOpen && (
        <ul
          className={`${styles.panel} ${align === 'right' ? styles.panelRight : ''}`}
          role="menu"
        >
          {items.map((item) => (
            <li key={item.label} role="none">
              <Link
                href={item.url}
                role="menuitem"
                className={`${styles.item} regular-body`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
