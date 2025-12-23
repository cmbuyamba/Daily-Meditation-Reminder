/**
 * Navigation Service
 * Provides utility functions for handling navigation and smooth scrolling
 */

/**
 * Scrolls to a specific element by ID with smooth behavior
 * @param {string} sectionId - The ID of the element to scroll to
 */
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Handles navigation with intelligent routing and scrolling
 * @param {Object} options - Navigation options
 * @param {string} options.path - The route path to navigate to (null for no route change)
 * @param {string} options.sectionId - The section ID to scroll to
 * @param {string} options.currentPathname - The current pathname from useLocation
 * @param {Function} options.navigate - The navigate function from useNavigate
 */
export const handleNavigation = ({
  path,
  sectionId,
  currentPathname,
  navigate,
}) => {
  if (path) {
    // Navigate to a different route
    navigate(path);
    if (sectionId) {
      // If section ID is also provided, scroll to it after navigation
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      // Otherwise scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  } else if (currentPathname === '/') {
    // If on home page, scroll to section
    scrollToSection(sectionId);
  } else {
    // If on another page, navigate home first then scroll
    navigate('/');
    setTimeout(() => scrollToSection(sectionId), 100);
  }
};

/**
 * Check if a path is currently active
 * @param {string} path - The path to check
 * @param {string} currentPathname - The current pathname from useLocation
 * @returns {boolean} True if path matches current pathname
 */
export const isActivePath = (path, currentPathname) => {
  return currentPathname === path;
};
