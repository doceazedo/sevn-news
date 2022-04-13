<script lang="ts">
  import { TextTitleSmall } from '$lib/components/text';
  import type { ParsedArticle } from '.';

  export let article: ParsedArticle;
</script>

<a
  href={article.link}
  class="article"
  class:is-red={article.color == 'red'}
  class:is-blue={article.color == 'blue'}
  class:is-green={article.color == 'green'}
>
  <TextTitleSmall>{article.title}</TextTitleSmall>
</a>

<style lang="sass">
  @import '../../../../sass/mixins'
  
  .article
    position: relative
    display: flex
    align-items: center
    min-height: 50px
    padding-left: 15px
    color: inherit
    text-decoration: none
    
    &::before
      @include category-colors
      position: absolute
      left: 0
      content: ''
      width: 5px
      height: 100%
      background-color: red
      border-radius: 25px
</style>
