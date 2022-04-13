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
  @import '../../../sass/variables'

  .navbar
    position: fixed
    top: 0
    z-index: 1
    display: flex
    justify-content: center
    align-items: center
    width: 100%
    height: 54px
    background-color: $primary
    font-size: 23px
    font-weight: 700
    user-select: none
</style>
