import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 20px;
  width: 300px;
  margin: 20px;
`;

const CarTitle = styled.h2`
  text-align: center;
`;

const CarImage = styled.img`
  width: 100%;
  height: auto;
`;

const CarDetails = styled.div`
  margin-top: 10px;
  color: black;
`;

const CarMake = styled.p``;
const CarModel = styled.p``;
const CarYear = styled.p``;
const CarMileage = styled.p``;
const CarPrice = styled.p``;

const BuyButton = styled.button`
  display: block;
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CarCard = ({ title, imageUrl, make, model, year, mileage, price }) => {
  return (
    <Card>
      <CarTitle>{title}</CarTitle>
      <CarImage src={imageUrl} alt={title} />
      <CarDetails>
        <CarMake>{make}</CarMake>
        <CarModel>{model}</CarModel>
        <CarYear>{year}</CarYear>
        <CarMileage>{mileage}</CarMileage>
        <CarPrice>{price}</CarPrice>
      </CarDetails>
      <BuyButton>Buy Now</BuyButton>
    </Card>
  );
};

export default CarCard;
