<script lang="ts">
  import { TextTitleLarge } from '$lib/components/text';
  import { ArticleLabel } from '.';
  import type { ParsedArticle } from '.';

  export let article: ParsedArticle;
</script>

<a class="article" href={article.link}>
  <ArticleLabel color={article.color}>{article.category}</ArticleLabel>
  <TextTitleLarge>{article.title}</TextTitleLarge>
</a>

<style lang="sass">
  .article
    display: flex
    flex-direction: column
    gap: 5px
    color: inherit
    text-decoration: none
</style>
