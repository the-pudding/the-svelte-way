<script>
  import Callback from "./Callback.svelte";
  import Event from "./Event.svelte";
  import Bind from "./Bind.svelte";

  let callbackValue;
  let eventValue;
  let bindValue;
  // $: console.log({ callbackValue });
  // $: console.log({ eventValue });
  // $: console.log({ bindValue });
</script>

<h6>Callback</h6>
<Callback cb={(v) => (callbackValue = v)} />
<p>{callbackValue}</p>

<h6>Event</h6>
<Event on:input={({ detail }) => (eventValue = detail)} />
<p>{eventValue}</p>

<h6>Bind</h6>
<Bind bind:value={bindValue} />
<p>{bindValue}</p>

<style>
  h6 {
    margin: 0.5em 0;
  }
  p {
    font-weight: bold;
    color: purple;
    margin: 0.5em 0;
    margin-bottom: 2em;
  }
</style>
