const pageButtons = document.querySelectorAll("[data-page]");
const pagePanels = document.querySelectorAll(".page-panel");
const navButtons = document.querySelectorAll(".site-nav [data-page]");
const typingElement = document.querySelector(".typing");
const greeting = "Hi, I'm Raja Shekar Reddy.";

function showPage(pageId) {
    const activePanel = document.getElementById(pageId);

    if (!activePanel || !activePanel.classList.contains("page-panel")) {
        console.error(`Portfolio page "${pageId}" was not found.`);
        return;
    }

    pagePanels.forEach((panel) => {
        const isActive = panel === activePanel;
        panel.hidden = !isActive;
        panel.classList.toggle("is-active", isActive);
    });

    navButtons.forEach((button) => {
        const isActive = button.dataset.page === pageId;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
}

pageButtons.forEach((button) => {
    button.addEventListener("click", () => showPage(button.dataset.page));
});

if (typingElement) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        typingElement.textContent = greeting;
    } else {
        let characterIndex = 0;

        function typeGreeting() {
            if (characterIndex >= greeting.length) {
                return;
            }

            typingElement.textContent += greeting.charAt(characterIndex);
            characterIndex += 1;
            window.setTimeout(typeGreeting, 75);
        }

        typeGreeting();
    }
}
