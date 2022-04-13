<script lang="ts">
  import type { CategoryColor } from '$lib/components/content/article';

  export let color: CategoryColor;
</script>

<p
  class="article-label"
  class:is-red={color == 'red'}
  class:is-blue={color == 'blue'}
  class:is-green={color == 'green'}
>
  <slot />
</p>

<style lang="sass">
  @import '../../../sass/mixins'

  .article-label
    @include category-colors
    font-size: .75rem
    font-weight: 700
    text-transform: uppercase
</style>
