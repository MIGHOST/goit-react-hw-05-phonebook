import { connect } from 'react-redux';
import Phonebook from '../components/Phonebook/Phonebook';
import { addOneContact, deleteContact } from '../store/action/contactAction';

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = {
  addOneContact,
  deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
