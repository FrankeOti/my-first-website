document.body.style.opacity = 0;
window.onload = () => {
    document.body.style.transition = "0.5s";
    document.body.style.opacity = 1;
};


fetch('http://localhost:3000/messages')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('messages');
        container.innerHTML = '';

        data.forEach(msg => {
            const div = document.createElement('div');
            div.classList.add('message');

            div.innerHTML = `
                <p><strong>Name:</strong> <input value="${msg.name}" id="name-${msg._id}"></p>
                <p><strong>Email:</strong> <input value="${msg.email}" id="email-${msg._id}"></p>
                <p><strong>Phone:</strong> <input value="${msg.phone}" id="phone-${msg._id}"></p>
                <p><strong>Message:</strong> <input value="${msg.message}" id="message-${msg._id}"></p>

                <button onclick="updateMessage('${msg._id}')">Update</button>
                <button onclick="deleteMessage('${msg._id}')">Delete</button>

                <hr>
            `;

            container.appendChild(div);
        });
    });


    
// DELETE
function deleteMessage(id) {
    fetch(`http://localhost:3000/messages/${id}`, {
        method: 'DELETE'
    })
    .then(() => location.reload());
}

// UPDATE
function updateMessage(id) {
    const name = document.getElementById(`name-${id}`).value;
    const email = document.getElementById(`email-${id}`).value;
    const phone = document.getElementById(`phone-${id}`).value;
    const message = document.getElementById(`message-${id}`).value;

    fetch(`http://localhost:3000/messages/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, phone, message })
    })
    .then(res => res.text())
    .then(() => {
        alert('Updated successfully ✔️');
        location.reload();
    });
}
