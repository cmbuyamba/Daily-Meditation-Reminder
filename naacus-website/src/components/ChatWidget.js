import React, { useState, useRef, useEffect } from 'react';
import {
  makeStyles,
  shorthands,
  tokens,
  Text,
  Button,
  Input,
  Textarea,
  Card,
} from '@fluentui/react-components';
import { Chat24Regular, Dismiss24Regular, Send24Filled } from '@fluentui/react-icons';

const useStyles = makeStyles({
  container: {
    position: 'fixed',
    right: '24px',
    bottom: '24px',
    zIndex: 1100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    ...shorthands.gap('12px'),
  },
  teaserCard: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('12px'),
    backgroundColor: '#0f6cbd',
    color: tokens.colorNeutralForegroundInverted,
    ...shorthands.padding('14px', '18px'),
    ...shorthands.borderRadius('14px'),
    boxShadow: '0 6px 24px rgba(0,0,0,0.2)',
    cursor: 'pointer',
  },
  avatar: {
    width: '44px',
    height: '44px',
    ...shorthands.borderRadius('50%'),
    background: 'linear-gradient(135deg, #ffffff 0%, #bcd4f5 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#0f6cbd',
    fontWeight: 700,
    fontSize: '1rem',
  },
  chatPanel: {
    width: '340px',
    height: '420px',
    backgroundColor: '#ffffff',
    boxShadow: '0 14px 40px rgba(0,0,0,0.24)',
    ...shorthands.borderRadius('12px'),
    overflow: 'hidden',
  },
  header: {
    backgroundColor: '#0f6cbd',
    color: tokens.colorNeutralForegroundInverted,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...shorthands.padding('12px', '14px'),
  },
  title: {
    fontSize: '1rem',
    fontWeight: 600,
  },
  messages: {
    height: '290px',
    overflowY: 'auto',
    backgroundColor: '#f5f7fb',
    ...shorthands.padding('12px'),
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
    maxWidth: '70%',
    ...shorthands.padding('10px','12px'),
    ...shorthands.borderRadius('12px'),
    fontSize: '0.95rem',
    lineHeight: 1.4,
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
  inputRow: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('8px'),
    ...shorthands.padding('10px'),
    borderTop: `1px solid ${tokens.colorNeutralStroke1}`,
    backgroundColor: '#fff',
  },
  sendButton: {
    minWidth: 'auto',
    height: '40px',
  },
});

function ChatWidget() {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi there! Need help? Let's chat." },
  ]);
  const [input, setInput] = useState('');
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, open]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;
    setMessages(prev => [...prev, { from: 'user', text }]);
    setInput('');
    // Simulate bot reply
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'bot', text: 'Thanks! A NAACUS team member will contact you shortly.' }]);
    }, 800);
  };

  return (
    <div className={styles.container}>
      {!open && (
        <div className={styles.teaserCard} onClick={() => setOpen(true)}>
          <div className={styles.avatar}>💬</div>
          <div>
            <Text weight="semibold" style={{ color: '#fff' }}>Need help?</Text>
            <Text style={{ color: '#fff' }}>Let's chat</Text>
          </div>
        </div>
      )}

      {open && (
        <Card className={styles.chatPanel}>
          <div className={styles.header}>
            <Text className={styles.title}>NAACUS Support</Text>
            <Button appearance="transparent" onClick={() => setOpen(false)} icon={<Dismiss24Regular />} />
          </div>
          <div ref={listRef} className={styles.messages}>
            {messages.map((m, i) => (
              <div key={i} className={styles.messageRow}>
                <div className={`${styles.bubble} ${m.from === 'bot' ? styles.bubbleBot : styles.bubbleUser}`}>{m.text}</div>
              </div>
            ))}
          </div>
          <div className={styles.inputRow}>
            <Input
              appearance="outline"
              placeholder="Type your message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ flex: 1 }}
            />
            <Button appearance="primary" className={styles.sendButton} icon={<Send24Filled />} onClick={sendMessage} />
          </div>
        </Card>
      )}

      {/* Floating toggle button when open on small screens */}
      {open && (
        <Button appearance="primary" icon={<Chat24Regular />} onClick={() => setOpen(false)} style={{ display: 'none' }} />
      )}
    </div>
  );
}

export default ChatWidget;
