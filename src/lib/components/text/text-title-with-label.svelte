<script lang="ts">
  import { TextCategoryLabel, TextTitleLarge } from '.';
  import type { CategoryColor } from '$lib/components/article';

  export let color: CategoryColor, label: string;
</script>

<div>
  <TextCategoryLabel {color}>
    {label}
  </TextCategoryLabel>
  <TextTitleLarge>
    <slot />
  </TextTitleLarge>
</div>

<style lang="sass">
  div
    display: flex
    flex-direction: column
    gap: 5px
</style>
