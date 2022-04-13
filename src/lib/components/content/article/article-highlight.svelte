<script lang="ts">
  import { TextCategoryLabel, TextTitleLarge } from '$lib/components/text';
  import type { ParsedArticle } from '.';

  export let article: ParsedArticle;
</script>

<a class="article" href={article.link}>
  <TextCategoryLabel color={article.color}>
    {article.category}
  </TextCategoryLabel>
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
