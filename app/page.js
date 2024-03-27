import React from 'react';
import MainEl from '../components/MainEl';

export const metadata = {
  title: 'Главная',
};
export default function Home({}) {
  return (
    <div className="Main">
      <MainEl title="Все районы острова" firstname="Най Харн" secondname="Банг Тао" thirdname="Равай" link='/rent'/>
      <MainEl title="Все объекты на аренду" firstname="Аппартаменты" secondname="Виллы" thirdname="Бунгало" link='/rent'/>
      <MainEl title="Все объекты на продажу" firstname="Аппартаменты" secondname="Виллы" thirdname="Бунгало" link='/purchase'/>
      <MainEl title="Все автомобили в аренду" firstname="Кабриолеты" secondname="Средний класс" thirdname="Люкс" />
      <MainEl title="Все услуги" firstname="Визаран" secondname="Студ. виза" thirdname="Управление объектами" link='/service'/>
    </div>
  );
}
