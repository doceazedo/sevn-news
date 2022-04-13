<script lang="ts">
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  export let isNarrow = false,
    url: string,
    isHome: boolean;

  const transition = {
    duration: 300,
    opacity: 0,
    easing: quintOut,
  };
</script>

{#key url}
  <main
    class="container"
    class:is-narrow={isNarrow}
    in:fly={{
      ...transition,
      x: isHome ? 32 : -32,
      delay: 500,
    }}
    out:fly={{
      ...transition,
      x: isHome ? -32 : 32,
    }}
  >
    <slot />
  </main>
{/key}

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

  @media screen and (max-width: 1180px)
    .container
      padding: 2rem

      &.is-narrow
        padding: 3rem 2rem
</style>
