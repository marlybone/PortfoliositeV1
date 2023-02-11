import React from 'react'
import Styled from 'styled-components'


const ContactSection = Styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15%;
  @media (max-width: 748px){}

  h4 {

   @media (max-width: 748px){
   font-size: 25px;
   margin: 0 auto;
   }
  }

  h1 {
  
  @media (max-width: 748px){
   font-size: 45px;
   margin: 0 auto;
   }
  }

  p {
  @media (max-width: 748px){
  font-size: 19px;
  display: flex;
  padding: 5px;
  text-align: center;
  }
  }
`;

const Contact = () => {

  return (
    <ContactSection>
      <h4>Need Work Done?</h4>
      <h1>Contact me</h1>
      <p>I am continuously developing my skills and actively seeking opportunities as a Junior Developer. I would be honored to have the opportunity to work with your organization and am available to discuss further. Please do not hesitate to reach out to connect and discuss potential opportunities.</p>
    </ContactSection>
    
  )
}

export default Contact