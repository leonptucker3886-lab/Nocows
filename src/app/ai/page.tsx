import Link from 'next/link';
import { articles } from '../../lib/articles';

export default function AIPage() {
  const categoryArticles = articles.filter(article => article.category === 'ai');

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">AI</h1>
      <div className="space-y-6">
        {categoryArticles.map((article) => (
          <article key={article.slug} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                <Link href={`/ai/${article.slug}`} className="hover:text-blue-600">
                  {article.title}
                </Link>
              </h2>
              <span className="text-sm text-gray-500">{article.date}</span>
            </div>
            <p className="text-gray-700 line-clamp-3">
              {article.content.split('\n').find(line => line.trim() && !line.startsWith('#'))?.trim() || 'Read more...'}
            </p>
            <Link href={`/ai/${article.slug}`} className="text-blue-600 hover:underline mt-4 inline-block">
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}