# NAACUS AI Chatbot - WhatsApp Integration Guide

This document provides instructions for integrating the NAACUS AI chatbot with WhatsApp Business API.

## Overview

The NAACUS AI chatbot can be integrated with WhatsApp to provide automated FAQ responses to community members through WhatsApp messaging. This integration uses the same FAQ knowledge base and chatbot service as the web version.

## Prerequisites

1. **WhatsApp Business Account** - You need a verified WhatsApp Business account
2. **WhatsApp Business API Access** - Apply for WhatsApp Business API access through a Business Solution Provider (BSP) or directly through Meta
3. **Phone Number** - A dedicated phone number for the WhatsApp Business account
4. **Server/Cloud Platform** - A server to host the WhatsApp webhook (e.g., Azure Functions, AWS Lambda, or a Node.js server)

## Integration Options

### Option 1: Using Twilio (Recommended for Quick Setup)

Twilio provides an easy-to-use WhatsApp Business API integration.

#### Steps:

1. **Sign up for Twilio** at [twilio.com](https://www.twilio.com)
2. **Activate WhatsApp** in your Twilio console
3. **Set up a WhatsApp Sandbox** for testing
4. **Configure Webhook** to point to your chatbot endpoint

#### Environment Variables:

```bash
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886  # Sandbox number for testing
```

### Option 2: Direct WhatsApp Business API

For production use with your own phone number.

#### Steps:

1. **Apply for WhatsApp Business API** through Meta
2. **Verify your business**
3. **Set up webhook endpoint**
4. **Configure message templates**

## Implementation

### Serverless Function (Azure Functions Example)

Create a serverless function to handle WhatsApp messages:

```javascript
// azure-function/whatsapp-chatbot/index.js

const { processMessage, formatForWhatsApp, logConversation } = require('../chatbotService');

module.exports = async function (context, req) {
    context.log('WhatsApp webhook triggered');

    // Verify webhook (for initial setup)
    if (req.query['hub.mode'] === 'subscribe' && req.query['hub.verify_token'] === process.env.WEBHOOK_VERIFY_TOKEN) {
        context.res = {
            status: 200,
            body: req.query['hub.challenge']
        };
        return;
    }

    // Handle incoming WhatsApp message
    if (req.body && req.body.Body) {
        const userMessage = req.body.Body;
        const from = req.body.From;

        // Process message using chatbot service
        const response = processMessage(userMessage);
        const whatsappMessage = formatForWhatsApp(response);

        // Log conversation
        logConversation(userMessage, response, 'whatsapp');

        // Send response via Twilio
        const MessagingResponse = require('twilio').twiml.MessagingResponse;
        const twiml = new MessagingResponse();
        twiml.message(whatsappMessage);

        context.res = {
            status: 200,
            headers: { 'Content-Type': 'text/xml' },
            body: twiml.toString()
        };
    } else {
        context.res = {
            status: 400,
            body: "Invalid request"
        };
    }
};
```

### Node.js Express Server Example

```javascript
// server.js

const express = require('express');
const twilio = require('twilio');
const { processMessage, formatForWhatsApp, logConversation } = require('./chatbotService');

const app = express();
app.use(express.urlencoded({ extended: false }));

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

app.post('/whatsapp', (req, res) => {
    const userMessage = req.body.Body;
    const from = req.body.From;

    // Process message
    const response = processMessage(userMessage);
    const whatsappMessage = formatForWhatsApp(response);

    // Log conversation
    logConversation(userMessage, response, 'whatsapp');

    // Send response
    const twiml = new twilio.twiml.MessagingResponse();
    twiml.message(whatsappMessage);

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`WhatsApp chatbot server listening on port ${PORT}`);
});
```

## Configuration Files

### package.json (for WhatsApp server)

```json
{
  "name": "naacus-whatsapp-chatbot",
  "version": "1.0.0",
  "description": "NAACUS WhatsApp chatbot integration",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "twilio": "^4.19.0",
    "dotenv": "^16.3.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

### .env.example (WhatsApp Configuration)

```bash
# Twilio Configuration
TWILIO_ACCOUNT_SID=your_account_sid_here
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886

# Webhook Configuration
WEBHOOK_VERIFY_TOKEN=your_secure_random_token
PORT=3001

# Optional: Database for conversation logging
DATABASE_URL=your_database_url
```

## Testing

### Testing with Twilio Sandbox

1. Go to Twilio Console > Messaging > Try it out > Send a WhatsApp message
2. Follow the instructions to join your sandbox
3. Send a test message to your sandbox number
4. The chatbot should respond with FAQ answers

### Test Messages:

```
Test 1: "What is NAACUS?"
Expected: Information about NAACUS organization

Test 2: "How can I join?"
Expected: Membership information

Test 3: "Next conference"
Expected: Conference 2027 information

Test 4: "Contact information"
Expected: Email and contact details
```

## Deployment

### Azure Functions Deployment

1. **Create Azure Function App**:
   ```bash
   az functionapp create --resource-group naacus-rg --consumption-plan-location eastus \
     --runtime node --functions-version 4 --name naacus-whatsapp-bot --storage-account naacusstorage
   ```

2. **Deploy function**:
   ```bash
   func azure functionapp publish naacus-whatsapp-bot
   ```

3. **Configure environment variables** in Azure Portal

4. **Set webhook URL** in Twilio: `https://naacus-whatsapp-bot.azurewebsites.net/api/whatsapp`

### AWS Lambda Deployment

1. **Create Lambda function** with Node.js runtime
2. **Configure API Gateway** to create HTTP endpoint
3. **Set environment variables** in Lambda configuration
4. **Deploy code** using AWS CLI or console
5. **Set webhook URL** in Twilio to Lambda endpoint

## Message Templates (Optional)

For proactive messaging, you can create WhatsApp message templates:

### Welcome Message Template
```
Hello! 👋 Welcome to NAACUS WhatsApp support. 

I'm here to help answer your questions about:
• Our organization and mission
• Membership information
• Upcoming events and conferences
• Programs and activities

How can I assist you today?
```

### Event Notification Template
```
🎉 NAACUS Conference 2027 Update!

{{1}} - Event details
{{2}} - Date and location

Reply with "conference" for more information or visit our website.
```

## Best Practices

1. **Response Time**: Keep responses concise for WhatsApp (under 1600 characters)
2. **Formatting**: Use WhatsApp markdown (*bold*, _italic_)
3. **Quick Replies**: Provide numbered options for users to choose
4. **Session Management**: Track conversation context for better responses
5. **Fallback**: Always provide contact information when chatbot can't help
6. **Privacy**: Don't store sensitive user information in logs

## Monitoring and Analytics

Track important metrics:
- Message volume
- Response accuracy
- Common questions
- User satisfaction
- Conversation completion rate

Use services like:
- Azure Application Insights
- AWS CloudWatch
- Google Analytics

## Compliance

Ensure compliance with:
- **WhatsApp Business Policy**: No spam, appropriate content
- **GDPR**: If serving EU users
- **Data Privacy**: Secure handling of user messages
- **Terms of Service**: Follow WhatsApp Business API terms

## Limitations

- **24-hour Window**: Can only send template messages after 24 hours
- **Message Templates**: Must be pre-approved by WhatsApp
- **Rate Limits**: Check your tier limits
- **Media Support**: Configure separately for images/videos

## Support and Troubleshooting

### Common Issues:

1. **Messages not received**
   - Check webhook URL is publicly accessible
   - Verify webhook is configured correctly in Twilio
   - Check server logs for errors

2. **Bot not responding**
   - Verify environment variables are set
   - Check chatbot service is imported correctly
   - Review server logs for errors

3. **Incorrect responses**
   - Review FAQ data for accuracy
   - Adjust similarity threshold in chatbotService.js
   - Add more keywords to FAQ entries

### Getting Help:

- Twilio Support: [support.twilio.com](https://support.twilio.com)
- WhatsApp Business API Docs: [developers.facebook.com/docs/whatsapp](https://developers.facebook.com/docs/whatsapp)
- NAACUS Technical Team: info@naacus.org

## Cost Considerations

- **Twilio**: Pay per message (varies by country)
- **WhatsApp Business API**: Monthly fee + per-conversation pricing
- **Server Costs**: Azure Functions/AWS Lambda based on usage

**Estimated Monthly Cost** (for ~1000 conversations):
- Twilio WhatsApp: ~$50-100
- Cloud hosting: ~$20-50
- **Total**: ~$70-150/month

## Roadmap

Future enhancements:
- [ ] Multi-language support (English, French)
- [ ] Rich media responses (images, videos)
- [ ] Interactive buttons and lists
- [ ] Integration with CRM system
- [ ] Advanced NLP using AI services
- [ ] Voice message support
- [ ] Group chat support for communities

---

**Built with ❤️ for the NAACUS community**  
*Together with Christ*
