<script lang="ts">
  import { TextCategoryLabel, TextTitleMedium } from '$lib/components/text';
  import type { ParsedArticle } from '.';

  export let article: ParsedArticle;
</script>

<a href={article.link} class="article">
  <figure class="thumbnail">
    <img src={article.poster} alt="" />
  </figure>
  <TextCategoryLabel color={article.color}>
    {article.category}
  </TextCategoryLabel>
  <TextTitleMedium>{article.title}</TextTitleMedium>
</a>

<style lang="sass">
  .article
    display: flex
    flex-direction: column
    gap: .5rem
    color: inherit
    text-decoration: none
    transition: all .3s ease

    &:hover
      transform: translateY(-.5rem)

    .thumbnail
      display: flex
      justify-content: center
      align-items: center
      width: 100%
      height: 190px
      margin-bottom: .5rem
      border-radius: 10px
      background-color: #ebeff1
      overflow: hidden

      img
        flex-shrink: 0
        min-width: 100%
        min-height: 100%
        object-fit: cover
        transition: all .3s ease

        &:not(:hover)
          transform: scale(1.1)
</style>
