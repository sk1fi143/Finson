import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="row rowTop">
        <Link href='/'><h5>FINSON Property</h5></Link>
        <ul>
        <Link href='/rent'><li>Аренда</li></Link>
        <Link href='/purchase'><li>Продажа</li></Link>
        {/* <Link href='/cars'><li>Автомобили</li></Link> */}
        <Link href='/service'><li>Услуги</li></Link>
        <Link href='/about'><li>О нас</li></Link>
        </ul>
      </div>
      <div className="row">
        <span>© Finson Property, 2024</span>
        <div className="row__icons">
          <svg
            width="50.000000"
            height="50.000000"
            viewBox="0 0 50 50"
            fill="none"
          >
            <clipPath id="clip78_940">
              <rect
                id="Frame"
                width="50.000000"
                height="50.000000"
                fill="white"
                fillOpacity="0"
              />
            </clipPath>
            <rect
              id="Frame"
              width="50.000000"
              height="50.000000"
              fill="#FFFFFF"
              fillOpacity="0"
            />
            <g clipPath="url(#clip78_940)">
              <path
                id="Vector"
                d="M4.16 45.83L7.1 35.14C5.3 32 4.35 28.45 4.35 24.83C4.33 13.42 13.59 4.16 24.97 4.16C30.5 4.16 35.69 6.3 39.59 10.21C41.52 12.13 43.04 14.4 44.08 16.91C45.12 19.42 45.65 22.11 45.64 24.83C45.64 36.21 36.38 45.47 25 45.47C21.53 45.47 18.15 44.61 15.12 42.95L4.16 45.83ZM15.61 39.23L16.24 39.61C18.88 41.18 21.9 42 24.97 42.01C34.42 42.01 42.13 34.3 42.13 24.85C42.13 20.27 40.35 15.94 37.11 12.71C35.52 11.11 33.63 9.84 31.55 8.98C29.46 8.11 27.23 7.67 24.97 7.67C15.5 7.67 7.8 15.38 7.8 24.83C7.8 28.06 8.7 31.23 10.42 33.96L10.82 34.62L9.08 40.96L15.61 39.23Z"
                fill="#FFFFFF"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M19.83 16.18C19.45 15.31 19.03 15.29 18.67 15.29C18.36 15.27 18.02 15.27 17.66 15.27C17.33 15.27 16.76 15.4 16.28 15.92C15.8 16.45 14.47 17.69 14.47 20.23C14.47 22.77 16.32 25.23 16.57 25.56C16.83 25.9 20.14 31.27 25.4 33.35C29.76 35.08 30.65 34.74 31.59 34.63C32.53 34.53 34.64 33.4 35.08 32.18C35.5 30.98 35.5 29.93 35.37 29.72C35.25 29.51 34.89 29.38 34.38 29.11C33.86 28.86 31.34 27.6 30.86 27.43C30.37 27.26 30.04 27.18 29.7 27.68C29.36 28.21 28.38 29.36 28.06 29.7C27.77 30.04 27.45 30.08 26.95 29.83C26.42 29.57 24.77 29.03 22.79 27.26C21.26 25.9 20.23 24.2 19.91 23.69C19.62 23.17 19.87 22.89 20.14 22.64C20.38 22.41 20.67 22.03 20.92 21.74C21.17 21.44 21.26 21.21 21.45 20.88C21.61 20.54 21.53 20.23 21.4 19.98C21.28 19.75 20.29 17.2 19.83 16.18Z"
                fill="#FFFFFF"
                fillOpacity="1.000000"
                fillRule="evenodd"
              />
            </g>
          </svg>
          <svg
            width="50.000000"
            height="50.000000"
            viewBox="0 0 50 50"
            fill="none"
          >
            <clipPath id="clip78_937">
              <rect
                id="Frame"
                width="50.000000"
                height="50.000000"
                fill="white"
                fillOpacity="0"
              />
            </clipPath>
            <rect
              id="Frame"
              width="50.000000"
              height="50.000000"
              fill="#FFFFFF"
              fillOpacity="0"
            />
            <g clipPath="url(#clip78_937)">
              <path
                id="Vector"
                d="M12.05 29.2C12.14 29.23 12.24 29.26 12.33 29.27C12.43 29.5 12.56 29.81 12.71 30.17C13.08 31.04 13.57 32.21 14.09 33.44C15.13 35.94 16.19 38.52 16.42 39.26C16.71 40.18 17.02 40.8 17.35 41.22C17.52 41.44 17.72 41.63 17.95 41.78C18.07 41.85 18.19 41.91 18.32 41.95C18.33 41.96 18.34 41.96 18.34 41.96C19.01 42.21 19.62 42.11 20 41.98C20.2 41.91 20.36 41.83 20.48 41.76C20.54 41.73 20.59 41.69 20.63 41.67L20.64 41.66L26.53 37.99L33.33 43.2C33.43 43.28 33.54 43.34 33.66 43.39C34.47 43.75 35.26 43.88 36.01 43.77C36.75 43.67 37.34 43.36 37.78 43.01C38.21 42.66 38.5 42.28 38.68 41.99C38.78 41.85 38.85 41.72 38.89 41.62C38.92 41.57 38.94 41.53 38.95 41.49L38.97 41.45L38.98 41.43L38.98 41.42L38.99 41.42L38.99 41.41C39.02 41.32 39.05 41.23 39.07 41.14L45.28 9.83C45.3 9.73 45.31 9.63 45.31 9.53C45.31 8.61 44.96 7.74 44.15 7.21C43.46 6.76 42.68 6.74 42.19 6.78C41.67 6.82 41.18 6.95 40.85 7.05C40.68 7.11 40.54 7.16 40.44 7.2C40.39 7.22 40.34 7.24 40.31 7.25L40.29 7.26L5.47 20.92L5.46 20.92C5.44 20.93 5.41 20.94 5.38 20.95C5.31 20.98 5.22 21.02 5.12 21.06C4.91 21.16 4.62 21.3 4.33 21.5C3.85 21.83 2.76 22.72 2.95 24.18C3.09 25.35 3.89 26.07 4.38 26.41C4.65 26.6 4.9 26.74 5.09 26.83C5.18 26.87 5.35 26.94 5.43 26.97L5.45 26.98L12.05 29.2ZM41.51 10.14L41.5 10.14C41.48 10.15 41.47 10.15 41.45 10.16L6.59 23.84C6.57 23.84 6.55 23.85 6.53 23.86L6.51 23.86C6.49 23.87 6.45 23.89 6.41 23.91C6.38 23.92 6.35 23.93 6.32 23.95C6.36 23.97 6.4 23.99 6.43 24.01C6.46 24.02 6.49 24.03 6.5 24.04L13.05 26.24C13.17 26.28 13.28 26.33 13.38 26.4L35 13.74L35.02 13.73C35.04 13.72 35.06 13.71 35.08 13.7C35.13 13.67 35.2 13.63 35.28 13.59C35.43 13.51 35.67 13.4 35.94 13.32C36.13 13.26 36.68 13.1 37.28 13.29C37.66 13.41 38.04 13.66 38.29 14.1C38.41 14.31 38.48 14.53 38.51 14.72C38.6 15.04 38.58 15.34 38.52 15.61C38.37 16.18 37.97 16.63 37.6 16.97C37.29 17.26 33.24 21.17 29.24 25.03C27.25 26.95 25.27 28.85 23.8 30.28L22.83 31.21L35.06 40.59C35.34 40.69 35.51 40.69 35.58 40.68C35.68 40.66 35.75 40.63 35.83 40.57C35.91 40.5 35.99 40.41 36.04 40.32L36.05 40.32L42.07 9.96C41.98 9.98 41.89 10 41.8 10.03C41.7 10.06 41.62 10.09 41.57 10.11C41.54 10.12 41.52 10.13 41.51 10.14L41.51 10.14ZM23.88 35.96L21.44 34.09L20.85 37.85L23.88 35.96ZM19.2 30.37L21.63 28.03C23.1 26.61 25.08 24.7 27.07 22.78L29.1 20.82L15.51 28.77L15.59 28.95C15.96 29.82 16.45 31 16.97 32.23C17.36 33.16 17.76 34.13 18.13 35.03L18.72 31.28C18.77 30.92 18.95 30.6 19.2 30.37Z"
                fill="#FFFFFF"
                fillOpacity="1.000000"
                fillRule="evenodd"
              />
            </g>
          </svg>
          <svg
            width="50.000000"
            height="50.000000"
            viewBox="0 0 50 50"
            fill="none"
          >
            <clipPath id="clip78_935">
              <rect
                id="instagram"
                width="50.000000"
                height="50.000000"
                fill="white"
                fillOpacity="0"
              />
            </clipPath>
            <g clipPath="url(#clip78_935)">
              <path
                id="Vector"
                d="M17.11 7.88C19.01 7.79 19.61 7.77 24.44 7.77C29.27 7.77 29.87 7.79 31.77 7.88C33.66 7.97 34.95 8.27 36.09 8.71C37.27 9.15 38.34 9.85 39.23 10.76C40.14 11.65 40.84 12.72 41.28 13.9C41.72 15.04 42.02 16.33 42.11 18.22C42.2 20.12 42.22 20.72 42.22 25.55C42.22 30.38 42.2 30.98 42.11 32.88C42.02 34.77 41.72 36.06 41.28 37.2C40.84 38.38 40.14 39.46 39.23 40.35C38.34 41.25 37.27 41.95 36.09 42.39C34.95 42.83 33.66 43.13 31.77 43.22C29.87 43.31 29.27 43.33 24.44 43.33C19.61 43.33 19.01 43.31 17.11 43.22C15.22 43.14 13.93 42.83 12.79 42.39C11.61 41.95 10.53 41.25 9.64 40.35C8.74 39.46 8.04 38.38 7.59 37.2C7.16 36.07 6.86 34.77 6.77 32.88C6.68 30.98 6.66 30.38 6.66 25.55C6.66 20.72 6.68 20.12 6.77 18.22C6.85 16.33 7.16 15.04 7.59 13.9C8.04 12.72 8.74 11.64 9.65 10.76C10.53 9.85 11.61 9.15 12.79 8.71C13.92 8.27 15.22 7.97 17.11 7.88L17.11 7.88ZM31.62 11.08C29.75 10.99 29.19 10.98 24.44 10.98C19.69 10.98 19.13 10.99 17.26 11.08C15.52 11.16 14.58 11.45 13.95 11.69C13.12 12.02 12.53 12.4 11.91 13.02C11.32 13.59 10.87 14.29 10.58 15.06C10.34 15.69 10.05 16.63 9.97 18.37C9.88 20.24 9.86 20.8 9.86 25.55C9.86 30.3 9.88 30.86 9.97 32.73C10.05 34.47 10.34 35.41 10.58 36.04C10.87 36.81 11.32 37.51 11.91 38.08C12.48 38.67 13.18 39.12 13.95 39.41C14.58 39.65 15.52 39.94 17.26 40.02C19.13 40.11 19.69 40.13 24.44 40.13C29.19 40.13 29.75 40.11 31.62 40.02C33.36 39.94 34.3 39.65 34.93 39.41C35.75 39.09 36.35 38.7 36.97 38.08C37.56 37.51 38.01 36.81 38.3 36.04C38.54 35.41 38.83 34.47 38.91 32.73C39 30.86 39.01 30.3 39.01 25.55C39.01 20.8 39 20.24 38.91 18.37C38.83 16.63 38.54 15.69 38.3 15.06C37.97 14.24 37.59 13.64 36.97 13.02C36.4 12.43 35.7 11.98 34.93 11.69C34.3 11.45 33.36 11.16 31.62 11.08ZM22.17 31.03C23.44 31.56 24.85 31.63 26.16 31.23C27.48 30.83 28.61 29.99 29.38 28.85C30.14 27.71 30.48 26.34 30.35 24.97C30.21 23.6 29.61 22.33 28.63 21.36C28.01 20.74 27.26 20.26 26.44 19.97C25.61 19.67 24.73 19.56 23.86 19.65C22.99 19.74 22.14 20.01 21.39 20.46C20.64 20.92 20 21.53 19.51 22.26C19.02 22.99 18.7 23.81 18.57 24.68C18.44 25.55 18.51 26.43 18.76 27.27C19.02 28.11 19.46 28.88 20.04 29.53C20.63 30.18 21.36 30.7 22.17 31.03ZM17.98 19.09C18.83 18.24 19.83 17.57 20.94 17.11C22.05 16.65 23.24 16.41 24.44 16.41C25.64 16.41 26.83 16.65 27.94 17.11C29.04 17.57 30.05 18.24 30.9 19.09C31.75 19.94 32.42 20.95 32.88 22.05C33.34 23.16 33.58 24.35 33.58 25.55C33.58 26.75 33.34 27.94 32.88 29.05C32.42 30.16 31.75 31.16 30.9 32.01C29.19 33.73 26.86 34.69 24.44 34.69C22.02 34.69 19.69 33.73 17.98 32.01C16.26 30.3 15.3 27.97 15.3 25.55C15.3 23.13 16.26 20.8 17.98 19.09ZM35.6 17.77C35.81 17.58 35.98 17.34 36.1 17.07C36.22 16.81 36.28 16.52 36.28 16.23C36.29 15.94 36.23 15.66 36.12 15.39C36.01 15.12 35.85 14.88 35.65 14.67C35.44 14.47 35.2 14.31 34.93 14.2C34.67 14.09 34.38 14.04 34.09 14.04C33.8 14.05 33.52 14.11 33.25 14.22C32.99 14.34 32.75 14.51 32.55 14.72C32.16 15.13 31.95 15.67 31.96 16.23C31.97 16.8 32.2 17.33 32.59 17.73C32.99 18.13 33.53 18.35 34.09 18.36C34.65 18.37 35.19 18.16 35.6 17.77Z"
                fill="#FFFFFF"
                fillOpacity="1.000000"
                fillRule="evenodd"
              />
            </g>
          </svg>
        </div>
      </div>
    </footer>
  );
};
