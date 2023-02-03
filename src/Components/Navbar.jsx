import React from 'react'
import Styled from 'styled-components'

const Navbar = styled.nav`
  
`;

const NavItems = styled.ul`

`;

const Navbar = () => {
  return(
    <header>
      <Navbar>
         <NavItems>
            <a className="items" href="#home"> Home </a>
            <a className="items" href="#about"> About </a>
            <a className="items" href="projects"> Projects </a>
            <a className="items" href="contact"> Contact </a>

          </NavItems>
      </Navbar>
    </header>
  )
};

export default Navbar