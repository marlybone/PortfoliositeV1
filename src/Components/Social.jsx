import React from 'react'
import Styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub , faTwitter , faCodepen , faLinkedin } from '@fortawesome/free-brands-svg-icons'


const SideBar = Styled.div`
  @media (max-width: 748px){
  
 }
`;

const Links = Styled.a`
  @media (max-width: 748px){
  
 }
`;

const Social = () => {

  return(
    <SideBar>
      <Links href="https://www.linkedin.com/in/marlon-stevenson-510738109/" target='_blank'></Links>
      <Links href="https://twitter.com/Maestvenlon" target='_blank'></Links>
      <Links href="https://github.com/marlybone" target='_blank'></Links>
      <Links href="" target='_blank'></Links>
    </SideBar>
  )
}