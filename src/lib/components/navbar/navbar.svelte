<script lang="ts">
  import { NavbarHomeButton } from '.';

  export let showHomeButton = false;
</script>

<header class="navbar">
  {#if showHomeButton}
    <NavbarHomeButton />
  {/if}

  <slot />
</header>

<style lang="sass">
  .navbar
    position: relative
    display: flex
    justify-content: center
    align-items: center
    height: 54px
    background-color: #ffbd14
    font-size: 23px
    font-weight: 700
</style>
