const socket = io();
const myId = socket.id;

function sendMessage(){

const input = document.getElementById("messageInput");
const message = input.value;

if(message.trim() !== ""){

socket.emit("chat message", {
text: message,
sender: socket.id
});

addMessage(message,"sent");

input.value="";
}

}

socket.on("chat message", function(data){

if(data.sender !== socket.id){
addMessage(data.text,"received");
}

});

function addMessage(msg,type){

const li = document.createElement("li");
li.className = type;
li.textContent = msg;

document.getElementById("messages").appendChild(li);

}