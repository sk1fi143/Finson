import React from "react";
import MainCardEl from "./mainCard";
import Link from "next/link";

export default function MainEl({
  title,
  names,
  hrefs,
  link
}) {
  return (
    <div className="Main-Block">
      <span className="Main-Block__title">{title}</span>
      <div className="Main-Block__elements">
        {names.map((name, index) => (
          names[index] && <MainCardEl key={index} name={name} image={hrefs[index]} />
        ))}
      </div>
      <Link href={`${link}`}>
        <button className="Main-Block__button">Перейти ко всем</button>
      </Link>
      <div className="Main-Block__grid">
        {names.map((name, index) => (
          names[index] && <MainCardEl key={index} className={`Main-Block__${index + 1}el`} name={name} image={hrefs[index]} />
        ))}
        <Link href={`${link}`}>
          <button className="Main-Block__button__adapt">Перейти ко всем</button>
        </Link>
      </div>
    </div>
  );
}
