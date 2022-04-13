<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        status,
        message: error.message,
      },
    };
  }
</script>

<script lang="ts">
  import { TextBodyMedium, TextTitleLarge } from '$lib/components/text';

  export let status: number, message: string;
</script>

<div class="container">
  <TextTitleLarge>{status}</TextTitleLarge>
  <TextBodyMedium>{message}</TextBodyMedium>
</div>

<style lang="sass">
  .container
    text-align: center
</style>
