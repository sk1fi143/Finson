'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../public/images/logo.png';
import Link from 'next/link';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    document.querySelector('.hamburger').classList.toggle('is-active');
  };
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    document.querySelector('.hamburger').classList.remove('is-active');
  };
  const handleContactsClick = () => {
    handleMenuItemClick();
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };
  return (
    <header>
      <Link className="headerlink" href="/">
        <div className="logo">
          <Image src={logo} alt="" className="logo__image" />
          <span>Finson</span>
        </div>
      </Link>
      <ul className={`menu ${isMenuOpen ? 'header-menu--mobile' : ''}`}>
        <Link href="/rent">
          <li onClick={handleMenuItemClick} className={`menu-item ${isMenuOpen ? 'active' : ''}`}>
            Аренда
          </li>
        </Link>
        <Link href="/purchase">
          <li onClick={handleMenuItemClick} className={`menu-item ${isMenuOpen ? 'active' : ''}`}>
            Продажа
          </li>
        </Link>
        <Link href="/service">
          <li onClick={handleMenuItemClick} className={`menu-item ${isMenuOpen ? 'active' : ''}`}>
            Услуги
          </li>
        </Link>
        <Link href="/about">
          <li onClick={handleMenuItemClick} className={`menu-item ${isMenuOpen ? 'active' : ''}`}>
            О нас
          </li>
        </Link>
        <li
          onClick={handleMenuItemClick}
          className={`menu-item-phone ${isMenuOpen ? 'active' : ''}`}>
          <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none">
            <defs>
              <clipPath id="clip78_959">
                <rect
                  id="Frame"
                  width="24.000000"
                  height="24.000000"
                  fill="white"
                  fillOpacity="0"
                />
              </clipPath>
              <clipPath id="clip78_958">
                <rect
                  id="Frame"
                  width="24.000000"
                  height="24.000000"
                  fill="white"
                  fillOpacity="0"
                />
              </clipPath>
            </defs>
            <rect id="Frame" width="24.000000" height="24.000000" fill="#FFFFFF" fillOpacity="0" />
            <g clipPath="url(#clip78_958)">
              <rect
                id="Frame"
                width="24.000000"
                height="24.000000"
                fill="#FFFFFF"
                fillOpacity="0"
              />
              <g clipPath="url(#clip78_959)">
                <path
                  id="Vector"
                  d="M18.5 21C18.88 21 19.26 20.98 19.64 20.95C20.08 20.92 20.3 20.91 20.49 20.79C20.66 20.7 20.81 20.53 20.9 20.36C21 20.15 21 19.91 21 19.43L21 16.62C21 16.21 21 16.01 20.93 15.84C20.87 15.68 20.77 15.55 20.65 15.44C20.51 15.32 20.32 15.25 19.94 15.11L16.74 13.95C16.29 13.79 16.07 13.71 15.86 13.72C15.68 13.73 15.5 13.79 15.35 13.9C15.18 14.02 15.06 14.22 14.82 14.63L14 16C11.35 14.79 9.2 12.64 8 10L9.36 9.17C9.77 8.93 9.97 8.81 10.09 8.64C10.2 8.49 10.26 8.31 10.27 8.13C10.29 7.92 10.2 7.7 10.04 7.26L8.88 4.05C8.74 3.67 8.67 3.48 8.55 3.34C8.44 3.22 8.31 3.12 8.15 3.06C7.98 3 7.78 3 7.37 3L4.56 3C4.08 3 3.84 3 3.63 3.09C3.46 3.18 3.29 3.33 3.2 3.5C3.08 3.69 3.07 3.91 3.04 4.35C3.01 4.73 3 5.11 3 5.5C3 14.06 9.93 21 18.5 21Z"
                  stroke="#0DB8D6"
                  strokeOpacity="1.000000"
                  strokeWidth="2.000000"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </svg>
          <span className="number">+66 627 392 858</span>
        </li>
      </ul>
      <div className="phone">
        <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none">
          <defs>
            <clipPath id="clip78_959">
              <rect id="Frame" width="24.000000" height="24.000000" fill="white" fillOpacity="0" />
            </clipPath>
            <clipPath id="clip78_958">
              <rect id="Frame" width="24.000000" height="24.000000" fill="white" fillOpacity="0" />
            </clipPath>
          </defs>
          <rect id="Frame" width="24.000000" height="24.000000" fill="#FFFFFF" fillOpacity="0" />
          <g clipPath="url(#clip78_958)">
            <rect id="Frame" width="24.000000" height="24.000000" fill="#FFFFFF" fillOpacity="0" />
            <g clipPath="url(#clip78_959)">
              <path
                id="Vector"
                d="M18.5 21C18.88 21 19.26 20.98 19.64 20.95C20.08 20.92 20.3 20.91 20.49 20.79C20.66 20.7 20.81 20.53 20.9 20.36C21 20.15 21 19.91 21 19.43L21 16.62C21 16.21 21 16.01 20.93 15.84C20.87 15.68 20.77 15.55 20.65 15.44C20.51 15.32 20.32 15.25 19.94 15.11L16.74 13.95C16.29 13.79 16.07 13.71 15.86 13.72C15.68 13.73 15.5 13.79 15.35 13.9C15.18 14.02 15.06 14.22 14.82 14.63L14 16C11.35 14.79 9.2 12.64 8 10L9.36 9.17C9.77 8.93 9.97 8.81 10.09 8.64C10.2 8.49 10.26 8.31 10.27 8.13C10.29 7.92 10.2 7.7 10.04 7.26L8.88 4.05C8.74 3.67 8.67 3.48 8.55 3.34C8.44 3.22 8.31 3.12 8.15 3.06C7.98 3 7.78 3 7.37 3L4.56 3C4.08 3 3.84 3 3.63 3.09C3.46 3.18 3.29 3.33 3.2 3.5C3.08 3.69 3.07 3.91 3.04 4.35C3.01 4.73 3 5.11 3 5.5C3 14.06 9.93 21 18.5 21Z"
                stroke="#0DB8D6"
                strokeOpacity="1.000000"
                strokeWidth="2.000000"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </svg>
        <span className="number">+66 627 392 858</span>
      </div>
      <div className="hamburger" onClick={handleMenuToggle}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </header>
  );
};
