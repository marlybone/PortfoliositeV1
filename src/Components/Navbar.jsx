import React from 'react'
import Styled from 'styled-components'
import { useState } from 'react'

const NavButton = Styled.button`
  border: 2px solid red; 
`;

const Nav = Styled.nav`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  transition: all 0.4s ease-in-out;
  
@media (max-width: 748px) {
    justify-content: flex-start;
    display: flex;
    font-size: 14px;
    &.open {
      transform: translateX(0%);
    }

    &.closed {
      transform: translateX(100%);
    }
  }
`;

const NavItems = Styled.ul`
    @media(min-width: 748px){
  }
`;

const NavLink = Styled.a`
  text-decoration: none;
  padding: 10px;
  margin: 0 auto;
  color: black;

  @media(max-width: 748px){
  
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <header>  
      <Nav>
        <NavButton onClick={() => setIsOpen(!isOpen)}/>
         <NavItems style={{display: isOpen ? 'block' : 'none'}}>
            <NavLink href='#'>Home</NavLink>
            <NavLink href='#'>About</NavLink>
            <NavLink href='#'>Projects</NavLink>
            <NavLink href='#'>Clontact</NavLink>
          </NavItems>
      </Nav>
    </header>
  )
};

export default Navbar