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

// Function to add task
document.addEventListener("DOMContentLoaded", () => {
    // Get elements
    const todoInput = document.getElementById("todo-input");
    const addBtn = document.getElementById("add-todo");
    const todoList = document.getElementById("todo-list");

    // Function to add task
    function addTask() {
        const taskText = todoInput.value.trim();
        if (taskText === "") return;

        // Create list item
        const li = document.createElement("li");

        // Task text
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        // Done button
        const doneBtn = document.createElement("button");
        doneBtn.textContent = "Done";
        doneBtn.classList.add("todo-btn");
        doneBtn.addEventListener("click", () => {
            taskSpan.classList.toggle("todo-done");
        });

        // Delete button
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.classList.add("todo-btn");
        delBtn.addEventListener("click", () => {
            li.remove();
        });

        // Append span and buttons to li
        li.appendChild(taskSpan);
        li.appendChild(doneBtn);
        li.appendChild(delBtn);

        // Add li to ul
        todoList.appendChild(li);

        // Clear input
        todoInput.value = "";
    }

    // Event listeners
    addBtn.addEventListener("click", addTask);

    todoInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    });
});


