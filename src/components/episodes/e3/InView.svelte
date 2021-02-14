<script>
  import { onMount } from "svelte";

  let intersecting = false;
  let element;

  const handleIntersect = (e) => {
    intersecting = e[0].isIntersecting;
  };

  onMount(() => {
    const root = null;
    const rootMargin = `-200px 0px -200px 0px`;
    const options = { root, rootMargin };

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(element);
  });
</script>

<div bind:this={element}>
  <slot {intersecting} />
</div>
