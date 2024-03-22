import React from 'react';
import MainEl from '../components/MainEl';

export const metadata = {
  title: 'Главная',
};
export default function Home({ title, firstname, secondname, thirdname }) {
  return (
    <div className="Main">
      <MainEl title="Все районы острова" firstname="Най Харн" secondname="###" thirdname="###" />
      <MainEl title="Все объекты на аренду" firstname="###" secondname="###" thirdname="###" />
      <MainEl title="Все объекты на продажу" firstname="###" secondname="###" thirdname="###" />
      <MainEl title="Все автомобили в аренду" firstname="###" secondname="###" thirdname="###" />
      <MainEl title="Все услуги" firstname="###" secondname="###" thirdname="###" />
    </div>
  );
}
