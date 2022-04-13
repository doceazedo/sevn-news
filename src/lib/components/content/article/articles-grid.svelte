<script lang="ts">
  import { ArticleHighlight, ArticleVertical } from '.';
  import type { ParsedArticle } from './articles.types';

  export let highlight: ParsedArticle, articles: ParsedArticle[];
</script>

<section class="articles">
  {#if highlight != null}
    <ArticleHighlight article={highlight} />
  {/if}

  {#each articles as article}
    <ArticleVertical {article} />
  {/each}
</section>

<style lang="sass">
  .articles
    display: grid
    grid-template-columns: 2fr 1fr 1fr
    grid-column-gap: 1.25rem
</style>
