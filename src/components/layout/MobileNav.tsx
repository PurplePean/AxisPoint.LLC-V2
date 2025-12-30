import { useState } from 'react';

interface NavItem {
  name: string;
  href: string;
}

interface MobileNavProps {
  navItems: NavItem[];
}

export default function MobileNav({ navItems }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="relative w-10 h-10 flex flex-col items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span
          className={`block w-6 h-0.5 bg-text transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-1.5' : 'mb-1'
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-text transition-all duration-300 ${
            isOpen ? 'opacity-0' : 'mb-1'
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-text transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-6 border-b border-border">
            <button
              onClick={closeMenu}
              className="w-10 h-10 flex items-center justify-center hover:bg-surface rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-lg font-medium text-text hover:bg-surface hover:text-primary rounded-md transition-colors"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTAs */}
          <div className="px-6 py-8 border-t border-border space-y-4">
            <a
              href="/contact#form"
              className="block w-full px-6 py-3 bg-primary text-white text-center font-medium rounded-md hover:bg-primary-hover transition-colors"
              onClick={closeMenu}
            >
              Request a Review
            </a>
            <a
              href="https://calendar.app.google/N2UcZCp8Vo4yTxMj7"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3 text-center font-medium text-primary hover:text-primary-hover transition-colors"
              onClick={closeMenu}
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
