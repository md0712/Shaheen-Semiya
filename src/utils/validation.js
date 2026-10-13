export const validateWholesaleForm = (values) => {
  const errors = {};

  if (!values.businessName || values.businessName.trim().length < 2) {
    errors.businessName = 'Please enter a valid business or trade name.';
  }

  if (!values.contactPerson || values.contactPerson.trim().length < 2) {
    errors.contactPerson = 'Please provide contact person name.';
  }

  if (!values.phone || !/^[0-9+\s-]{8,15}$/.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number (min 8 digits).';
  }

  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.location || values.location.trim().length < 2) {
    errors.location = 'Please state your city, state or supply location.';
  }

  if (!values.quantity || values.quantity.trim().length < 1) {
    errors.quantity = 'Please specify required quantity (e.g., 50 cartons, 500 kg).';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

export const validateContactForm = (values) => {
  const errors = {};

  if (!values.name || values.name.trim().length < 2) {
    errors.name = 'Please provide your full name.';
  }

  if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!values.phone || !/^[0-9+\s-]{8,15}$/.test(values.phone.trim())) {
    errors.phone = 'Please provide a valid contact number.';
  }

  if (!values.message || values.message.trim().length < 10) {
    errors.message = 'Please provide a message with at least 10 characters.';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
