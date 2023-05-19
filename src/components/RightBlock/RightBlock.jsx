import Header from '../Header/Header';
import Chat from '../Chat';
import { useContext } from 'react';
import { UserContext } from '../../App';
import InitialWindow from '../InitialWindow/InitialWindow';
import img from './../../assets/images/user.png';

function RightBlock() {
  const { activeContact } = useContext(UserContext);

  return (
    <div className="container__right">
      {activeContact.number ? (
        <>
          <Header>
            <div className="contact contact-header">
              <div className="contact__avatar">
                <img src={img} alt="avatar" />
              </div>
              <div className="contact__number">{activeContact.number}</div>
            </div>
          </Header>
          <Chat />
        </>
      ) : (
        <InitialWindow />
      )}
    </div>
  );
}

export default RightBlock;
