import React from 'react'
import Styled from 'styled-components'
import { useState } from 'react'


const Nav = Styled.nav`
  display: flex;
  flex-direction: row-reverse;
  top: 0;
  width: 100%;
  transition: all 0.4s ease-in-out;
  position: sticky
  
  @media(max-width: 748px){
    justify-content: flex-end;
    display: flex;
    font-size: 14px;
    
  }
`;

const NavItems = Styled.ul`

    @media(max-width: 748px){
  }
`;

const NavLink = Styled.a`
  text-decoration: none;
  padding: 10px;
  margin: 0 auto;
  color: black;

  @media(max-width: 748px){
  align-items: center;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <header>
      <Nav>
         <NavItems>
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