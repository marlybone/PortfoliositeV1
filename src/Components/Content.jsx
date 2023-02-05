import React from 'react'
import Styled from 'styled-components';

   const ContentDiv = Styled.div`
     margin-top: 25%;
     color:white;

     @media (max-width: 748px){
     align-items: center;
     align-content: center;
     display: flex;
     flex-direction: column;
}

img {
  width: 100%;
  max-width: 240px;
  height: auto;
  max-height: 325px;
  transition: all 0.5s ease-in-out;
  
    @media (max-width: 748px){
    }
}
h1 {

  @media (max-width: 748px){
   font-size: 50px;
    }
}
h2 {
  @media (max-width: 748px) {
   display: flex;
   align-self: flex-start;
   margin: 0 auto;
  }
}
     
    `;

const Content = () => {
  return (
    <ContentDiv>
      <img src="src/img/img.jpg"/>
      <h1>Marlon Stevenson.</h1>
      <h2>Web Developer.</h2>
      <h3>Javascript | React | CSS | HTML </h3>
      <p>Description, short, to the point</p>     
    </ContentDiv>
  )
}


export default Content