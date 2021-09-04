import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../../redux/contacts/contact-actions';
import styles from './ContactList.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={styles.contactlist__item}>
      <p>
        {name}, {number}
      </p>
      <button
        type="button"
        className={styles.button__delete}
        onClick={() => dispatch(actions.deleteContact(id))}
      >
        Удалить
      </button>
    </li>
  )
};

ContactItem.propTypes = {
  id: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
