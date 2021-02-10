<script>
  import { spring, tweened } from "svelte/motion";
  import tweenedStaggered from "./tweened-staggered.js";

  let areAtBottom = true;
  const getNewDots = () => {
    const newDots = areAtBottom ? [100, 200, 300] : [0, 0, 0];
    areAtBottom = !areAtBottom;
    return newDots;
  };

  const dots = spring(getNewDots(), {
    // duration: 500,
    stiffness: 0.15,
    damping: 0.8,
    // iDelay: 100,
  });
</script>

<button
  on:click={() =>
    dots.set(getNewDots(), {
      // duration: dots.duration,
      // iDelay: dots.iDelay,
    })}
>
  Move dots
</button>

<!-- <label>
  <em>duration</em>
  <div class="value">
    {Number.isFinite(dots.duration) ? dots.duration : 100}
  </div>
  <input type="range" step="1" min="0" max="1000" bind:value={dots.duration} />
</label> -->

<label>
  <em>stiffness</em>
  <div class="value">
    {Number.isFinite(dots.stiffness) ? dots.stiffness : 0.25}
  </div>
  <input type="range" step="0.01" min="0" max="1" bind:value={dots.stiffness} />
</label>
<label>
  <em>damping</em>
  <div class="value">{Number.isFinite(dots.damping) ? dots.damping : 0.25}</div>
  <input type="range" step="0.01" min="0" max="1" bind:value={dots.damping} />
</label>

<!-- <label>
  <em>iDelay</em>
  <div class="value">{Number.isFinite(dots.iDelay) ? dots.iDelay : 10}</div>
  <input type="range" step="1" min="0" max="50" bind:value={dots.iDelay} />
</label> -->

<div>
  <div class="dots">
    {#each $dots as y}
      <div class="dot" style="transform: translateY({y}px)" />
    {/each}
  </div>
</div>

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
  label {
    display: flex;
    align-items: center;
  }
  input {
    width: 6em;
  }
  label em {
    display: block;
    width: 5em;
  }
  label .value {
    display: block;
    width: 3em;
    text-align: right;
    padding-right: 1em;
    font-feature-settings: "tnum", 1;
  }
</style>
