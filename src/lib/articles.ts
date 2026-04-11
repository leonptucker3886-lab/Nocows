export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
  content: string;
  image: string;
}

export const articles: Article[] = [];