// Import Twilio SDK
const twilio = require('twilio');

// Your Twilio Account SID and Auth Token from the Twilio Console
const accountSid = 'ACdc6e2d10b0f1555dae42101b0800ba4e'; // Replace with your Account SID
const authToken = '6c5b981d879f58f628b560e34b459da5';   // Replace with your Auth Token

// Create a Twilio client
const client = twilio(accountSid, authToken);

// Send a WhatsApp message
client.messages.create({
  body: 'Fall was detected',
  from: 'whatsapp:+14155238886',  // This is the Twilio sandbox number for WhatsApp
  to: 'whatsapp:+917022471803'   // Replace with the recipient's phone number in international format
})
.then(message => console.log('Message SID: ' + message.sid))  // Log message SID for confirmation
.catch(error => console.error('Error sending message: ' + error));  // Handle errors
