<script>
  import InterpolatedNumber from "./InterpolatedNumber.svelte";
  import Dots from "./Dots.svelte";

  let value = 0;
</script>

<button on:click={() => (value = Math.random() * 100)}>Random number</button>
<InterpolatedNumber {value} />

<Dots {value} />

<!--
Agenda:
- the basics of tweened: InterpolatedNumber
  - look! we can change the duration
  - look! we can change the delay
- a more visual example: Dots
  - look! we can use an array
  - look! we can use an object (optional)
- switch to spring
  - what are stiffness & damping?
- look! we can make custom transitions (optional)
- fun examples?
  - polygraph site background dots
  - usa today??
-->
