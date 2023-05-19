import Header from '../Header/Header';
import Search from '../Search/Search';
import ContactList from '../ContactList/ContactList';
import { Link } from 'react-router-dom';
import ContactButton from './ContactButton';
import img from './../../assets/images/user.png';
import ContactForm from '../ContactForm/ContactForm';

function LeftBlock() {
  return (
    <div className="container__left">
      <Header>
        <div className="contact__avatar">
          <img src={img} alt="avatar" />
        </div>
        <ContactButton />
      </Header>
      <Search />
      <ContactList />

      <ContactForm />
    </div>
  );
}

export default LeftBlock;
