import React from 'react'
import Styled from 'styled-components'
import { Button } from './styles/button';
import { NavLink } from 'react-router-dom';

function Error() {
    const Wrapper = Styled.section`
    padding : 7rem 0;
    display : flex;
    justify-content : center;
    flex-direction : column;
    align-items : center;
    margin-bottom: 2rem;

    .btn{
      margin-top: 4rem;
      font-size : 1.8rem;
   
    &:hover{
    background-color : white;
    border: 1px solid   rgb(48, 48, 190);;
    color:   rgb(48, 48, 190);
    transform : scale(0.9);
      }
    }
    `;
  return (
  <Wrapper>
<img src="../images/TsSNq.png" alt="error"/>
<NavLink to="/">
<Button className='btn'> go back </Button>
</NavLink>
  </Wrapper>
  )
};

export default Error
