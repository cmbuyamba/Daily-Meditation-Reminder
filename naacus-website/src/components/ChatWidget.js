import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  makeStyles,
  shorthands,
  tokens,
  Text,
  Button,
  Input,
  Card,
} from '@fluentui/react-components';
import { Chat24Regular, Dismiss24Regular, Send24Filled } from '@fluentui/react-icons';
import { processMessage, logConversation, initializeCopilotStudio } from '../services/chatbotService';

const useStyles = makeStyles({
  container: {
    position: 'fixed',
    right: '4px',
    bottom: '4px',
    zIndex: 1300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    ...shorthands.gap('12px'),
  },
  teaserCard: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('10px'),
    backgroundColor: '#0f6cbd',
    color: tokens.colorNeutralForegroundInverted,
    ...shorthands.padding('12px', '16px'),
    ...shorthands.borderRadius('16px'),
    boxShadow: '0 8px 20px rgba(0,0,0,0.18)',
    maxWidth: '300px',
    cursor: 'pointer',
    '@media (max-width: 768px)': {
      maxWidth: 'auto',
      ...shorthands.padding('12px'),
    },
  },
  teaserText: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: 1.2,
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  avatarWrap: {
    position: 'relative',
    width: '52px',
    height: '52px',
    ...shorthands.borderRadius('50%'),
    backgroundColor: '#ffffff',
    boxShadow: '0 0 0 4px #0f6cbd inset',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInner: {
    width: '42px',
    height: '42px',
    ...shorthands.borderRadius('50%'),
    background: 'linear-gradient(135deg, #f3f6fc 0%, #bcd4f5 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#0f6cbd',
    fontWeight: 700,
    fontSize: '1rem',
  },
  avatarBadge: {
    position: 'absolute',
    top: '-2px',
    right: '-2px',
    width: '20px',
    height: '20px',
    ...shorthands.borderRadius('50%'),
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#0f6cbd',
  },
  chatPanel: {
    width: '380px',
    height: '520px',
    backgroundColor: '#ffffff',
    boxShadow: '0 16px 48px rgba(0,0,0,0.2)',
    ...shorthands.borderRadius('16px'),
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#ffffff',
    color: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...shorthands.padding('16px', '20px'),
    borderBottom: '1px solid #e0e0e0',
  },
  title: {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#000',
  },
  headerActions: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('12px'),
  },
  messages: {
    flex: 1,
    overflowY: 'auto',
    backgroundColor: '#f8f8f8',
    ...shorthands.padding('16px'),
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('10px'),
  },
  messageRow: {
    display: 'flex',
    alignItems: 'flex-start',
    ...shorthands.gap('8px'),
  },
  bubble: {
    maxWidth: '75%',
    ...shorthands.padding('10px','12px'),
    ...shorthands.borderRadius('12px'),
    fontSize: '0.9rem',
    lineHeight: 1.5,
  },
  bubbleBot: {
    backgroundColor: '#e6f2fb',
    color: '#0f2940',
  },
  bubbleUser: {
    backgroundColor: '#dff6dd',
    color: '#06310e',
    marginLeft: 'auto',
  },
  quickActions: {
    display: 'flex',
    flexWrap: 'wrap',
    ...shorthands.gap('6px'),
    ...shorthands.margin('6px', '0', '0', '0'),
  },
  quickActionButton: {
    fontSize: '0.8rem',
    minHeight: '28px',
    ...shorthands.padding('4px', '10px'),
  },
  relatedQuestions: {
    fontSize: '0.85rem',
    ...shorthands.margin('8px', '0', '0', '0'),
    color: '#0f2940',
  },
  relatedQuestion: {
    cursor: 'pointer',
    ...shorthands.padding('4px', '0'),
    '&:hover': {
      textDecoration: 'underline',
      color: '#0f6cbd',
    },
  },
  inputRow: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('10px'),
    ...shorthands.padding('14px', '16px'),
    borderTop: `1px solid #e0e0e0`,
    backgroundColor: '#ffffff',
  },
  sendButton: {
    minWidth: 'auto',
    height: '40px',
  },
  typingIndicator: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('4px'),
    ...shorthands.padding('8px', '12px'),
    backgroundColor: '#e6f2fb',
    ...shorthands.borderRadius('12px'),
    maxWidth: '60px',
  },
  typingDot: {
    width: '6px',
    height: '6px',
    backgroundColor: '#0f6cbd',
    ...shorthands.borderRadius('50%'),
    animation: 'typing 1.4s infinite',
  },
});

function ChatWidget() {
  const { t } = useTranslation();
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const listRef = useRef(null);

  // Initialize Copilot Studio when component mounts
  useEffect(() => {
    initializeCopilotStudio();
  }, []);

  // Initialize with greeting when opening
  useEffect(() => {
    if (open && messages.length === 0) {
      const initializeChat = async () => {
        const greeting = await processMessage('hi');
        setMessages([{ from: 'bot', text: greeting.text, quickActions: greeting.quickActions }]);
      };
      initializeChat();
    }
  }, [open, messages.length]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleBotResponse = async (userMessage) => {
    setIsTyping(true);
    
    // Simulate typing delay for natural feel
    setTimeout(async () => {
      const response = await processMessage(userMessage);
      
      // Log the conversation
      logConversation(userMessage, response, 'web');
      
      setMessages(prev => [...prev, { 
        from: 'bot', 
        text: response.text,
        quickActions: response.quickActions,
        relatedQuestions: response.relatedQuestions
      }]);
      setIsTyping(false);
    }, 600 + Math.random() * 400); // Random delay between 600-1000ms
  };

  const sendMessage = (messageText = null) => {
    const text = (messageText || input).trim();
    if (!text) return;
    
    setMessages(prev => [...prev, { from: 'user', text }]);
    setInput('');
    
    handleBotResponse(text);
  };

  const handleQuickAction = (questionText) => {
    sendMessage(questionText);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className={styles.container}>
      {!open && (
        <div className={styles.teaserCard} onClick={() => setOpen(true)}>
          <div className={styles.avatarWrap}>
            <div className={styles.avatarInner}>AI</div>
            <div className={styles.avatarBadge}><Chat24Regular /></div>
          </div>
          <div className={styles.teaserText}>
            <Text as="div" weight="semibold" style={{ color: '#fff', fontSize: '1.1rem' }}>{t('chat.needHelp')}</Text>
            <Text as="div" style={{ color: '#fff', fontSize: '1.1rem' }}>{t('chat.letsChat')}</Text>
          </div>
        </div>
      )}

      {open && (
        <Card className={styles.chatPanel}>
          <div className={styles.header}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <Text className={styles.title}>{t('chat.supportTitle')}</Text>
              <Text style={{ fontSize: '0.75rem', opacity: 0.7 }}>AI-Powered Assistant</Text>
            </div>
            <div className={styles.headerActions}>
              <Button appearance="transparent" size="small" icon={<Chat24Regular />} />
              <Button appearance="transparent" size="small" onClick={() => setOpen(false)} icon={<Dismiss24Regular />} />
            </div>
          </div>
          <div ref={listRef} className={styles.messages}>
            {messages.map((m, i) => (
              <div key={i}>
                <div className={styles.messageRow}>
                  <div className={`${styles.bubble} ${m.from === 'bot' ? styles.bubbleBot : styles.bubbleUser}`}>
                    {m.text}
                  </div>
                </div>
                {m.from === 'bot' && m.quickActions && m.quickActions.length > 0 && (
                  <div className={styles.quickActions}>
                    {m.quickActions.map(qa => (
                      <Button
                        key={qa.id}
                        appearance="outline"
                        size="small"
                        className={styles.quickActionButton}
                        onClick={() => handleQuickAction(qa.question)}
                      >
                        {qa.label}
                      </Button>
                    ))}
                  </div>
                )}
                {m.from === 'bot' && m.relatedQuestions && m.relatedQuestions.length > 0 && (
                  <div className={styles.relatedQuestions}>
                    <div style={{ fontWeight: 600, marginBottom: '4px' }}>Related questions:</div>
                    {m.relatedQuestions.map((q, idx) => (
                      <div 
                        key={idx} 
                        className={styles.relatedQuestion}
                        onClick={() => handleQuickAction(q)}
                      >
                        • {q}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className={styles.messageRow}>
                <div className={styles.typingIndicator}>
                  <div className={styles.typingDot} style={{ animationDelay: '0s' }}></div>
                  <div className={styles.typingDot} style={{ animationDelay: '0.2s' }}></div>
                  <div className={styles.typingDot} style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
          </div>
          <div className={styles.inputRow}>
            <Input
              appearance="outline"
              placeholder={t('chat.placeholder')}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              style={{ flex: 1 }}
            />
            <Button 
              appearance="primary" 
              className={styles.sendButton} 
              icon={<Send24Filled />} 
              onClick={() => sendMessage()}
              disabled={!input.trim()}
            />
          </div>
        </Card>
      )}
      
      <style>{`
        @keyframes typing {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
}

export default ChatWidget;
