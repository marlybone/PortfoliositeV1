import React from 'react'
import Styled from 'styled-components'

const GridContainer = Styled.div`
 display: grid;

 @media (max-width: 748px){
  margin-top: 15%;
  margin-bottom: 15%;
 }
`;

const GridItem = Styled.div`
 @media (max-width: 748px){
  height: 290px;
  width: 100%;
  border: 1px solid white;
  border-radius: 2%;
  margin-top: 5%;
  margin-bottom: 5%;
 }
`;

const Item1 = Styled(GridItem)`
 @media (max-width: 748px){
    
 }
`;

const Item2 = Styled(GridItem)`
 @media (max-width: 748px){
  
 }
`;

const Item3 = Styled(GridItem)`
 @media (max-width: 748px){
  
 }
`;


const Projects = () => {

  return(
    <GridContainer>
      <Item1></Item1>
      <Item2></Item2>
      <Item3></Item3>
    </GridContainer>
  );
}

export default Projects