const button = document.getElementById("ctaButton");

button.addEventListener("click", () => {
    document
        .getElementById("projects")
        .scrollIntoView({
            behavior: "smooth"
        });
});

console.log("Portfolio loaded!");