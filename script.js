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

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Simple animation on load
document.querySelectorAll("section").forEach(section => {
    section.style.opacity = 0;
});

window.addEventListener("load", () => {
    document.querySelectorAll("section").forEach((section, index) => {
        setTimeout(() => {
            section.style.transition = "all 0.6s ease";
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }, index * 150);
    });
});

