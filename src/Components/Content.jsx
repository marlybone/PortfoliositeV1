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
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  border-radius: 3px;
  
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