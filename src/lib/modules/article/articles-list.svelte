<script lang="ts">
  import { onMount } from 'svelte';
  import { useOtherArticles } from './articles.store';
  import { ArticlesList } from '$lib/components/article';
  import type { ParsedArticle } from '$lib/components/article';

  let articles: ParsedArticle[] = [];

  onMount(async () => {
    articles = await useOtherArticles();
  });
</script>

<ArticlesList {articles} />
