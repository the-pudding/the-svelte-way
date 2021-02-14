<script>
  import inView from "./inViewSimple.js";
  import InView from "./inView.svelte";

  let visible;
</script>

<p class:visible>
  Element using an action:
  <strong>{visible ? "" : "not"} in view</strong>
</p>

<p>
  Component using a prop:
  <strong>{false ? "" : "not"} in view</strong>
</p>

<!-- agenda

show basic action
	 - explain root margin (show 200 buffer)
	
advanced action
	- updates
	- enter vs exit

component
you can use it on anything (dom or components)
can use prop

action
seems more semantically correct (with event dispatching)

how to disconnect
- action: return function
- component: onDestroy

how to update
- action: props auto update (see inView.js)
- component?

how multiple
- component is easier if in same component
- array version for action (better: own component for each element)

	 -->
<style>
  p {
    margin: 800px 0;
    padding: 1em;
    transition: background 500ms;
  }

  p.visible {
    background: gold;
  }

  p.intersecting {
    background: mediumaquamarine;
  }
</style>
