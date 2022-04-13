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

export type ParsedArticle = {
  link: string;
  color: CategoryColor;
} & Article;
