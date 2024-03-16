import React from 'react'

export default function Form({date}) {
  return (
    <form className='form'>
        <h5>Оставить заявку</h5>
        <input placeholder='Фамилия Имя Отчество'/>
        <input placeholder='Номер телефона'/>
        <input placeholder='Email'/>
        <input placeholder='WhatsApp, Telegram'/>
        <input placeholder={date}/>
        <button type='submit'>Отправить</button>
    </form>
  )
}
