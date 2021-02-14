export default function inView(node) {
	const handleIntersect = (e) => {
		node.dispatchEvent(new CustomEvent("intersect", { detail: e[0].isIntersecting }));
	};
	
	const root = null;
	const rootMargin = `-200px 0px -200px 0px`;
	const options = { root, rootMargin };
	const observer = new IntersectionObserver(handleIntersect, options);;
	observer.observe(node);

	return {
		destroy() {
			if (observer) observer.disconnect();
		}
	};
}