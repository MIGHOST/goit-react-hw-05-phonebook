import ContactList from '../components/ContactList/ContactList';
import { connect } from 'react-redux';
import filterContact from '../helpers/filterContact';

const mapStateToProps = state => {
  const contacts = state.contacts;
  const filter = state.filter;
  const filteredContacts = filterContact(contacts, filter);
  return {
    contacts: filteredContacts,
  };
};

export default connect(mapStateToProps)(ContactList);
