import React, { useState } from 'react';
import Modal from 'react-modal';

import { useAuth } from '../../providers/Auth';
import './LoginModal.styles.scss';

const LoginModal = ({ isOpen, setIsModalOpen }) => {
  Modal.setAppElement('body');

  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleOnFormSubmit = (e) => {
    e.preventDefault();

    if (username === '') {
      setError('Enter a valid username');
      return;
    }

    if (password === '') {
      setError('Enter a valid password');
      return;
    }

    login(username);
    setIsModalOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Log in modal"
      onRequestClose={() => setIsModalOpen(false)}
      closeTimeoutMS={200}
      className="modal"
    >
      <form className="modal__form" onSubmit={handleOnFormSubmit}>
        <input
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          name="pass"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <p>{error}</p>
        <button type="submit">Login</button>
      </form>
    </Modal>
  );
};

export default LoginModal;
