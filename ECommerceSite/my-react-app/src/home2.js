
const buttonWrapper = document.querySelector(".button_wrapper");
const reset = document.querySelector(".reset");

buttonWrapper.addEventListener("click", () => {
	if (!buttonWrapper.classList.contains("loading")) {
		buttonWrapper.classList.add("loading");
		setTimeout(() => {
			buttonWrapper.classList.add("done");
			reset.classList.remove("hidden");
		}, 2400);
	}
});

reset.addEventListener("click", () => {
	reset.classList.add("hidden");
	buttonWrapper.classList.remove("loading", "done");
});