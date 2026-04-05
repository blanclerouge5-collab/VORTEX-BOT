// messageHandler.js

const Message = require('./Message');
const autoResponses = require('./autoResponses');

const handleMessage = (msg) => {
    // Custom logic to handle incoming messages
    const response = autoResponses.getResponse(msg);
    return response;
};

module.exports = handleMessage;