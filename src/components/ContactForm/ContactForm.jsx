import { useContext, useState } from 'react';
import './ContactForm.scss';
import { UserContext } from '../../App';

function ContactForm() {
  const { showForm, contacts, setShowForm, setContacts } = useContext(UserContext);
  const [number, setNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    setContacts([...contacts, { number: number, id: Date.now() }]);
    setShowForm(false);
    setNumber('');
  };

  return (
    <div>
      {showForm && (
        <div className="modal" onClick={() => setShowForm(false)}>
          <form
            onSubmit={handleSubmit}
            className="modal__content"
            onClick={(e) => e.stopPropagation()}>
            <input
              placeholder="7ХХХХХХХХХХ"
              type="phone"
              value={number}
              onChange={(event) => setNumber(event.target.value)}
            />

            <button className="button button__green" type="submit">
              Начать общение
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
