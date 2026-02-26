// src/hooks/useActiveNav.js
import { useLocation } from 'react-router-dom';

/**
 * Returns a helper function `isActive(path)` that returns true
 * when the current pathname matches the given path.
 * The root path only matches exactly to avoid highlighting Home on all routes.
 */
export function useActiveNav() {
  const { pathname } = useLocation();

  const isActive = (path) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return { isActive, pathname };
}
