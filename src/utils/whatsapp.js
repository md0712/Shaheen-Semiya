/**
 * Generates official WhatsApp click-to-chat URL with encoded enquiry message
 */
export const createWhatsAppUrl = (message, phoneNumber = '919597912663') => {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message.trim());

  // Detect mobile device
  const isMobile = typeof navigator !== 'undefined' && 
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
    return `https://wa.me/${cleanPhone}?text=${encodedText}`;
  }

  // Laptop and desktop: route directly to WhatsApp Web
  return `https://web.whatsapp.com/send?phone=${cleanPhone}&text=${encodedText}`;
};

export const getGeneralEnquiryMessage = () => {
  return `Hello SHAHEEN SEMIYA Team, I am visiting your website and would like to make an enquiry regarding your vermicelli products.`;
};

export const getProductEnquiryMessage = (productName, packSize = '') => {
  return `Hello SHAHEEN SEMIYA Team, I am interested in knowing more about "${productName}"${packSize ? ` (${packSize})` : ''}. Please share availability and retail/stockist details.`;
};

export const getOrderNowMessage = (orderData = {}) => {
  const { product = 'Shaheen Semiya', packSize = 'Standard Pack', quantity = 1, name = '', city = '', phone = '', notes = '' } = orderData;
  return `*SHAHEEN SEMIYA — Order Request*
---------------------------------------
🍜 Product: ${product}
⚖️ Pack Size: ${packSize}
🔢 Quantity: ${quantity} pack(s)
${name ? `👤 Customer: ${name}\n` : ''}${phone ? `📞 Phone: ${phone}\n` : ''}${city ? `📍 Delivery City: ${city}\n` : ''}${notes ? `📝 Note: ${notes}\n` : ''}---------------------------------------
Please confirm stock availability, total pricing, and dispatch schedule. Thank you!`;
};

export const getWholesaleEnquiryMessage = (data) => {
  const { businessName, contactPerson, location, quantity, productType, notes } = data;
  return `*SHAHEEN SEMIYA — Wholesale & Bulk Order Enquiry*
---------------------------------------
🏢 Business Name: ${businessName || 'N/A'}
👤 Contact Person: ${contactPerson || 'N/A'}
📍 Location / City: ${location || 'N/A'}
📦 Product: ${productType || 'All Semiya Varieties'}
⚖️ Estimated Quantity: ${quantity || 'Bulk Order'}
📝 Notes: ${notes || 'Looking forward to price quotation and terms.'}
---------------------------------------
Sent via Shaheen Semiya Official Website`;
};
