export type CategoryColor = 'red' | 'blue' | 'green';

export type Article = {
  id: number;
  date: string;
  author: string;
  category: string;
  categoryId: number;
  slug: string;
  poster: string;
  title: string;
};

export type ArticleDetails = {
  subtitle?: string;
  article?: string;
  status?: number;
  message?: string;
} & Article;

export type ParsedArticle = {
  link: string;
  color: CategoryColor;
} & ArticleDetails;
