/**
 * NAACUS WhatsApp Chatbot Server
 * 
 * This server handles incoming WhatsApp messages via Twilio and responds
 * using the NAACUS AI chatbot service.
 */

const express = require('express');
const twilio = require('twilio');
require('dotenv').config();

// Import chatbot service (you'll need to copy this from the React app)
const chatbotService = require('./chatbotService');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Validate Twilio configuration
if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
  console.error('❌ Missing Twilio credentials in environment variables');
  console.error('Please set TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN');
  process.exit(1);
}

const MessagingResponse = twilio.twiml.MessagingResponse;

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    service: 'NAACUS WhatsApp Chatbot',
    timestamp: new Date().toISOString() 
  });
});

// Webhook verification endpoint (for WhatsApp Cloud API)
app.get('/whatsapp', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === process.env.WEBHOOK_VERIFY_TOKEN) {
    console.log('✅ Webhook verified successfully');
    res.status(200).send(challenge);
  } else {
    console.error('❌ Webhook verification failed');
    res.sendStatus(403);
  }
});

// Main WhatsApp message handler
app.post('/whatsapp', (req, res) => {
  try {
    const incomingMessage = req.body.Body || '';
    const from = req.body.From || 'unknown';
    const messageId = req.body.MessageSid;

    console.log(`📱 Incoming message from ${from}: "${incomingMessage}"`);

    // Process message using chatbot service
    const response = chatbotService.processMessage(incomingMessage);
    
    // Format response for WhatsApp
    const whatsappMessage = chatbotService.formatForWhatsApp(response);

    // Log conversation for analytics
    chatbotService.logConversation(incomingMessage, response, 'whatsapp');

    // Create Twilio response
    const twiml = new MessagingResponse();
    twiml.message(whatsappMessage);

    console.log(`✅ Sending response (${whatsappMessage.length} chars)`);

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
  } catch (error) {
    console.error('❌ Error processing message:', error);
    
    // Send error response to user
    const twiml = new MessagingResponse();
    twiml.message('Sorry, I encountered an error. Please try again or contact info@naacus.org for assistance.');
    
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('❌ Server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log('🚀 NAACUS WhatsApp Chatbot Server');
  console.log(`📡 Server listening on port ${PORT}`);
  console.log(`🔗 Webhook URL: http://localhost:${PORT}/whatsapp`);
  console.log(`💚 Health check: http://localhost:${PORT}/health`);
  console.log('\n⏳ Waiting for WhatsApp messages...\n');
});

module.exports = app;
