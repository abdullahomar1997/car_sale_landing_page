import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  solid
`;

const ContactInfo = styled.div`
  text-align: center;
  color: black;
  font-size: 1.5rem;
`;

const About = () => {
  return (
    <ContactContainer>
      <ContactInfo>
        <h2>Contact Us</h2>
        <p>Address: Maputo, Mozambique</p>
        <p>Phone: 82 123 4567</p>
        <p>Email: gogocars@cars.com</p>
      </ContactInfo>
    </ContactContainer>
  );
}

export default About;
