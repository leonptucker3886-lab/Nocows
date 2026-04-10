import { notFound } from 'next/navigation';
import Link from 'next/link';
import { articles } from '../../../lib/articles';

interface PageProps {
  params: {
    category: string;
    slug: string;
  };
}

export default function ArticlePage({ params }: PageProps) {
  const article = articles.find(
    a => a.category === params.category && a.slug === params.slug
  );

  if (!article) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="mb-8">
        <Link href={`/${params.category}`} className="text-blue-600 hover:underline">
          ← Back to {params.category.replace('-', ' ')}
        </Link>
      </nav>

      <article className="bg-white p-8 rounded-lg shadow-md">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{article.title}</h1>
          <div className="flex justify-between items-center text-gray-600">
            <span className="capitalize">{article.category.replace('-', ' ')}</span>
            <time dateTime={article.date}>{article.date}</time>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          {article.content.split('\n').map((line, index) => {
            if (line.startsWith('# ')) {
              return <h2 key={index} className="text-2xl font-semibold mt-8 mb-4">{line.slice(2)}</h2>;
            } else if (line.startsWith('## ')) {
              return <h3 key={index} className="text-xl font-semibold mt-6 mb-3">{line.slice(3)}</h3>;
            } else if (line.startsWith('- ')) {
              return <li key={index} className="ml-6">{line.slice(2)}</li>;
            } else if (line.trim() === '') {
              return <br key={index} />;
            } else if (line.trim()) {
              return <p key={index} className="mb-4">{line}</p>;
            }
            return null;
          })}
        </div>
      </article>
    </div>
  );
}

// Generate static params for all articles
export async function generateStaticParams() {
  return articles.map((article) => ({
    category: article.category,
    slug: article.slug,
  }));
}