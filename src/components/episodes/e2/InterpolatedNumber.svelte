<script>
  import { tweened } from "svelte/motion";
  import { cubicInOut, backIn } from "svelte/easing";

  export let value = 0;

  const localValue = tweened(value, {
    duration: 1000,
    delay: 0,
    // easing: cubicInOut
  });

  const updateLocalValue = () => {
    const duration = Math.abs($localValue - value) * 100;
    localValue.set(value, { duration });
  };
  $: value, updateLocalValue();
</script>

<p>{Math.round($localValue)}</p>
