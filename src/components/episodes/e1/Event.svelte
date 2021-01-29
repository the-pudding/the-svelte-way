<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let value;
  $: dispatch("input", value);
</script>

<input bind:value />
