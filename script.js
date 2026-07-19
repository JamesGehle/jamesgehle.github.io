const button = document.getElementById("ctaButton");

if (button) {
    button.addEventListener("click", () => {
        document
            .getElementById("experience")
            .scrollIntoView({
                behavior: "smooth"
            });
    });
}

const transitionLinks = document.querySelectorAll('a[href="hire.html"], a[href="resume.html"]');
const overlay = document.createElement("div");
overlay.className = "page-overlay";
document.body.appendChild(overlay);

transitionLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        const href = link.getAttribute("href");
        if (!href) {
            return;
        }

        event.preventDefault();
        document.body.classList.add("page-transitioning");

        setTimeout(() => {
            window.location.href = href;
        }, 300);
    });
});

const skillChips = document.querySelectorAll(".skill-chip");
const skillDetails = document.getElementById("skillDetails");

if (skillChips.length && skillDetails) {
    const defaultText = skillDetails.textContent;

    skillChips.forEach((chip) => {
        const showDetails = () => {
            skillDetails.textContent = chip.dataset.description || "Hover over a skill to learn more.";
        };

        const resetDetails = () => {
            skillDetails.textContent = defaultText;
        };

        chip.addEventListener("mouseenter", showDetails);
        chip.addEventListener("focus", showDetails);
        chip.addEventListener("mouseleave", resetDetails);
        chip.addEventListener("blur", resetDetails);
    });
}

console.log("Portfolio loaded!");