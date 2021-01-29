<script>
  import Input from "./Input.svelte";

  let value = "";
  let output = "";

  const onInputBlur = (event) => {
    output = event.detail.replace(/\d/g, "-");
  };
</script>

<Input bind:value on:input-blur={onInputBlur} />

<p>value: {value}</p>
<p>output on blur: {output}</p>

<!-- Other versions -->
<!-- just bind (see Bind.svelte) -->
<!-- <input bind:value /> -->

<!-- just callback (see Callback.svelte) -->
<!-- <input onChange={(newValue) => { value = newValue }} /> -->

<!-- just event (see Event.svelte) -->
<!-- <input on:change={({ detail }) => { value = detail }} /> -->
