<script lang="ts">
  import { TextTitleMedium } from '$lib/components/text';
  import { ArticleLabel } from '.';

  export let title = '',
    href = '',
    thumbnail = '/assets/img/thumbnail-placeholder.png'; // internet caiu, tô usando essa img por enquanto
</script>

<a {href} class="article">
  <figure class="thumbnail">
    <img src={thumbnail} alt="" />
  </figure>
  <ArticleLabel color="blue">Educação</ArticleLabel>
  <TextTitleMedium>{title}</TextTitleMedium>
</a>

<style lang="sass">
  .article
    display: flex
    flex-direction: column
    gap: .5rem
    color: inherit
    text-decoration: none

    .thumbnail
      display: flex
      justify-content: center
      align-items: center
      width: 100%
      height: 190px
      margin-bottom: .5rem
      border-radius: 10px
      overflow: hidden

      img
        flex-shrink: 0
        min-width: 100%
        min-height: 100%
        object-fit: cover
        transition: all .3s ease

    &:not(:hover) img
      transform: scale(1.1)
</style>
