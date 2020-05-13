import React, { Component } from 'react';
import ContactForm from '../../container/ContactFormContainer';
import ContactList from '../../container/ContactListContainer';
import ContactFilter from '../../container/ContactFilterContainer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { save, get } from '../../helpers/editLocalStorage';
import styles from './Phonebook.module.css';
import { CSSTransition } from 'react-transition-group';
import slideTransition from '../../assert/transition/slide.module.css';

class Phonebook extends Component {
  componentDidMount() {
    const saveContacts = get('contacts');
    if (saveContacts) {
      this.setState({ contacts: saveContacts });
    }
  }
  componentDidUpdate(prevProps) {
    const { contacts } = this.props;
    if (prevProps.contacts !== contacts) {
      save('contacts', contacts);
    }
  }

  render() {
    const { contacts } = this.props;
    return (
      <>
        <h1 className={styles.logo}>Phonebook</h1>
        <ContactForm />
        <ToastContainer position="top-right" autoClose={3000} closeOnClick />
        <CSSTransition
          in={contacts.length >= 1}
          timeout={250}
          unmountOnExit
          classNames={slideTransition}
        >
          <div>
            <h2 className={styles.text}>Contacts</h2>
            <ContactFilter />
            <ContactList />
          </div>
        </CSSTransition>
      </>
    );
  }
}

export default Phonebook;
