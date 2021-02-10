<script>
  import InterpolatedNumber from "./InterpolatedNumber.svelte";
  import Dots from "./Dots.svelte";

  let value = 0;
</script>

<button on:click={() => (value = Math.random() * 100)}
  >Generate random number</button
>

<InterpolatedNumber {value} />

<Dots {value} />
