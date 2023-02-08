import React from 'react'
import Styled from 'styled-components'

const data = [
  {
    title: 'PlaceServices',
    description: '',
    github: '',
    techs: '',
  },
  {
    title: 'PlaceServices',
    description: '',
    github: '',
    techs: '',
  },
  {
    title: 'PlaceServices',
    description: '',
    github: '',
    techs: '',
  },
  {
    title: 'PlaceServices',
    description: '',
    github: '',
    techs: '',
  },
];

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
  border: 1px solid rgba(20, 21, 39, 0.91);
  border-radius: 2%;
  margin-top: 5%;
  margin-bottom: 5%;
  background-color: rgba(63, 69, 119, 1);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
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

const box = ({title, description, github, techs}) => (
  <Item1>
    
  </Item1>
);

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