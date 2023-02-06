import React from 'react'
import Styled from 'styled-components';

const ContentDiv = Styled.div`
   margin-top: 25%;
   margin-bottom: 25%;
   color:white;

   @media (max-width: 748px){
   align-items: center;
   align-content: center;
   display: flex;
   flex-direction: column;
}

img {
  transition: all 0.5s ease-in-out;
  
  @media (max-width: 748px){
    width: 100%;
    max-width: 265px;
    height: auto;
    max-height: 355px;
    }
}

h1 {
 @media (max-width: 748px){
  font-size: 38px;
    }
}

h2 {
 @media (max-width: 748px){
  display: flex;
  margin: 0;
  font-size: 32px;
    }
}

h3 {
 @media (max-width: 748px){
  display: flex;
  margin: 0;
  font-size: 18px;
    }
}

p {
 @media (max-width: 748px){
   padding: 10px;
   font-size: 14px;
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