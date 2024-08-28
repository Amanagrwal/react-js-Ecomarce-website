import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from './context';
import { NavLink } from 'react-router-dom';
import { Button } from "./styles/button";

const Services = () => {
  const {services} = useGlobalContext();

  return (
    <Wrapper className="section">
      <div className='main_body'>
        <h2 className="common-heading">Our Services</h2>
        <div className="container grid grid-three-column">
          
          {services.map((curElem) => {
            const { id, name, company, price, image, description } = curElem;
            return (
              <div key={id} className="card">
                <figure>
                  <img src={image} alt={name} className='image' />
                </figure>
                <div className="card-data">
                  <div className='card-header'>
                    <h1>{name}</h1>
                    <h1>${price}</h1>
                  </div>
                  <h2>{company}</h2>
                  <p>{description.slice(0, 149)}...</p>
                  <NavLink to="/contact">
                    <Button className='btn'>Read More</Button>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .main_body {
    margin-left: 3rem;
    padding: 1.2rem;
    background-color: rgb(245, 228, 228);
  }

  .common-heading {
    color: black;
    font-size: 3.8rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 6rem;
    text-transform: capitalize;
  }

  .container {
    max-width: 160rem;
    display: grid;
    gap: 8rem;
    grid-template-columns: repeat(3, 1fr);
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    padding: 2rem;

    figure {
      width: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      background-color: rgba(166, 143, 156, 0.433);
      transition: all 0.5s linear;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        transition: all 0.5s linear;
        cursor: pointer;
      }

      &:hover::after {
        width: 100%;
      }

      &:hover img {
        transform: scale(1.2);
      }

      img {
        max-width: 100%;
        margin-top: 1.5rem;
        height: 20rem;
        transition: all 0.2s linear;
      }
    }

    .card-data {
      padding: 2rem;

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }

      h3 {
        margin-bottom: 1rem;
      }

      p {
        margin-bottom: 2rem;
      }
    }

    .btn {
      background-color: rgb(98, 84, 243);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.4rem;
      border-radius: 5%;
      cursor: pointer;
      margin: 0 auto;

      &:hover {
        background-color: white;
        border: 1px solid rgb(48, 48, 190);
        color: rgb(48, 48, 190);
        transform: scale(0.9);
      }
    }

    a {
      text-decoration: none;
      color: black;
      padding: 0.5rem 1rem;

      &:hover {
        color: #fff;
      }
    }
  }
  h1{
        text-transform: capitalize;
        font-size:2rem;
       }
      h2{
        color: green;
        text-decoration:underline;
        font-size: 1.8rem;
      }
`;

export default Services;
