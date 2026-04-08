function sendMessage() {
    let inputField = document.getElementById("user-input");
    let message = inputField.value;

    if (message.trim() === "") return;

    let chatBox = document.getElementById("chat-box");

    // Show user message
    chatBox.innerHTML += "<p class='user'>You: " + message + "</p>";

    // Send to backend
    fetch("/get", {
        method: "POST",
        body: new URLSearchParams({ msg: message }),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
    .then(response => response.json())
    .then(data => {
        chatBox.innerHTML += "<p class='bot'>Bot: " + data.response + "</p>";
        chatBox.scrollTop = chatBox.scrollHeight;
    });

    inputField.value = "";
}