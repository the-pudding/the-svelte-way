<script>
  import Input from "./Input.svelte";

  let value = "";
  $: upper = value.toUpperCase();
</script>

<Input />
<p>Result: {upper}</p>

<style>
  p {
    font-weight: bold;
    color: purple;
    margin: 0.5em 0;
    margin-bottom: 2em;
  }
</style>
