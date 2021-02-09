<script>
  import { tweened } from "svelte/motion";

  export let value = 0;

  const localValue = tweened(value, {
    duration: 1000,
    delay: 0
  });

  const updateLocalValue = () => {
    localValue.set(value);
  };
  $: value, updateLocalValue();
</script>

<div>{Math.round($localValue)}</div>
