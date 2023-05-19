import img from './../../assets/images/initialimage.png';
import './InitialWindow.scss';

function InitialWindow() {
  return (
    <div className="initial">
      <div className="initial__image">
        <img src={img} alt="Изображение" />
      </div>
      <div className="initial__title">WhatsApp Web</div>
      <div className="initial__text">
        Отправляйте и получайте сообщения без необходимости оставлять телефон подключенным. <br />
        Используйте WhatsApp одновременно на четырех устройствах и одном телефоне
      </div>
      <div className="initial__footer">&#128274; Защищено сквозным шифрованием</div>
    </div>
  );
}

export default InitialWindow;
