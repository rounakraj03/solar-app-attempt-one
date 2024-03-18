"use client"

import React, { useEffect, useState } from 'react';

const Navlink = ({ name, route, closeMenu }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      console.log("window.location.hash", window.location.hash)
      setIsActive(window.location.hash === route);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [route]);

  const handleClick = (event) => {
    event.preventDefault();
    closeMenu(); 
    window.location.hash = route;
    const section = document.querySelector(route);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`font-semibold mx-5 hover:text-[#1addba] ${isActive ? 'text-[#1addba]' : ''}`}
      style={{ cursor: 'pointer' }}
    >
      {name}
    </button>
  );
};

export default Navlink;