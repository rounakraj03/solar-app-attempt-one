"use client"

import React from 'react';

const Navlink = ({ name, route }) => {
  const handleClick = (event) => {
    event.preventDefault(); // Prevent default link behavior
    window.location.hash = route;
    const section = document.querySelector(route);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="font-semibold mx-5 hover:text-[#1addba]"
      style={{ cursor: 'pointer' }}
    >
      {name}
    </button>
  );
};

export default Navlink;