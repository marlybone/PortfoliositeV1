import React from 'react'
import Styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub , faTwitter , faCodepen , faLinkedin } from '@fortawesome/free-brands-svg-icons'
import useHoverIcons from '/src/Styles/useHoverIcons'


const SideBar = Styled.aside`
  margin-top: 15%;
  
  @media (max-width: 748px){
   bottom: 0;
   display: flex;
   position: relative;
   flex-wrap: no-wrap;
   justify-content: space-between; 
 }
`;

const Links = Styled.a`
  color: white;
  @media (max-width: 748px){
  padding: 15px;
  font-size: 1.3em;
 }
`;

const Social = () => {
useHoverIcons('.fontawesome-icons');
  return(
    <SideBar>
      <Links href="https://www.linkedin.com/in/marlon-stevenson-510738109/" target='_blank'><FontAwesomeIcon icon={faLinkedin} className="fontawesome-icons"/></Links>
      <Links href="https://twitter.com/Maestvenlon" target='_blank'><FontAwesomeIcon icon={faTwitter} className="fontawesome-icons"/></Links>
      <Links href="https://github.com/marlybone" target='_blank'><FontAwesomeIcon icon={faGithub} className="fontawesome-icons"/></Links>
      <Links href="" target='_blank'><FontAwesomeIcon icon={faCodepen} className="fontawesome-icons"/></Links>
    </SideBar>
  )
}

export default Social