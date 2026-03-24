const socket = io();

function sendMessage() {

    const username = document.getElementById("username").value;
    const message = document.getElementById("messageInput").value;

    const fullMessage = username + ": " + message;

    socket.emit("chat message", fullMessage);

    document.getElementById("messageInput").value = "";
}

socket.on("chat message", function(msg) {

    const li = document.createElement("li");
    li.textContent = msg;

    document.getElementById("messages").appendChild(li);

});