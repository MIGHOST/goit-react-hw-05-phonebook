import { toast } from 'react-toastify';

const findContact = (contacts, contact) =>
  contacts.find(item => item.name === contact.name);



  const findContactInStore = (state, contact)=> {
    const receivedContact = findContact(state, contact);
    if (receivedContact) {
      toast.warn(`${contact.name} is already in contacts!`);
      return true;
    }
    return false;
  }
  
  export default findContactInStore;