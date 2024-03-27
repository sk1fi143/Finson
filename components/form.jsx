'use client';
import React, { useState, useEffect } from 'react';

export default function Form({ date }) {
  const [inputs, setInputs] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    messenger: '',
    date: date,
  });
  const [showPopup, setShowPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputs.fullName && inputs.phoneNumber && inputs.email && inputs.messenger) {
      setInputs({
        fullName: '',
        phoneNumber: '',
        email: '',
        messenger: '',
        date: date,
      });
      setShowPopup(true);
      setSuccessMessage('Заявка подана успешно!');
    } else {
      setShowPopup(true);
      setSuccessMessage('Заполните все поля!');
    }
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h5>Оставить заявку</h5>
        <input
          placeholder="Фамилия Имя Отчество"
          name="fullName"
          value={inputs.fullName}
          onChange={handleInputChange}
        />
        <input
          placeholder="Номер телефона"
          name="phoneNumber"
          value={inputs.phoneNumber}
          onChange={handleInputChange}
        />
        <input placeholder="Email" name="email" value={inputs.email} onChange={handleInputChange} />
        <input
          placeholder="WhatsApp, Telegram"
          name="messenger"
          value={inputs.messenger}
          onChange={handleInputChange}
        />
        <input
          placeholder={date}
          name="datesr"
          value={inputs.datesr}
          onChange={handleInputChange}
        />
        <button type="submit">Отправить</button>
      </form>
      {showPopup && (
        <div className="popup">
          <svg width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
            </g>
          </svg>
          <span>{successMessage}</span>
        </div>
      )}
    </div>
  );
}