import React from 'react'
import Styled from 'styled-components'
import { useState, useEffect } from 'react'


const NavButton = Styled.button`
  border: 2px solid red;
  margin-right: 8%;

  @media (min-width: 748px) {
    display: none;
  }
`;

const Nav = Styled.nav`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  top: 0;


  @media (max-width: 748px) {
    justify-content: flex-start;
    display: flex;
    font-size: 15px;
    position: fixed;
  
    
    &.open {
      transform: translateX(0%);
    }

    &.closed {
      transform: translateX(100%);
    }
  }
`;

const NavItems = Styled.ul`
  margin: 2%;

  @media (max-width: 748px){
  }
`;

const NavLink = Styled.a`
  text-decoration: none;
  padding: 10px;
  margin: 5%;
  color: white;

  @media(max-width: 748px){
  margin: 0 auto;
  }
`;
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
   const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 748px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 748px)");
    const handleMediaQueryChange = () => {
      setIsMobile(mediaQuery.matches);
    };
    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);
 return (
    <div>
      {isMobile ? <MobileView isOpen={isOpen} setIsOpen={setIsOpen} /> : <DesktopView />}
    </div>
  );
};
const MobileView = ({ isOpen, setIsOpen }) => (
    <Nav>
      <NavButton onClick={() => setIsOpen(!isOpen)}/>
       <NavItems style={{display: isOpen ? 'block' : 'none'}}>
          <NavLink href='#'>Home</NavLink>
          <NavLink href='#'>About</NavLink>
          <NavLink href='#'>Projects</NavLink>
          <NavLink href='#'>Contact</NavLink>
        </NavItems>
    </Nav>
);

const DesktopView = () => ( 
    <Nav>
       <NavItems>
          <NavLink href='#'>Home</NavLink>
          <NavLink href='#'>About</NavLink>
          <NavLink href='#'>Projects</NavLink>
          <NavLink href='#'>Contact</NavLink>
        </NavItems>
    </Nav>
  );

export default Navbar