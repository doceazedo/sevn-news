<script lang="ts">
  import { TextTitleLarge } from '$lib/components/text';
  import { ArticleLabel } from '.';

  export let title = '',
    href = '';
</script>

<a class="article" {href}>
  <ArticleLabel color="red">Economia</ArticleLabel>
  <TextTitleLarge>{title}</TextTitleLarge>
</a>

<style lang="sass">
  .article
    display: flex
    flex-direction: column
    gap: 5px
    color: inherit
    text-decoration: none
</style>
