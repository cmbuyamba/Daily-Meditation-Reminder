# NAACUS AI Chatbot Documentation

## Overview

The NAACUS AI Chatbot is an intelligent FAQ-answering system designed to assist visitors on the NAACUS website and WhatsApp with common questions about the organization, membership, events, programs, and contact information.

## Features

### ✅ Web Chatbot
- **Modern UI**: Fluent UI-based chat interface
- **Real-time Responses**: Instant FAQ matching
- **Quick Actions**: Pre-defined common questions
- **Related Questions**: Contextual suggestions
- **Typing Indicators**: Natural conversation feel
- **Mobile Responsive**: Works on all devices

### ✅ WhatsApp Integration
- **Business API Ready**: Twilio integration included
- **Multi-platform**: Same AI logic for web and WhatsApp
- **Rich Formatting**: WhatsApp-formatted responses
- **Quick Options**: Numbered menu selections
- **Scalable**: Ready for production deployment

### ✅ AI Capabilities
- **Natural Language Processing**: Keyword-based matching
- **Fuzzy Matching**: Handles variations in phrasing
- **Context Awareness**: Category-based related questions
- **Confidence Scoring**: Quality assurance for answers
- **Conversation Logging**: Analytics and improvement

## Architecture

```
┌─────────────────┐         ┌──────────────────┐
│   Web Browser   │         │    WhatsApp      │
│   (ChatWidget)  │         │   (via Twilio)   │
└────────┬────────┘         └────────┬─────────┘
         │                           │
         └───────────┬───────────────┘
                     │
              ┌──────▼──────┐
              │  Chatbot    │
              │  Service    │
              └──────┬──────┘
                     │
              ┌──────▼──────┐
              │    FAQ      │
              │  Knowledge  │
              │    Base     │
              └─────────────┘
```

## Components

### 1. FAQ Knowledge Base (`src/data/faqData.js`)

Contains structured FAQ data with:
- **Categories**: About, Membership, Events, Programs, Contact, General
- **Questions**: Common user queries
- **Keywords**: Alternative phrasings and related terms
- **Answers**: Accurate, concise responses

**Example FAQ Entry:**
```javascript
{
  id: 'about-1',
  category: 'about',
  question: 'What is NAACUS?',
  keywords: ['what is naacus', 'about naacus', 'naacus meaning'],
  answer: 'NAACUS stands for the National Association of African Catholics...'
}
```

### 2. Chatbot Service (`src/services/chatbotService.js`)

Core AI logic including:
- **Message Processing**: Analyzes user input
- **Similarity Matching**: Finds best FAQ match
- **Response Generation**: Creates appropriate replies
- **WhatsApp Formatting**: Platform-specific output

**Key Functions:**
```javascript
processMessage(userMessage, context)     // Main processing
findBestMatch(userQuestion)              // FAQ matching
formatForWhatsApp(response)              // WhatsApp formatting
logConversation(message, response)       // Analytics
```

### 3. Chat Widget (`src/components/ChatWidget.js`)

React component providing:
- **Chat Interface**: Modern, accessible UI
- **Message History**: Conversation tracking
- **Quick Actions**: One-click questions
- **Related Questions**: Contextual suggestions
- **Typing Animation**: Visual feedback

### 4. WhatsApp Server (`whatsapp-server/`)

Node.js webhook server for:
- **Twilio Integration**: WhatsApp Business API
- **Message Handling**: Incoming message processing
- **Response Sending**: Automated replies
- **Health Monitoring**: Server status checks

## FAQ Categories

### About NAACUS
- What is NAACUS?
- Mission and vision
- Motto and values
- Who we serve
- What we do

### Membership
- How to join
- Membership benefits
- Fees and dues

### Events
- Conference information
- NAACUS 2025 accomplishments
- NAACUS 2027 details
- Other events and activities

### Programs
- Program offerings
- How to get involved
- Family support
- Volunteer opportunities

### Contact
- Contact information
- Newsletter subscription
- Social media

### General
- Resources
- Language support
- Donations

## How It Works

### Web Chatbot Flow

1. **User Opens Chat**: Clicks on chat widget
2. **Greeting Message**: Bot welcomes user with quick actions
3. **User Asks Question**: Types or selects a question
4. **Message Processing**:
   - Normalize input
   - Check for greetings/thanks
   - Find best FAQ match
   - Calculate confidence score
5. **Response Generation**:
   - Provide answer if confident match found
   - Suggest related questions
   - Offer quick actions if no match
6. **Display Response**: Show answer with formatting
7. **Log Conversation**: Track for analytics

### WhatsApp Flow

1. **User Sends Message**: WhatsApp message to business number
2. **Twilio Webhook**: Forwards to server endpoint
3. **Message Processing**: Same logic as web
4. **Format for WhatsApp**: Convert to WhatsApp markdown
5. **Send Response**: Twilio sends reply
6. **Log Conversation**: Track platform-specific data

## Customization

### Adding New FAQs

Edit `src/data/faqData.js`:

```javascript
{
  id: 'new-faq-1',
  category: faqCategories.GENERAL,
  question: 'Your new question?',
  keywords: ['keyword1', 'keyword2', 'phrase'],
  answer: 'Your detailed answer here.'
}
```

### Modifying Quick Actions

Edit `quickActions` array in `faqData.js`:

```javascript
{ 
  id: 'qa-5', 
  label: 'New Action', 
  question: 'The question to ask' 
}
```

### Adjusting Matching Algorithm

Modify `calculateSimilarity()` in `chatbotService.js`:

```javascript
const minThreshold = 0.25;  // Adjust sensitivity (0-1)
const keywordBoost = 1.2;   // Keyword weight multiplier
```

### Changing UI Appearance

Edit `ChatWidget.js` styles:

```javascript
const useStyles = makeStyles({
  chatPanel: {
    width: '360px',      // Change width
    height: '480px',     // Change height
    // ... other styles
  }
});
```

## Testing

### Web Chatbot

Run React tests:
```bash
cd naacus-website
npm test
```

Test specific file:
```bash
npm test chatbotService.test.js
```

### WhatsApp Server

Run standalone tests:
```bash
cd whatsapp-server
node test-chatbot.js
```

### Manual Testing

**Test Questions:**
- "What is NAACUS?"
- "How can I join?"
- "When is the next conference?"
- "How do I contact you?"
- "Tell me about NAACUS 2025"
- "How can I get involved?"

**Expected Behaviors:**
- Accurate answers for known questions
- Related question suggestions
- Quick action buttons
- Polite fallback for unknown questions
- Thank you acknowledgment

## Deployment

### Web Chatbot

Already integrated into the React app:
1. Build the React app: `npm run build`
2. Deploy to hosting (Azure, Netlify, Vercel)
3. Chatbot is automatically included

### WhatsApp Server

See [WHATSAPP_INTEGRATION.md](../WHATSAPP_INTEGRATION.md) for:
- Twilio setup
- Environment configuration
- Server deployment (Azure, AWS, Heroku)
- Webhook configuration
- Testing and monitoring

## Performance

### Response Times
- **Web**: < 100ms (local processing)
- **WhatsApp**: < 1s (including network)

### Scalability
- **Concurrent Users**: Unlimited (stateless)
- **FAQ Database**: Up to 1000+ entries
- **Message Rate**: Limited by hosting/Twilio

### Optimization Tips
- Cache FAQ data in memory
- Use CDN for web assets
- Implement rate limiting
- Add database for conversation history
- Consider cloud-based NLP for complex queries

## Analytics

### Metrics to Track

1. **Usage Metrics**
   - Total conversations
   - Messages per conversation
   - Platform breakdown (web/WhatsApp)
   - Peak usage times

2. **Performance Metrics**
   - Response accuracy (confidence scores)
   - FAQ match rate
   - Fallback rate
   - Popular questions

3. **User Satisfaction**
   - Conversation completion rate
   - Thank you messages
   - Follow-up questions
   - Escalation to human support

### Implementation

Add analytics service integration:

```javascript
// Example: Google Analytics
logConversation(userMessage, botResponse, platform) {
  // ... existing logging
  
  // Add analytics event
  gtag('event', 'chatbot_interaction', {
    platform: platform,
    faq_id: botResponse.faqId,
    confidence: botResponse.confidence,
    category: botResponse.category
  });
}
```

## Future Enhancements

### Short-term
- [ ] Multi-language support (French)
- [ ] Voice input/output
- [ ] Rich media responses (images, videos)
- [ ] Interactive buttons in WhatsApp
- [ ] Conversation history persistence

### Medium-term
- [ ] Integration with OpenAI/GPT for advanced NLP
- [ ] CRM integration (track inquiries)
- [ ] Email notification for unanswered questions
- [ ] Admin dashboard for FAQ management
- [ ] A/B testing for responses

### Long-term
- [ ] Machine learning from conversations
- [ ] Sentiment analysis
- [ ] Proactive messaging (event reminders)
- [ ] Group chat support
- [ ] Video chat escalation

## Troubleshooting

### Common Issues

**Problem**: Chatbot not responding
- **Check**: Console errors in browser DevTools
- **Check**: chatbotService imported correctly
- **Check**: FAQ data loaded

**Problem**: Incorrect matches
- **Solution**: Add more keywords to FAQ
- **Solution**: Adjust similarity threshold
- **Solution**: Review user's exact phrasing

**Problem**: WhatsApp not working
- **Check**: Twilio webhook configured
- **Check**: Server publicly accessible
- **Check**: Environment variables set
- **Check**: Server logs for errors

### Debug Mode

Enable debug logging:

```javascript
// In chatbotService.js
const DEBUG = true;

if (DEBUG) {
  console.log('User message:', userMessage);
  console.log('Best match:', match);
  console.log('Confidence:', score);
}
```

## Support

### Documentation
- [Main README](../README.md)
- [WhatsApp Integration Guide](../WHATSAPP_INTEGRATION.md)
- [Deployment Guide](../DEPLOYMENT.md)

### Contact
- **Technical Support**: info@naacus.org
- **Bug Reports**: GitHub Issues
- **Feature Requests**: GitHub Issues

## License

Copyright © 2024 NAACUS. All rights reserved.

---

**Built with ❤️ for the NAACUS community**  
*Together with Christ*
