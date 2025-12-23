/**
 * Contact Service
 * Handles CRUD operations for contact inquiries
 * 
 * Currently uses mock data. Backend integration:
 * - POST /api/contact - Submit contact inquiry
 * - GET /api/contact - List all inquiries
 * - GET /api/contact/:id - Get single inquiry
 * - PUT /api/contact/:id - Update inquiry (admin)
 * - DELETE /api/contact/:id - Delete inquiry (admin)
 */

import { mockDataStores, generateId, getCurrentTimestamp } from './mockData';

const { contactStore } = mockDataStores;

/**
 * Submit contact inquiry
 * @param {Object} contactData - Contact form data
 * @returns {Promise<Object>} Created inquiry
 */
export const submitContactInquiry = async (contactData) => {
  return new Promise((resolve, reject) => {
    try {
      // Simulate API delay
      setTimeout(() => {
        const inquiry = {
          id: generateId(),
          name: contactData.name,
          email: contactData.email,
          organization: contactData.organization || '',
          phone: contactData.phone || '',
          subject: contactData.subject || 'General Inquiry',
          message: contactData.message,
          topic: contactData.topic || 'other', // membership, volunteer, events, donation, partnership, feedback, other
          status: 'new', // new, in_progress, responded, closed
          notes: '',
          submittedAt: getCurrentTimestamp(),
          updatedAt: getCurrentTimestamp(),
          respondedAt: null
        };

        contactStore.push(inquiry);

        resolve({
          success: true,
          data: inquiry,
          message: 'Your inquiry has been submitted successfully. We will respond shortly.'
        });
      }, 500);
    } catch (error) {
      reject({
        success: false,
        message: 'Failed to submit contact inquiry',
        error: error.message
      });
    }
  });
};

/**
 * Get all contact inquiries
 * @param {Object} options - Query options (limit, offset, status, topic)
 * @returns {Promise<Object>} List of inquiries
 */
export const getContactInquiries = async (options = {}) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const { limit = 10, offset = 0, status = null, topic = null } = options;
      
      let filtered = [...contactStore];
      
      if (status) {
        filtered = filtered.filter(c => c.status === status);
      }

      if (topic) {
        filtered = filtered.filter(c => c.topic === topic);
      }

      // Sort by date, newest first
      filtered.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt));

      const total = filtered.length;
      const paginatedData = filtered.slice(offset, offset + limit);

      resolve({
        success: true,
        data: paginatedData,
        pagination: {
          total,
          limit,
          offset,
          pages: Math.ceil(total / limit)
        }
      });
    }, 300);
  });
};

/**
 * Get single inquiry by ID
 * @param {string} id - Inquiry ID
 * @returns {Promise<Object>} Inquiry details
 */
export const getContactInquiryById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const inquiry = contactStore.find(c => c.id === id);

      if (inquiry) {
        resolve({
          success: true,
          data: inquiry
        });
      } else {
        reject({
          success: false,
          message: 'Inquiry not found',
          status: 404
        });
      }
    }, 300);
  });
};

/**
 * Update contact inquiry (admin only)
 * @param {string} id - Inquiry ID
 * @param {Object} updates - Fields to update (status, notes, respondedAt)
 * @returns {Promise<Object>} Updated inquiry
 */
export const updateContactInquiry = async (id, updates) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = contactStore.findIndex(c => c.id === id);

      if (index !== -1) {
        const inquiry = contactStore[index];
        
        // If status changed to 'responded' or 'closed', update respondedAt
        if (updates.status && (updates.status === 'responded' || updates.status === 'closed') && !inquiry.respondedAt) {
          inquiry.respondedAt = getCurrentTimestamp();
        }

        contactStore[index] = {
          ...inquiry,
          ...updates,
          updatedAt: getCurrentTimestamp()
        };

        resolve({
          success: true,
          data: contactStore[index],
          message: 'Inquiry updated successfully'
        });
      } else {
        reject({
          success: false,
          message: 'Inquiry not found',
          status: 404
        });
      }
    }, 300);
  });
};

/**
 * Delete contact inquiry
 * @param {string} id - Inquiry ID
 * @returns {Promise<Object>} Deletion confirmation
 */
export const deleteContactInquiry = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = contactStore.findIndex(c => c.id === id);

      if (index !== -1) {
        const deleted = contactStore.splice(index, 1);

        resolve({
          success: true,
          data: deleted[0],
          message: 'Inquiry deleted successfully'
        });
      } else {
        reject({
          success: false,
          message: 'Inquiry not found',
          status: 404
        });
      }
    }, 300);
  });
};

/**
 * Get inquiries by email
 * @param {string} email - Email address
 * @returns {Promise<Object>} Matching inquiries
 */
export const getInquiriesByEmail = async (email) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = contactStore.filter(c =>
        c.email.toLowerCase() === email.toLowerCase()
      );

      resolve({
        success: true,
        data: results
      });
    }, 300);
  });
};
