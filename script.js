window.addEventListener("pagereveal", async (e) => {
	// If the "from" history entry does not exist, return
	if (!navigation.activation.from) return;

	// Only run this if an active view transition exists
	if (e.viewTransition) {
		const fromUrl = new URL(navigation.activation.from.url);
		const currentUrl = new URL(navigation.activation.entry.url);

		console.log("From URL:", fromUrl.pathname);
		console.log("Current URL:", currentUrl.pathname);
	}
});
