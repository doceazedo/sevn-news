<script lang="ts">
  import { onMount } from 'svelte';
  import { useHeadlines } from './articles.store';
  import { ArticlesGrid } from '$lib/components/article';
  import type { ParsedArticle } from '$lib/components/article';

  let highlight: ParsedArticle;
  let articles: ParsedArticle[] = [];

  onMount(async () => {
    articles = await useHeadlines();
    highlight = articles.shift();
    articles = articles;
  });
</script>

<ArticlesGrid {highlight} {articles} />
