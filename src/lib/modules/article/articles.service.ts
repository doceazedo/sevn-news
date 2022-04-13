import type { Article, ArticleDetails } from '$lib/components/content/article';

const baseUrl = 'https://apimock.sevn.technology/news';

export const getHeadlines = async () => {
  const resp = await fetch(`${baseUrl}/headlines`);
  const data: Article[] = await resp.json();
  return data;
};

export const getOtherArticles = async () => {
  const resp = await fetch(`${baseUrl}/others`);
  const data: Article[] = await resp.json();
  return data;
};

export const getArticle = async (id: number) => {
  const resp = await fetch(`${baseUrl}/articles/${id}`);
  const data: ArticleDetails = await resp.json();
  return data;
};
