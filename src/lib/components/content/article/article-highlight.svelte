<script lang="ts">
  import { TextTitleWithLabel } from '$lib/components/text';
  import type { ParsedArticle } from '.';

  export let article: ParsedArticle;
</script>

<a class="article" href={article.link}>
  <TextTitleWithLabel label={article.category} color={article.color}>
    {article.title}
  </TextTitleWithLabel>
</a>

<style lang="sass">
  .article
    color: inherit
    text-decoration: none
</style>
