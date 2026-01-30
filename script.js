// Wait until the page loads
document.addEventListener("DOMContentLoaded", function() {
    // Create a button
    const btn = document.createElement("button");
    btn.textContent = "Do Not Click Me!";
    btn.style.padding = "10px 20px";
    btn.style.fontSize = "16px";
    btn.style.cursor = "pointer";
    
    // Add a click event
    btn.addEventListener("click", function() {
        alert("You clicked the button, you Buffoon!");
    });
    
    // Add button to the top of main
    document.querySelector("main").prepend(btn);
});

const toggleButton = document.getElementById("darkModeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "☀️";
}

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleButton.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        toggleButton.textContent = "🌙";
    }
});


// Active navigation link highlighting (GitHub Pages safe)
document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;

    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(link => {
        const linkPath = link.getAttribute("href");

        if (currentPath.endsWith(linkPath)) {
            link.classList.add("active");
        }

        // Special case: homepage
        if (
            (currentPath === "/" || currentPath.endsWith("/index.html")) &&
            linkPath === "index.html"
        ) {
            link.classList.add("active");
        }
    });
});



