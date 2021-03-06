import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../../redux/contacts/contact-actions';

import styles from './ContactList.module.css';

const Filter = ({ message }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p className={styles.contactlist__item}>{message}</p>
      <input
        className={styles.button}
        type="text"
        onChange={e => dispatch(actions.changeFilter(e.currentTarget.value))}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </div>
  )
};

Filter.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Filter;
