<script>
  import { onMount } from "svelte";

  let isVisible = false;
  let element;

  const handleIntersect = (e) => {
    isVisible = e[0].isIntersecting;
  };

  onMount(() => {
    const root = null;
    const rootMargin = `0px 0px -300px 0px`;
    const options = { root, rootMargin };

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(element);
  });
</script>

<div bind:this={element}>
  <slot {isVisible} />
</div>
