import React from 'react';
import Handshake from '@/public/images/svg/handshake';
import FeedBack from '@/public/images/svg/feedback';
import House from '@/public/images/svg/house';
import Image from 'next/image';
import BigLogo from '@/public/images/biglogo.png';
import Place from '@/public/images/svg/place';
import Mail from '@/public/images/svg/mail';
import Tel from '@/public/images/svg/tel';
import Inst from '@/public/images/svg/inst';
import WhatsApp from '@/public/images/svg/whatsapp';
import Telegram from '@/public/images/svg/telegram';

export const metadata = {
  title: 'О нас',
};

export default function AboutUs() {
  return (
    <main className="AboutUs-main">
      <div className="AboutUs-top-main">
        <div className="AboutUs-top-main-noline">
          <div className="AboutUs-top-main__info">
            <h1 className="AboutUs-top-main__title">О нас</h1>
            <p className="AboutUs-top-main__text-info">
              Si sine metu degendae praesidia firmissima filium morte multavit si sine causa? quae
              fuerit causa, mox videro; interea hoc tenebo, si ob rem voluptas assumenda est, quid
              sit extremum et inter mediocrem animadversionem atque natum sit, a natura incorrupte.
              Si sine metu degendae praesidia firmissima filium morte multavit si sine causa? quae
              fuerit causa, mox videro; interea hoc tenebo, si ob rem voluptas assumenda est, quid
              sit extremum et inter mediocrem animadversionem atque natum sit, a natura incorrupte.
            </p>
          </div>
          <div className="AboutUs-top-main__logo-info">
            <div className="AboutUs-top-main__logo-info-element">
              <Handshake />
              <div className="AboutUs-top-main__number-text-info">
                <span className="AboutUs-top-main__number-info">40+</span>
                <span className="AboutUs-top-main__number-from-info">Клиентов</span>
              </div>
            </div>
            <div className="AboutUs-top-main__logo-info-element">
              <FeedBack />
              <div className="AboutUs-top-main__number-text-info">
                <span className="AboutUs-top-main__number-info">100+</span>
                <span className="AboutUs-top-main__number-from-info">Отзывов</span>
              </div>
            </div>
            <div className="AboutUs-top-main__logo-info-element">
              <House />
              <div className="AboutUs-top-main__number-text-info">
                <span className="AboutUs-top-main__number-info">100+</span>
                <span className="AboutUs-top-main__number-from-info">
                  Обьектов
                  <br />
                  недвижимости
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="AboutUs-top-main__line"></div>
      </div>
      <div className="AboutUs-bottom-main">
        <div className="AboutUs-bottom-main__contacts">
          <span className="AboutUs-bottom-main__title">Контакты</span>
          <div className="AboutUs-bottom-main__navigat-block">
            <div className="AboutUs-bottom-main__contact-element">
              <Place />
              <span className="AboutUs-bottom-main__name">
                5/28 (G) Moo 5, 11 Wiset
                <br /> road, Rawai, Phuket
              </span>
            </div>
            <div className="AboutUs-bottom-main__contact-element">
              <Mail />
              <span className="AboutUs-bottom-main__name">Property@finson.pro</span>
            </div>
            <div className="AboutUs-bottom-main__contact-element">
              <Tel />
              <span className="AboutUs-bottom-main__name">+66 627 392 858</span>
            </div>
          </div>
          <span className="AboutUs-bottom-main__title">Соц. сети</span>
          <div className="AboutUs-bottom-main__navigat-block">
            <div className="AboutUs-bottom-main__social-network-element">
              <div className="AboutUs-bottom-main__social-network-info">
                <Inst />
                <span className="AboutUs-bottom-main__name">finson_property</span>
              </div>
              <button className="AboutUs-bottom-main__social-button">
                <a className="AboutUs-bottom-main__text-button" href="https://www.instagram.com">
                  Подписаться
                </a>
              </button>
            </div>
            <div className="AboutUs-bottom-main__social-network-element">
              <div className="AboutUs-bottom-main__social-network-info">
                <WhatsApp />
                <span className="AboutUs-bottom-main__name">+66 627 392 858</span>
              </div>
              <button className="AboutUs-bottom-main__social-button">
                <a className="AboutUs-bottom-main__text-button" href="https://www.whatsapp.com">
                  Написать
                </a>
              </button>
            </div>
            <div className="AboutUs-bottom-main__social-network-element">
              <div className="AboutUs-bottom-main__social-network-info">
                <Telegram />
                <span className="AboutUs-bottom-main__name">@finsonproperty</span>
              </div>
              <button className="AboutUs-bottom-main__social-button">
                <a
                  className="AboutUs-bottom-main__text-button"
                  href="https://web.telegram.org/a/#6743039284">
                  Написать
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="AboutUs-bottom-main__biglogoblock">
          <Image
            className="AboutUs-bottom-main__biglogo"
            src={BigLogo}
            alt="Logo"
            width={500}
            height={322.95}
          />
          <span className="AboutUs-bottom-main__biglogotext">
            Finson
            <br />
            Prorerty
          </span>
        </div>
      </div>
    </main>
  );
}
