import { categoryColors } from '.';
import { getArticle, getHeadlines, getOtherArticles } from './articles.service';
import type { Article } from '$lib/components/content/article';

const parseArticles = (articles: Article[]) => {
  return articles.map((article) => ({
    ...article,
    link: `/${article.slug}`,
    color: categoryColors[article.categoryId],
  }));
};

export const useArticle = async (id: number) => {
  const article = await getArticle(id);
  return article;
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
