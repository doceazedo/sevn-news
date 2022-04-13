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
    margin-top: 54px
    padding: 2rem 0

    &.is-narrow
      width: min(100%, 980px)
      padding: 3rem 0

  @media screen and (max-width: 768px)
    .container
      padding: 2rem

      &.is-narrow
        padding: 3rem 2rem
</style>
