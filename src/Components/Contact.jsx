import React from 'react'
import Styled from 'styled-components'


const ContactSection = Styled.div`
  @media (max-width: 748px)
`;

const Contact = () => {

  return (
    <ContactSection>
      <h4>Need Work Done?</h4>
      <h1>Contact me</h1>
      <p>I am continuously developing my skills and actively seeking opportunities as a Junior Developer. I would be honored to have the opportunity to work with your organization and am available to discuss further. Please do not hesitate to reach out to connect and discuss potential opportunities.</p>
      <button></button>
    </ContactSection>
  )
}

export default Contact