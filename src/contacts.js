const contacts = [];

export const getContacts = () => {
  return contacts;
};
export const addContacts = contact => {
  let result = false;
  if (
    contact.firstName &&
    contact.lastName &&
    contact.email &&
    contact.phoneNumber &&
    contact.password 
    // contact.id = contacts.length
  ) {
    // contact.id = contacts.length
    const data = contact;
    const url = "http://localhost:3000/";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
    contacts.push(contact);
    result = true;
  }
  return result;
};

export const checkLogin = userInput => {
  let result = false;
  contacts.forEach(contact => {
    if (
      contact.email === userInput.email &&
      contact.password === userInput.password
    ) {
      result = true;
    }
  });
  return result;
};
