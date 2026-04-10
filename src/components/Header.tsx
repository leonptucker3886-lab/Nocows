import React from 'react';
import Link from 'next/link';
import Logo from '../components/Logo';

const categories = [
  { name: 'Politics', slug: 'politics' },
  { name: 'Who Was', slug: 'who-was' },
  { name: 'Who Is', slug: 'who-is' },
  { name: 'Crypto', slug: 'crypto' },
  { name: 'AI', slug: 'ai' },
  { name: 'Science', slug: 'science' },
  { name: 'Mental Health', slug: 'mental-health' },
  { name: 'Religion', slug: 'religion' },
  { name: 'Conspiracy Theory', slug: 'conspiracy-theory' },
];

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </nav>



          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;