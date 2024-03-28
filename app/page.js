import React from "react";
import MainEl from "../components/MainEl";

import bangTao from "@/public/images/Банг Тао.png";
import kamala from "@/public/images/Камала.png";
import karon from "@/public/images/Карон.png";
import kata from "@/public/images/Ката.png";
import kathu from "@/public/images/Катху.png";
import myKhao from "@/public/images/Май Кхао.png";
import nayHarn from "@/public/images/Най Харн.png";
import panva from "@/public/images/Панва.png";
import patong from "@/public/images/Патонг.png";
import phuket from "@/public/images/Пхукет Таун.png";
import ravai from "@/public/images/Раваи.png";
import surin from "@/public/images/Сурин.png";
import talang from "@/public/images/Таланг.png";
import chalong from "@/public/images/Чалонг.png";
import appart1 from "@/public/images/Апартаменты.png";
import villa1 from "@/public/images/Вилла.png";
import bungalo1 from "@/public/images/Бунгало.png";
import house1 from "@/public/images/Дом.png";
import hotel1 from "@/public/images/Отель.png";
import taunhouse1 from "@/public/images/Таунхаус.png";
import appart2 from "@/public/images/Апартаменты продажа.png";
import villa2 from "@/public/images/Вилла продажа.png";
import bungalo2 from "@/public/images/Бунгало продажа.png";
import house2 from "@/public/images/Дом продажа.png";
import hotel2 from "@/public/images/Отель продажа.png";
import taunhouse2 from "@/public/images/Таунхаус продажа.png";
import lux from "@/public/images/Люкс.png";
import defaultAuto from "@/public/images/Средний класс.png";
import cabriolet from "@/public/images/Кабриолеты.png";
import compact from "@/public/images/Компактные.png";
import crossover from "@/public/images/Кроссоверы.png";
import miniven from "@/public/images/Минивэны.png";
import moto from "@/public/images/Мото.png";
import visarun from "@/public/images/Визаран.png";
import objectsService from "@/public/images/Управление объектами.png";
import studVisa from "@/public/images/Студ.виза.png";
import transfer from "@/public/images/Трансфер.png";

export const metadata = {
  title: "Главная",
};
export default function Home({}) {
  return (
    <div className="Main">
      <MainEl
        title="Все районы острова"
        names={['Банг Тао', 'Камала', 'Карон', 'Ката', 'Катху', 'Май Кхао', 'Най Харн', 'Панва', 'Патонг', 'Пхукет Таун', 'Раваи', 'Сурин', 'Таланг', 'Чалонг']}
        hrefs={[bangTao, kamala, karon, kata, kathu, myKhao, nayHarn, panva, patong, phuket, ravai, surin, talang, chalong]}
        link="/"
      />
      <MainEl
        title="Все объекты на аренду"
        names={['Аппартаменты', 'Виллы', 'Бунгало', 'Дом', 'Отель', 'Таунхаус']}
        hrefs={[appart1, villa1, bungalo1, house1, hotel1, taunhouse1]}
        link="/rent"
      />
       <MainEl
        title="Все объекты на продажу"
        names={['Аппартаменты', 'Виллы', 'Бунгало', 'Дом', 'Отель', 'Таунхаус']}
        hrefs={[appart2, villa2, bungalo2, house2, hotel2, taunhouse2]}
        link="/purchase"
      />
      <MainEl
        title="Все автомобили в аренду"
        names={['Кабриолеты', 'Средний класс', 'Люкс', 'Компактные', 'Минивэны', 'Мото']}
        hrefs={[cabriolet, defaultAuto, lux, compact, miniven, moto]}
        link="/cars"
      />
      <MainEl
        title="Все услуги"
        names={['Визаран', 'Студ. виза', 'Управление объектами', 'Трансфер']}
        hrefs={[visarun, studVisa, objectsService, transfer]}
        link="/service"
      />
    </div>
  );
}
