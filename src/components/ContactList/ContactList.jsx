import { useContext } from 'react';
import ContactItem from '../ContactItem/ContactItem';
import { UserContext } from '../../App';
import './../ContactItem/Contact.scss';
import img from './../../assets/images/arrow.png';

function ContactList() {
  const { contacts, setActiveContact } = useContext(UserContext);

  return (
    <ul>
      {contacts.length > 0 ? (
        contacts.map((contact) => {
          return (
            <li key={contact.id} onClick={() => setActiveContact(contact)}>
              <ContactItem contact={contact} />
            </li>
          );
        })
      ) : (
        <div className="contact__list">
          <span>Начните общение, нажав на кнопку выше</span>
          <img src={img} alt="arrow" />
        </div>
      )}
    </ul>
  );
}

export default ContactList;
