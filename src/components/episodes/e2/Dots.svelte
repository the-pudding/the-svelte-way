<script>
  import { spring, tweened } from "svelte/motion";
  import tweenedStaggered from "./tweened-staggered.js";

  const numberOfDots = 10;

  let areAtBottom = true;
  const getNewDots = () => {
    const newDots = new Array(numberOfDots).fill(areAtBottom ? 0 : 200);
    areAtBottom = !areAtBottom;
    return newDots;
  };

  const dots = tweened(getNewDots(), {
    duration: 800
    // stiffness: 0.25,
    // damping: 0.25,
    // iDelay: 100
  });
</script>

<style>
  .dots {
    display: flex;
  }
  .dot {
    width: 1em;
    height: 1em;
    margin: 1em;
    background: tomato;
    border-radius: 100%;
  }
</style>

<button
  on:click={() => dots.set(getNewDots(), {
      duration: dots.duration,
      iDelay: dots.iDelay
    })}>
  Move dots
</button>
<label>
  duration {Number.isFinite(dots.duration) ? dots.duration : 100}
  <input type="range" step="1" min="0" max="1000" bind:value={dots.duration} />
</label>
<!-- <label>
  iDelay {Number.isFinite(dots.iDelay) ? dots.iDelay : 10}
  <input type="range" step="1" min="0" max="50" bind:value={dots.iDelay} />
</label>
<label>
  stiffness {Number.isFinite(dots.stiffness) ? dots.stiffness : 0.25}
  <input type="range" step="0.01" min="0" max="1" bind:value={dots.stiffness} />
</label>
<label>
  damping {Number.isFinite(dots.damping) ? dots.damping : 0.25}
  <input type="range" step="0.01" min="0" max="1" bind:value={dots.damping} />
</label> -->

<div>
  <div class="dots">
    {#each $dots as y}
      <div class="dot" style="transform: translateY({y}px)" />
    {/each}
  </div>
</div>
