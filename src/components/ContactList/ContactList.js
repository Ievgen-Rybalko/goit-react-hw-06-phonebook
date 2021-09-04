import ContactItem from './ContactItem';

import { useSelector } from 'react-redux';
import { getContactsTotal, getContactsFiltered } from '../../redux/contacts/contact-selectors';

import styles from './ContactList.module.css';



const ContactList = () => {

  
  const contacts = useSelector(getContactsFiltered);
  
  return (
  <div>
    <p className={styles.title}>Contact list. <span style={{color:'white', fontSize:'16px'}}>Total contacts {useSelector(getContactsTotal)}</span> :</p>
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
          />
        );
      })}
    </ul>
  </div>
)
};



export default ContactList;
