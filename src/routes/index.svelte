<script>
  import App from "$components/App.svelte";
</script>

<main>
  <App />
</main>

<style global>
  :global(main) {
    font-family: sans-serif;
    font-size: 24px;
    padding: 1em;
    margin: 0 auto;
  }

  :global(input, button) {
    font-size: 1em;
    padding: 0.25em;
  }
</style>
