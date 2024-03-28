import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="row rowTop">
      <span>© Finson Property, 2024</span>
        <ul>
          <Link href="/">
            <li>Главная</li>
          </Link>
          <Link href="/rent">
            <li>Аренда</li>
          </Link>
          <Link href="/purchase">
            <li>Продажа</li>
          </Link>
          <Link href="/cars">
            <li>Автомобили</li>
          </Link>
          <Link href="/service">
            <li>Услуги</li>
          </Link>
          <Link href="/about">
            <li>О нас</li>
          </Link>
        </ul>
      </div>
    </footer>
  );
};
