import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import shortid from 'shortid';
import ContactList from '../ContactList/ContactList';
import ContactFilter from '../ContactFilter/ContactFilter';
import filterContact from '../../helpers/filterContact';
import findContact from '../../helpers/findContact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { save, get } from '../../helpers/editLocalStorage';
import styles from './Phonebook.module.css';
import { CSSTransition } from 'react-transition-group';
import slideTransition from '../../assert/transition/slide.module.css';

export default class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const saveContacts = get('contacts');
    if (saveContacts) {
      this.setState({ contacts: saveContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      save('contacts', contacts);
    }
  }

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  addContact = contact => {
    const { contacts } = this.state;
    const id = shortid.generate();
    const savingContact = {
      id,
      ...contact,
    };
    const oldContacts = this.state.contacts;
    const foundContact = findContact(contacts, contact);

    if (foundContact) {
      toast.warn(`${contact.name} is already in contacts!`);
      return;
    } else if (contact.name.length <= 1 || !isNaN(contact.name)) {
      toast.warn('Contact name is not correct!');
      return;
    } else if (contact.number.length <= 1 || isNaN(contact.number)) {
      toast.warn('Contact number is not correct!');
      return;
    } else {
      this.setState(state => ({
        contacts: [...oldContacts, savingContact],
      }));
    }
  };

  deleteContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = filterContact(contacts, filter);
    return (
      <>
        <h1 className={styles.logo}>Phonebook</h1>
        <ContactForm onHandleSubmit={this.addContact} />
        <ToastContainer position="top-right" autoClose={3000} closeOnClick />

        <CSSTransition
          in={contacts.length >= 1}
          timeout={250}
          unmountOnExit
          classNames={slideTransition}
        >
          <div>
            <h2 className={styles.text}>Contacts</h2>
            <ContactFilter value={filter} onChangeFilter={this.changeFilter} />
            {filteredContacts.length > 0 && (
              <ContactList
                items={filteredContacts}
                onDeleteContact={this.deleteContact}
              />
            )}
          </div>
        </CSSTransition>
      </>
    );
  }
}
