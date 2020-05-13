import ContactForm from '../components/ContactForm/ContactForm';
import { connect } from 'react-redux';
import { addOneContact } from '../store/action/contactAction';
const mapStateToProps = state => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = {
  addOneContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
