<script>
  export let onChange;
  let value = "";
  $: onChange(value);
</script>

<input bind:value />
