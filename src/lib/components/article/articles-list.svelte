<script lang="ts">
  import { ArticleHorizontal } from '.';
  import type { ParsedArticle } from '.';

  export let articles: ParsedArticle[];
</script>

<section class="articles">
  {#each articles as article}
    <ArticleHorizontal {article} />
  {/each}
</section>

<style lang="sass">
  .articles
    display: grid
    grid-template-columns: repeat(4, 1fr)
    grid-column-gap: 1.25rem
    grid-row-gap: 1.25rem

    @media screen and (max-width: 768px)
      grid-template-columns: 1fr
      grid-row-gap: .75rem
</style>
