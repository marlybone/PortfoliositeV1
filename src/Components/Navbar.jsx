import React from 'react'
import Styled from 'styled-components'


const Nav = Styled.nav`
  display: flex;
  flex-direction: row;
  top: 0;
  width: 100%;
  transition: all 0.2s ease-in-out;
  
  @media(max-width: 748px){
    justify-content: flex-end;
    display: flex;
    position: sticky;
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
  align-items: center;
  color: black;
  position: sticky;
`;

const Navbar = () => {
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