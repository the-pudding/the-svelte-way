<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let value = "";
  $: dispatch("change", value);
</script>

<input bind:value />
