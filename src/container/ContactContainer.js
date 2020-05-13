import Contacts from '../components/Contacts/Contacts';
import { connect } from 'react-redux';
import { deleteContact } from '../store/action/contactAction';

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = {
  deleteContact,
};
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
