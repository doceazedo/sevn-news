<script lang="ts">
  import { page } from '$app/stores';
  import { Navbar } from '$lib/components/navbar';

  $: showHomeButton = $page.url.pathname != '/';
</script>

<Navbar {showHomeButton}>SEVN NEWS</Navbar>
