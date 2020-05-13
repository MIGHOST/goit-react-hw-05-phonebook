import ContactFilter from '../components/ContactFilter/ContactFilter';
import filterContact from '../store/action/filterAction';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  value: state.filter,
});

const mapDispatchToProps = {
  filterContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);
