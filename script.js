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

console.log("Portfolio loaded!");