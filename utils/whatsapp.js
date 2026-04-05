// whatsapp.js

// Function to send a WhatsApp message
function sendMessage(to, message) {
    // logic to send message
    console.log(`Sending message to ${to}: ${message}`);
}

// Function to mark a message as read
function markAsRead(messageId) {
    // logic to mark message as read
    console.log(`Marking message ${messageId} as read`);
}

module.exports = { sendMessage, markAsRead };