<script lang="ts">
  export let size: number;
</script>

<div style="--size: {size}px" />

<style lang="sass">
  div
    height: var(--size)
</style>
