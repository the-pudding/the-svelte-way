<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let value = "";
</script>

<input bind:value on:blur={dispatch("input-blur", value)} />
