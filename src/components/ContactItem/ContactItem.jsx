import './Contact.scss';
import img from './../../assets/images/user.png';

function ContactItem({ contact }) {
  return (
    <div className="contact">
      <div className="contact__avatar">
        <img src={img} alt="avatar" />
      </div>
      <div className="contact__text">
        <div className="contact__number">{contact.number}</div>
      </div>
    </div>
  );
}

export default ContactItem;
