const button = document.querySelector("#themeToggle");

button.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        button.textContent = "Light Mode";
    } else {
        button.textContent = "Dark Mode";
    }
});