<script lang="ts">
  import { page } from '$app/stores';
  import { Navbar } from '$lib/components/navbar';
  import { Container } from '$lib/components/layout';
  import '../assets/sass/minireset.sass';
  import '../assets/sass/global.sass';

  $: isHome = $page.url.pathname == '/';
</script>

<Navbar showHomeButton={!isHome} />
<Container isNarrow={!isHome}>
  <slot />
</Container>
