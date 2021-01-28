<script>
  import App from "$components/App.svelte";
</script>

<main>
  <App />
</main>

<style>
  :global(main) {
    font-family: sans-serif;
    font-size: 24px;
    padding: 1em;
    margin: 0 auto;
  }

  :global(input, button) {
    font-size: 1em;
  }
</style>
