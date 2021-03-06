import Head from 'next/head';
import React from 'react';
import NavbarItem from './NavbarItem';
import NavbarSection from './NavbarSection';

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="bg-white h-14 bg-opacity-70 dark:bg-opacity-70 backdrop-filter backdrop-blur-lg backdrop-saturate-150 w-full shadow sticky top-0 z-50 flex justify-center align-center font-sans font-bold flex items-center text-center">
        <NavbarSection>
          <div className="bg-pardubice-default text-white">
            <h1>Logo</h1>
          </div>
        </NavbarSection>

        <NavbarSection>
          <h1>SearchBar</h1>
        </NavbarSection>

        <NavbarSection>
          <div className="space-x-4">
            <NavbarItem url="/" name="Mapa" />
            <NavbarItem url="/o-projektu" name="O projektu" />
            <NavbarItem url="/administrace" name="Administrace" />
          </div>
        </NavbarSection>
      </nav>
    </>
  );
};

export default Navbar;
