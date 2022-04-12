<script lang="ts">
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { ArrowLeft } from '$lib/components/icons';
</script>

<a
  href="/"
  class="navbar-home-button"
  transition:fly={{ duration: 300, x: -54, opacity: 1, easing: quintOut }}
>
  <ArrowLeft />
</a>

<style lang="sass">
  .navbar-home-button
    position: absolute
    top: 0
    left: 0
    display: flex
    justify-content: center
    align-items: center
    width: 54px
    height: 54px
    background-color: #000
</style>
