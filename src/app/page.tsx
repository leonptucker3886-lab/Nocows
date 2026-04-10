'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { articles } from '../lib/articles';

const categories = [
  'politics', 'who-was', 'who-is', 'crypto', 'ai', 'science', 'mental-health', 'religion', 'conspiracy-theory'
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const filteredArticles = useMemo(() => {
    return articles
      .filter(article => {
        const matchesSearch = searchTerm === '' ||
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.content.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === '' || article.category === selectedCategory;
        const matchesDate = selectedDate === '' || article.date.startsWith(selectedDate);
        return matchesSearch && matchesCategory && matchesDate;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [searchTerm, selectedCategory, selectedDate]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">No Sacred Cows Blog</h1>
      <p className="text-lg text-gray-600 mb-12 text-center">
        Exploring topics without boundaries or sacred cows.
      </p>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Search Keywords
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
              Date Posted (YYYY-MM)
            </label>
            <input
              id="date"
              type="month"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {filteredArticles.length === 0 ? (
          <p className="text-center text-gray-500">No articles found matching your criteria.</p>
        ) : (
          filteredArticles.map((article) => (
            <article key={article.slug} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  <Link href={`/${article.category}/${article.slug}`} className="hover:text-blue-600">
                    {article.title}
                  </Link>
                </h2>
                <span className="text-sm text-gray-500">{article.date}</span>
              </div>
              <p className="text-gray-600 capitalize mb-2">{article.category.replace('-', ' ')}</p>
              <p className="text-gray-700 line-clamp-3">
                {article.content.split('\n').find(line => line.trim() && !line.startsWith('#'))?.trim() || 'Read more...'}
              </p>
              <Link href={`/${article.category}/${article.slug}`} className="text-blue-600 hover:underline mt-4 inline-block">
                Read more →
              </Link>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
