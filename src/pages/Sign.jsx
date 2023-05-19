import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import './../scss/app.scss';

function Sign() {
  const { idInstance, apiTokenInstance, setIdInstance, setApiTokenInstance } =
    useContext(UserContext);
  const [isLogged, setIsLogged] = useState(false);
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (idInstance && apiTokenInstance) {
      setIdInstance(idInstance);
      setApiTokenInstance(apiTokenInstance);

      const response = await fetch(
        `https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`,
        { method: 'GET' },
      );
      const result = await response.text();
      if (result) {
        setIsLogged(true);
      } else {
        throw new Error('HTTP error, status = ' + response.status);
      }
    }
  };

  useEffect(() => {
    if (isLogged) {
      history('/chat');
    }
  }, [isLogged, history]);

  return (
    <div className="container container--sign">
      <h1>GREEN-API</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          placeholder="IdInstance"
          value={idInstance}
          onChange={(event) => setIdInstance(event.target.value)}
        />

        <input
          placeholder="ApiTokenInstance"
          value={apiTokenInstance}
          onChange={(event) => setApiTokenInstance(event.target.value)}
        />
        <button type="submit" className="button">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Sign;
