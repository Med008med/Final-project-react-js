import React, { useState } from "react";
export default function Modal() {
  const [modal, setModal] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loggedInMessage, setLoggedInMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleModal = () => {
    setModal(!modal);
    clearFields();
    clearMessages();
  };

  const clearFields = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const clearMessages = () => {
    setLoggedInMessage('');
    setErrorMessage('');
  };

  const handleLogin = () => {
    if (firstName && lastName && email && password && confirmPassword) {
      setLoggedInMessage('Logged in');
      clearFields();
      setTimeout(() => {
        setLoggedInMessage('');
        toggleModal();
      }, 2000);
    } else {
      setErrorMessage('Please fill out all fields.');
    }
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Login
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Login Page</h2>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div className="messages">
              {loggedInMessage && <p className="success-message">{loggedInMessage}</p>}
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>

            <button className="close-modal" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
}