import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../../container/ContactContainer';
import styles from './ContactList.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import popTransition from '../../assert/transition/pop.module.css';

const ContactList = ({ contacts }) => (
  <TransitionGroup className={styles.list} component="ul">
    {contacts.map(item => (
      <CSSTransition
        timeout={250}
        unmountOnExit
        classNames={popTransition}
        key={item.id}
      >
        <li className={styles.items}>
          <Contact {...item} />
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ContactList;
