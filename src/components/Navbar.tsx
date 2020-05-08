import React from 'react';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav>
      <header className='nav'>
        <h1>Rick and Morty app</h1>
        <p>pick your favorite episodes</p>
      </header>
    </nav>
  );
};
