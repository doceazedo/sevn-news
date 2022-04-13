<script lang="ts">
  export let size: number;
</script>

<div style="--size: {size}px; --size-sm: {size / 1.75}px;" />

<style lang="sass">
  div
    height: var(--size)

    @media screen and (max-width: 768px)
      height: var(--size-sm)
</style>
