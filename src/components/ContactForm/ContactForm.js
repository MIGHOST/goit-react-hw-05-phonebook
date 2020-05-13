import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import Button from '../Button/Button';
import { toast } from 'react-toastify';

export default class ContactForm extends Component {
  static propTypes = {
    addOneContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleNameChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    if (name.length <= 1 || !isNaN(name)) {
      toast.warn('Contact name is not correct!');
      this.reset();
      return;
    } else if (number.length <= 1 || isNaN(number)) {
      toast.warn('Contact number is not correct!');
      this.reset();
      return;
    } else {
      this.props.addOneContact({ ...this.state });
    }

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const disabled = name.length <= 0 || number.length <= 0;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label htmlFor={this.id} className={styles.label}>
          Name
          <input
            type="text"
            value={name}
            name="name"
            onChange={this.handleNameChange}
            id={this.id}
            className={styles.input}
          />
        </label>
        <label htmlFor={this.id} className={styles.label}>
          Number
          <input
            type="text"
            value={number}
            name="number"
            onChange={this.handleNameChange}
            id={this.id}
            className={styles.input}
          />
        </label>
        <Button title="Add contact" disabled={disabled} />
      </form>
    );
  }
}
