<script>
  import inView from "./inViewSimple.js";
  import InView from "./InView.svelte";

  let visible = [];
  const sections = [1, 2, 3];
</script>

<p
  class:visible
  use:inView
  on:intersect={({ detail }) => {
    visible = detail;
  }}
>
  Element using an action:
  <strong>{visible ? "" : "not"} in view</strong>
</p>

{#each sections as i}
  <InView let:isVisible>
    <p class:visible={isVisible}>
      Component {i} using a prop:
      <strong>{isVisible ? "" : "not"} in view</strong>
    </p>
  </InView>
{/each}

<style>
  p {
    margin: 1200px 0;
    padding: 1em;
    transition: background 500ms;
  }

  p.visible {
    background: gold;
  }
</style>
