import { notFound } from 'next/navigation';
import Link from 'next/link';
import { articles } from '../../../lib/articles';

function ShareButtons({ title, url }: { title: string; url: string }) {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  return (
    <div className="flex gap-2 mb-6">
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Share on Twitter
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors"
      >
        Share on Facebook
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Share on LinkedIn
      </a>
    </div>
  );
}

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { category, slug } = await params;

  const article = articles.find(
    a => a.category === category && a.slug === slug
  );

  if (!article) {
    notFound();
  }

  // Parse content and extract sources
  const lines = article.content.split('\n');
  const contentLines: string[] = [];
  const sources: string[] = [];
  let inSourcesSection = false;

  for (const line of lines) {
    if (line.includes('Sources and Further Reading')) {
      inSourcesSection = true;
      continue;
    }
    if (inSourcesSection) {
      if (line.trim().startsWith('- ')) {
        sources.push(line.slice(2));
      }
    } else {
      contentLines.push(line);
    }
  }

  const articleUrl = `https://nocows-blog.vercel.app/${category}/${slug}`;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="mb-8">
        <Link href={`/${category}`} className="text-blue-600 hover:underline">
          ← Back to {category.replace('-', ' ')}
        </Link>
      </nav>

      <article className="bg-white p-8 rounded-lg shadow-md">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{article.title}</h1>
          <div className="flex justify-between items-center text-gray-600 mb-6">
            <span className="capitalize">{article.category.replace('-', ' ')}</span>
            <time dateTime={article.date}>{article.date}</time>
          </div>
          <ShareButtons title={article.title} url={articleUrl} />
        </header>

        <div className="prose prose-lg max-w-none">
          {contentLines.map((line, index) => {
            if (line.startsWith('# ')) {
              return <h2 key={index} className="text-2xl font-semibold mt-8 mb-4">{line.slice(2)}</h2>;
            } else if (line.startsWith('## ')) {
              return <h3 key={index} className="text-xl font-semibold mt-6 mb-3">{line.slice(3)}</h3>;
            } else if (line.startsWith('### ')) {
              return <h4 key={index} className="text-lg font-semibold mt-4 mb-2">{line.slice(4)}</h4>;
            } else if (line.startsWith('- ')) {
              return <li key={index} className="ml-6 mb-2">{line.slice(2)}</li>;
            } else if (line.trim() === '') {
              return <br key={index} />;
            } else if (line.trim()) {
              return <p key={index} className="mb-4">{line}</p>;
            }
            return null;
          })}
        </div>

        {sources.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Sources and Further Reading</h3>
            <ul className="space-y-2">
              {sources.map((source, index) => (
                <li key={index} className="text-blue-600 hover:underline">
                  <a href="#" onClick={(e) => e.preventDefault()}>{source}</a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8 pt-8 border-t border-gray-200">
          <ShareButtons title={article.title} url={articleUrl} />
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