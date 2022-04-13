import { categoryColors } from '.';
import { getArticle, getHeadlines, getOtherArticles } from './articles.service';
import type { ArticleDetails, Article } from '$lib/components/content/article';

const getLink = (slug: string, id: number) => {
  if (slug == null || id == null) return;

  const parts = slug.split('-');
  const lastPart = parts[parts.length - 1];
  return lastPart == id.toString() ? `/${slug}` : `/${slug}-${id}`;
};

const parseArticle = (article: ArticleDetails) => ({
  ...article,
  link: getLink(article.slug, article.id),
  color: categoryColors[article.categoryId],
});

const parseArticles = (articles: Article[]) => {
  return articles.map((article) => parseArticle(article));
};

export const useArticle = async (id: number) => {
  const article = await getArticle(id);
  const parsedArticle = parseArticle(article);
  return parsedArticle;
};

export const useHeadlines = async () => {
  const headlines = await getHeadlines();
  const parsedHeadlines = parseArticles(headlines);
  return parsedHeadlines;
};

export const useOtherArticles = async () => {
  const articles = await getOtherArticles();
  const parsedArticles = parseArticles(articles);
  return parsedArticles;
};
