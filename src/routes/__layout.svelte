<script lang="ts">
  import { page } from '$app/stores';
  import { Navbar } from '$lib/components/navbar';
  import { Container } from '$lib/components/layout';
  import '../sass/minireset.sass';
  import '../sass/global.sass';

  $: isHome = $page.url.pathname == '/';
</script>

<Navbar showHomeButton={!isHome}>SEVN NEWS</Navbar>
<Container isNarrow={!isHome}>
  <slot />
</Container>
