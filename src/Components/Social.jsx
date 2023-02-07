import React from 'react'
import Styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub , faTwitter , faCodepen , faLinkedin } from '@fortawesome/free-brands-svg-icons'


const SideBar = Styled.aside`
  @media (max-width: 748px){
   bottom: 0;
 }
`;

const Links = Styled.a`
  @media (max-width: 748px){
  
 }
`;

const Social = () => {

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