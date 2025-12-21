/**
 * Microsoft Copilot Studio Direct Line API Service
 * 
 * This service handles communication with Microsoft Copilot Studio
 * via the Direct Line API protocol (Azure Bot Service)
 * 
 * Documentation:
 * - https://docs.microsoft.com/en-us/azure/bot-service/rest-api/bot-framework-rest-direct-line-3-0
 * - https://learn.microsoft.com/en-us/microsoft-copilot-studio/publication-connect-bot-to-custom-application
 */

import copilotStudioConfig, { validateConfig } from '../config/copilotStudioConfig';

class CopilotStudioService {
  constructor() {
    this.conversationId = null;
    this.token = null;
    this.watermark = null;
    this.streamUrl = null;
    this.pollingInterval = null;
    this.userId = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Initialize connection to Copilot Studio via Direct Line
   * @returns {Promise<object>} Connection details
   */
  async startConversation() {
    const validation = validateConfig();
    if (!validation.isValid) {
      console.error('Copilot Studio configuration errors:', validation.errors);
      throw new Error('Invalid Copilot Studio configuration');
    }

    try {
      const response = await fetch(`${copilotStudioConfig.directLineEndpoint}/conversations`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${copilotStudioConfig.directLineSecret}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to start conversation: ${response.statusText}`);
      }

      const data = await response.json();
      this.conversationId = data.conversationId;
      this.token = data.token;
      this.streamUrl = data.streamUrl;

      console.log('Copilot Studio conversation started:', this.conversationId);
      return {
        conversationId: this.conversationId,
        success: true,
      };
    } catch (error) {
      console.error('Error starting Copilot Studio conversation:', error);
      throw error;
    }
  }

  /**
   * Send a message to Copilot Studio
   * @param {string} text - The message text
   * @param {object} metadata - Additional metadata (user info, context, etc.)
   * @returns {Promise<object>} Send confirmation
   */
  async sendMessage(text, metadata = {}) {
    if (!this.conversationId) {
      await this.startConversation();
    }

    try {
      const activity = {
        type: 'message',
        from: {
          id: this.userId,
          name: metadata.userName || 'User',
        },
        text: text,
        locale: copilotStudioConfig.bot.locale,
        timestamp: new Date().toISOString(),
        channelData: metadata.channelData || {},
      };

      const response = await fetch(
        `${copilotStudioConfig.directLineEndpoint}/conversations/${this.conversationId}/activities`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${this.token || copilotStudioConfig.directLineSecret}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(activity),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to send message: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        id: data.id,
        success: true,
      };
    } catch (error) {
      console.error('Error sending message to Copilot Studio:', error);
      throw error;
    }
  }

  /**
   * Get messages from Copilot Studio
   * @returns {Promise<Array>} Array of activities/messages
   */
  async getMessages() {
    if (!this.conversationId) {
      return [];
    }

    try {
      const url = new URL(
        `${copilotStudioConfig.directLineEndpoint}/conversations/${this.conversationId}/activities`
      );
      
      if (this.watermark) {
        url.searchParams.append('watermark', this.watermark);
      }

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.token || copilotStudioConfig.directLineSecret}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to get messages: ${response.statusText}`);
      }

      const data = await response.json();
      this.watermark = data.watermark;

      // Filter to only bot messages that are new
      const botMessages = data.activities
        .filter(activity => activity.from.id !== this.userId && activity.type === 'message')
        .map(activity => ({
          id: activity.id,
          text: activity.text,
          timestamp: activity.timestamp,
          type: activity.type,
          suggestedActions: activity.suggestedActions,
          attachments: activity.attachments,
          channelData: activity.channelData,
        }));

      return botMessages;
    } catch (error) {
      console.error('Error getting messages from Copilot Studio:', error);
      return [];
    }
  }

  /**
   * Start polling for new messages (alternative to WebSocket)
   * @param {Function} onMessage - Callback when new message arrives
   * @param {number} interval - Polling interval in ms (default 1000)
   */
  startPolling(onMessage, interval = 1000) {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
    }

    let lastMessageCount = 0;

    this.pollingInterval = setInterval(async () => {
      const messages = await this.getMessages();
      
      // Only trigger callback for new messages
      if (messages.length > lastMessageCount) {
        const newMessages = messages.slice(lastMessageCount);
        newMessages.forEach(message => onMessage(message));
      }
      
      lastMessageCount = messages.length;
    }, interval);
  }

  /**
   * Stop polling for messages
   */
  stopPolling() {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
      this.pollingInterval = null;
    }
  }

  /**
   * End the conversation
   */
  async endConversation() {
    this.stopPolling();
    
    if (this.conversationId) {
      try {
        // Send end of conversation activity
        await fetch(
          `${copilotStudioConfig.directLineEndpoint}/conversations/${this.conversationId}/activities`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${this.token || copilotStudioConfig.directLineSecret}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              type: 'endOfConversation',
              from: { id: this.userId },
            }),
          }
        );
      } catch (error) {
        console.error('Error ending conversation:', error);
      }

      this.conversationId = null;
      this.watermark = null;
      this.streamUrl = null;
    }
  }

  /**
   * Reset the service (for new conversations)
   */
  reset() {
    this.endConversation();
    this.userId = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
}

// Export singleton instance
const copilotStudioService = new CopilotStudioService();
export default copilotStudioService;
