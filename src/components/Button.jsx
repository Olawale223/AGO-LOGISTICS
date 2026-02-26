// src/components/Button.jsx
import { Link } from 'react-router-dom';
import './components.css';

/**
 * @param {'primary'|'outline'|'outline-dark'} variant
 * @param {'sm'|'base'|'lg'} size
 * @param {string} to   - if provided, renders as a React Router Link
 * @param {string} href - if provided, renders as an anchor tag
 * @param {boolean} arrow - show trailing arrow
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'base',
  to,
  href,
  arrow = false,
  className = '',
  onClick,
  type = 'button',
  ...rest
}) {
  const cls = [
    'btn',
    `btn--${variant}`,
    size !== 'base' ? `btn--${size}` : '',
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {children}
      {arrow && <span className="btn__arrow">→</span>}
    </>
  );

  if (to) return <Link to={to} className={cls} {...rest}>{content}</Link>;
  if (href) return <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...rest}>{content}</a>;
  return (
    <button type={type} className={cls} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
