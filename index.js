const collapsibleButtons = document.querySelectorAll(".collapsible");

collapsibleButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("active");
        const content = button.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});
