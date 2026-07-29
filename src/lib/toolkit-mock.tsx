import { NavLink as RouterNavLink, Link } from 'react-router-dom';
import type { NavLinkProps } from 'react-router-dom';
import { forwardRef } from 'react';

// Simple logger replacement
export const logger = {
  info: (...args: unknown[]) => {
    if (typeof window !== 'undefined' && (window as any).__DEV__) {
      // eslint-disable-next-line no-console
      console.log('[INFO]', ...args);
    }
  },
  warn: (...args: unknown[]) => {
    // eslint-disable-next-line no-console
    console.warn('[WARN]', ...args);
  },
  error: (...args: unknown[]) => {
    // eslint-disable-next-line no-console
    console.error('[ERROR]', ...args);
  },
};

// UniversalLink - for external links
export function UniversalLink({
  to,
  children,
  className,
  target,
  rel,
  ...rest
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  [key: string]: unknown;
}) {
  if (to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:') || to.startsWith('https://wa.me')) {
    return (
      <a
        href={to}
        className={className}
        target={target || '_blank'}
        rel={rel || 'noopener noreferrer'}
        {...(rest as any)}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className} {...(rest as any)}>
      {children}
    </Link>
  );
}

// NavLink with smooth scroll for hash anchors
export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ to, children, onClick, className, ...rest }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (typeof to === 'string' && to.startsWith('#')) {
        e.preventDefault();
        const el = document.querySelector(to);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      if (onClick) onClick(e as any);
    };
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        onClick={handleClick}
        className={className}
        {...(rest as any)}
      >
        {children}
      </RouterNavLink>
    );
  }
);
NavLink.displayName = 'NavLink';

// Scoped storage
export const scopedStorage = {
  setItem: (key: string, value: string) => {
    try { localStorage.setItem(`haoxiang:${key}`, value); } catch { /* ignore */ }
  },
  getItem: (key: string) => {
    try { return localStorage.getItem(`haoxiang:${key}`); } catch { return null; }
  },
  removeItem: (key: string) => {
    try { localStorage.removeItem(`haoxiang:${key}`); } catch { /* ignore */ }
  },
};
