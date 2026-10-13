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

export const getPackPrice = (productName = '', packSize = '') => {
  const size = (packSize || '').toLowerCase();
  if (size.includes('150g')) return 35;
  if (size.includes('200g')) return 45;
  if (size.includes('250g')) return 55;
  if (size.includes('350g')) return 70;
  if (size.includes('400g')) return 80;
  if (size.includes('500g')) {
    if (size.includes('reserve')) return 120;
    return 95;
  }
  if (size.includes('700g')) return 130;
  if (size.includes('850g')) return 150;
  if (size.includes('1kg')) {
    if (size.includes('chef')) return 190;
    return 175;
  }
  return 95;
};

export const getOrderNowMessage = (orderData = {}) => {
  const { 
    invoiceNo = '',
    date = '',
    product = 'Shaheen Semiya', 
    packSize = '500g', 
    quantity = 1, 
    unitPrice = 95,
    subtotal = 95,
    deliveryFee = 0,
    total = 95,
    name = '', 
    phone = '', 
    address = '', 
    notes = '' 
  } = orderData;

  return `*SHAHEEN SEMIYA — OFFICIAL DIGITAL ORDER BILL*
🧾 *Invoice No:* ${invoiceNo || 'SHN-ONLINE'}
📅 *Date:* ${date || new Date().toLocaleDateString('en-IN')}
---------------------------------------
👤 *Customer:* ${name}
📞 *Phone:* ${phone}
📍 *Delivery Address:* ${address}
---------------------------------------
🍜 *Item:* ${product}
⚖️ *Pack Size:* ${packSize}
🔢 *Quantity:* ${quantity} pack(s)
💵 *Price per Pack:* ₹${unitPrice}
📦 *Subtotal:* ₹${subtotal}
🚚 *Delivery:* ${deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
💰 *TOTAL AMOUNT:* ₹${total}
${notes ? `📝 *Note:* ${notes}\n` : ''}---------------------------------------
✅ Order generated automatically via Shaheen Semiya Website.
Please confirm dispatch schedule. Thank you!`;
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
