<script lang="ts">
  export let isNarrow = false;
</script>

<main class="container" class:is-narrow={isNarrow}>
  <slot />
</main>

<style lang="sass">
  .container
    display: flex
    flex-direction: column
    width: min(100%, 1180px)
    margin-inline: auto
    padding: 2rem 0

    &.is-narrow
      width: min(100%, 980px)
      padding: 3rem 0
</style>
