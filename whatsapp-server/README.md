# NAACUS WhatsApp Chatbot Server

A Node.js webhook server for the NAACUS AI chatbot that integrates with WhatsApp via Twilio.

## Features

- ✅ AI-powered FAQ responses
- ✅ Natural language understanding
- ✅ Quick action suggestions
- ✅ Related question recommendations
- ✅ Conversation logging
- ✅ WhatsApp-formatted responses
- ✅ Health check endpoint

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your Twilio credentials:

```bash
cp .env.example .env
```

Edit `.env` with your Twilio credentials:
```
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
WEBHOOK_VERIFY_TOKEN=your_secure_token
```

### 3. Run the Server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

### 4. Configure Twilio Webhook

1. Go to your Twilio Console
2. Navigate to Messaging > Settings > WhatsApp Sandbox
3. Set the webhook URL to: `https://your-domain.com/whatsapp`
4. Save the configuration

## Testing Locally

### Using ngrok

To test locally with Twilio, use ngrok to expose your local server:

```bash
# Install ngrok
npm install -g ngrok

# Start your server
npm start

# In another terminal, start ngrok
ngrok http 3001
```

Then use the ngrok URL (e.g., `https://abc123.ngrok.io/whatsapp`) as your Twilio webhook.

### Test the Chatbot

Send WhatsApp messages to your Twilio sandbox number:

**Test Message 1:**
```
What is NAACUS?
```

**Expected Response:**
```
NAACUS stands for the National Association of African Catholics in the United States. We unite African Catholic communities across the nation to promote faith and heritage, strengthen families, and cultivate leaders—ensuring full participation in the life of the Church in the U.S. while supporting the Church in Africa.

*You might also be interested in:*
1. What is NAACUS's mission?
2. What is NAACUS's motto?
```

**Test Message 2:**
```
How can I join?
```

**Test Message 3:**
```
Next conference
```

## API Endpoints

### POST /whatsapp
Main webhook endpoint for incoming WhatsApp messages.

### GET /whatsapp
Webhook verification endpoint.

### GET /health
Health check endpoint that returns server status.

```json
{
  "status": "healthy",
  "service": "NAACUS WhatsApp Chatbot",
  "timestamp": "2024-12-21T08:00:00.000Z"
}
```

## Project Structure

```
whatsapp-server/
├── server.js              # Main Express server
├── chatbotService.js      # AI chatbot logic
├── package.json           # Dependencies
├── .env.example           # Environment template
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## FAQ Knowledge Base

The chatbot uses a built-in FAQ knowledge base covering:
- **About NAACUS**: Mission, vision, motto
- **Membership**: How to join, benefits
- **Events**: Conference information
- **Programs**: Activities and involvement
- **Contact**: How to reach NAACUS

To add or modify FAQs, edit the `faqData` array in `chatbotService.js`.

## Deployment

### Deploy to Azure

```bash
# Create Azure Web App
az webapp create --resource-group naacus-rg --plan naacus-plan \
  --name naacus-whatsapp-bot --runtime "NODE|18-lts"

# Configure environment variables
az webapp config appsettings set --resource-group naacus-rg \
  --name naacus-whatsapp-bot \
  --settings TWILIO_ACCOUNT_SID="your_sid" TWILIO_AUTH_TOKEN="your_token"

# Deploy code
az webapp deployment source config-zip --resource-group naacus-rg \
  --name naacus-whatsapp-bot --src whatsapp-server.zip
```

### Deploy to AWS (Elastic Beanstalk)

```bash
# Initialize EB application
eb init -p node.js-18 naacus-whatsapp-bot

# Create environment
eb create naacus-whatsapp-env

# Set environment variables
eb setenv TWILIO_ACCOUNT_SID=your_sid TWILIO_AUTH_TOKEN=your_token

# Deploy
eb deploy
```

### Deploy to Heroku

```bash
# Create Heroku app
heroku create naacus-whatsapp-bot

# Set environment variables
heroku config:set TWILIO_ACCOUNT_SID=your_sid
heroku config:set TWILIO_AUTH_TOKEN=your_token

# Deploy
git push heroku main
```

## Monitoring

### View Logs

```bash
# Local development
npm start

# Heroku
heroku logs --tail

# Azure
az webapp log tail --resource-group naacus-rg --name naacus-whatsapp-bot
```

### Metrics to Track

- Message volume
- Response time
- FAQ match rate
- Popular questions
- Error rate

## Security

- ✅ Environment variables for credentials
- ✅ Webhook verification
- ✅ Input validation
- ✅ Error handling
- ⚠️ Consider rate limiting for production
- ⚠️ Add authentication for admin endpoints

## Troubleshooting

### Server won't start
- Check Node.js version (18+)
- Verify all dependencies installed
- Check environment variables are set

### Messages not received
- Verify webhook URL is correct in Twilio
- Check server is publicly accessible
- Review Twilio webhook logs

### Incorrect responses
- Check FAQ data is loaded correctly
- Adjust similarity threshold
- Review chatbot logs

## Support

For issues or questions:
- Technical support: info@naacus.org
- Twilio documentation: https://www.twilio.com/docs/whatsapp
- GitHub Issues: [Create an issue]

## License

Copyright © 2024 NAACUS. All rights reserved.

---

**Built with ❤️ for the NAACUS community**  
*Together with Christ*
