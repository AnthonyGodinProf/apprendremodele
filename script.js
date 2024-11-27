// Fonction pour afficher le message
function showMessage(title, text) {
  const messageBox = document.getElementById("message-box");
  const messageTitle = document.getElementById("message-title");
  const messageText = document.getElementById("message-text");

  messageTitle.innerText = title;
  messageText.innerText = text;
  messageBox.classList.remove("hidden");
}

// Fonction pour cacher le message
function hideMessage() {
  const messageBox = document.getElementById("message-box");
  messageBox.classList.add("hidden");
}
