import React, { useState } from 'react';
import {
  Button,
  Input,
  makeStyles,
  shorthands,
  tokens,
} from '@fluentui/react-components';

const useStyles = makeStyles({
  dialogBackdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },
  dialogWrapper: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10000,
    width: '90%',
    maxWidth: '500px',
    maxHeight: '90vh',
    overflowY: 'hidden',
    backgroundColor: tokens.colorNeutralBackground1,
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.padding('20px'),
  },
  formField: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('4px'),
    marginBottom: '6px',
  },
  label: {
    fontSize: '0.95rem',
    fontWeight: '600',
    color: tokens.colorNeutralForeground1,
  },
  required: {
    color: '#d13438',
  },
  paymentMethods: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    ...shorthands.gap('4px'),
    marginBottom: '6px',
  },
  paymentOption: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.gap('6px'),
    padding: '4px 6px',
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    ...shorthands.borderRadius('6px'),
    cursor: 'pointer',
    backgroundColor: tokens.colorNeutralBackground1,
    transition: 'all 0.2s ease',
    fontSize: '0.8rem',
    '&:hover': {
      borderColor: tokens.colorBrandBackground,
      backgroundColor: '#f3f2f1',
    },
  },
  paymentOptionSelected: {
    borderColor: tokens.colorBrandBackground,
    backgroundColor: 'rgba(45, 90, 123, 0.08)',
  },
  radioButton: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: `2px solid ${tokens.colorNeutralStroke1}`,
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    borderColor: tokens.colorBrandBackground,
    backgroundColor: tokens.colorBrandBackground,
  },
  radioButtonInner: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'white',
  },
  amountPresets: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    ...shorthands.gap('4px'),
    marginBottom: '8px',
  },
  amountButton: {
    padding: '4px',
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    ...shorthands.borderRadius('6px'),
    cursor: 'pointer',
    backgroundColor: tokens.colorNeutralBackground1,
    fontSize: '0.8rem',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    '&:hover': {
      borderColor: tokens.colorBrandBackground,
    },
  },
  amountButtonSelected: {
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundInverted,
    borderColor: tokens.colorBrandBackground,
  },
  dialogContent: {
    padding: '16px',
    overflowY: 'auto',
    flex: 1,
  },
  dialogTitle: {
    fontSize: '1.2rem',
    fontWeight: '700',
    marginBottom: '8px',
    color: tokens.colorNeutralForeground1,
  },
  closeButton: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.5rem',
    padding: '4px',
  },
  dialogActions: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'flex-end',
    padding: '16px 24px',
    borderTop: `1px solid ${tokens.colorNeutralStroke1}`,
  },
});

export function DonationDialog() {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    amount: '',
    message: '',
  });
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [selectedAmount, setSelectedAmount] = useState('');

  const amountPresets = [25, 50, 100, 250];

  const paymentMethods = [
    { id: 'card', label: 'Credit/Debit Card' },
    { id: 'paypal', label: 'PayPal' },
    { id: 'apple', label: 'Apple Pay' },
    { id: 'google', label: 'Google Pay' },
    { id: 'bank', label: 'Bank Transfer' },
    { id: 'crypto', label: 'Cryptocurrency' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setFormData(prev => ({
      ...prev,
      amount: amount.toString(),
    }));
  };

  const handleDonate = () => {
    // Validate form
    if (!formData.fullName || !formData.email || !formData.amount) {
      alert('Please fill in all required fields');
      return;
    }

    // Here you would integrate with actual payment processors
    console.log('Donation data:', {
      ...formData,
      paymentMethod: selectedPayment,
    });

    // For now, show success message
    alert(`Thank you for your donation of $${formData.amount}! We will process your ${selectedPayment} payment shortly.`);
    setOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      amount: '',
      message: '',
    });
    setSelectedAmount('');
    setSelectedPayment('card');
  };

  return (
    <>
      <Button
        appearance="primary"
        style={{
          backgroundColor: '#2d5a7b',
          color: 'white',
          minWidth: '100px',
          padding: '10px 16px',
          fontSize: '0.95rem',
          fontWeight: '600',
        }}
        onClick={() => setOpen(true)}
      >
        💝 Donate
      </Button>

      {open && (
        <div className={styles.dialogBackdrop} onClick={() => { setOpen(false); resetForm(); }}>
          <div className={styles.dialogWrapper} onClick={e => e.stopPropagation()}>
            <div className={styles.dialogContent}>
              <div style={{ position: 'relative', marginBottom: '20px' }}>
                <h2 className={styles.dialogTitle}>Make a Donation</h2>
                <button 
                  className={styles.closeButton}
                  onClick={() => { setOpen(false); resetForm(); }}
                >
                  ✕
                </button>
              </div>

              {/* Full Name */}
              <div className={styles.formField}>
                <label className={styles.label}>
                  Full Name <span className={styles.required}>*</span>
                </label>
                <Input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div className={styles.formField}>
                <label className={styles.label}>
                  Email <span className={styles.required}>*</span>
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                />
              </div>

              {/* Amount */}
              <div className={styles.formField}>
                <label className={styles.label}>
                  Donation Amount <span className={styles.required}>*</span>
                </label>
                <div className={styles.amountPresets}>
                  {amountPresets.map(amount => (
                    <button
                      key={amount}
                      className={`${styles.amountButton} ${
                        selectedAmount === amount ? styles.amountButtonSelected : ''
                      }`}
                      onClick={() => handleAmountSelect(amount)}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <Input
                  name="amount"
                  type="number"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="Enter custom amount"
                  min="1"
                />
              </div>

              {/* Payment Method */}
              <div className={styles.formField}>
                <label className={styles.label}>
                  Payment Method <span className={styles.required}>*</span>
                </label>
                <div className={styles.paymentMethods}>
                  {paymentMethods.map(method => (
                    <div
                      key={method.id}
                      className={`${styles.paymentOption} ${
                        selectedPayment === method.id ? styles.paymentOptionSelected : ''
                      }`}
                      onClick={() => setSelectedPayment(method.id)}
                    >
                      <div className={`${styles.radioButton} ${
                        selectedPayment === method.id ? styles.radioButtonSelected : ''
                      }`}>
                        {selectedPayment === method.id && <div className={styles.radioButtonInner}></div>}
                      </div>
                      <span>{method.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className={styles.formField}>
                <label className={styles.label}>Message (Optional)</label>
                <Input
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Add a message..."
                  multiline
                  rows={3}
                />
              </div>

              {/* Actions */}
              <div className={styles.dialogActions}>
                <Button
                  onClick={() => {
                    setOpen(false);
                    resetForm();
                  }}
                  appearance="secondary"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleDonate}
                  appearance="primary"
                  style={{
                    backgroundColor: '#2d5a7b',
                  }}
                >
                  Donate Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DonationDialog;
