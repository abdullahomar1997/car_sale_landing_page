import React from 'react'
import styled from 'styled-components';
import CarCard from '../CarCard';

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const ContactInfo = styled.div`
  text-align: center;
  color: white;
`;

const carsData = [
    {
        title: 'Toyota Corolla',
        imageUrl: '/car4.jpg',
        make: 'Toyota',
        model: 'Corolla',
        year: 2020,
        mileage: '30,000 miles',
        price: '$15,000',
    },
    {
        title: 'Honda Civic',
        imageUrl: '/car3.jpg',
        make: 'Honda',
        model: 'Civic',
        year: 2019,
        mileage: '25,000 miles',
        price: '$14,500',
    },
    {
        title: 'Ford Fusion',
        imageUrl: '/car2.jpg',
        make: 'Ford',
        model: 'Fusion',
        year: 2018,
        mileage: '35,000 miles',
        price: '$12,000',
    },
    {
        title: 'Chevrolet Malibu',
        imageUrl: '/car1.jpg',
        make: 'Chevrolet',
        model: 'Malibu',
        year: 2017,
        mileage: '40,000 miles',
        price: '$11,000',
    },
];

const Pricing = () => {
    return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {carsData.map((car, index) => (
            <CarCard
                key={index}
                title={car.title}
                imageUrl={car.imageUrl}
                make={car.make}
                model={car.model}
                year={car.year}
                mileage={car.mileage}
                price={car.price}
            />
        ))}
    </div>
    )
}

export default Pricing