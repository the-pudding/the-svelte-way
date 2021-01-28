<script>
  import Callback from "./Callback.svelte";
  import Event from "./Event.svelte";
  import Bind from "./Bind.svelte";

  let boundValue = "";
  $: upper = boundValue.toUpperCase();
</script>

<Bind bind:value="{boundValue}" />
<p>{upper}</p>
