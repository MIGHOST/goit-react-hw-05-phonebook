import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contacts/Contacts';
import styles from './ContactList.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import popTransition from '../../transition/pop.module.css';

const ContactList = ({ items, onDeleteContact }) =>
  items.length > 0 && (
    <TransitionGroup className={styles.list} component="ul">
      {items.map(item => (
        <CSSTransition
          timeout={250}
          unmountOnExit
          classNames={popTransition}
          key={item.id}
        >
          <li className={styles.items}>
            <Contact
              {...item}
              onDeleteContact={() => onDeleteContact(item.id)}
            />
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
