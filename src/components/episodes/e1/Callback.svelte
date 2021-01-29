<script>
  export let cb;
  let value;
  $: cb(value);
  // const onInput = () => cb(value);
</script>

<input bind:value />
<!-- <input bind:value on:input={onInput} /> -->
