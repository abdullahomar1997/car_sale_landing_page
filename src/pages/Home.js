import React from 'react'
import styled from 'styled-components';

const Home = () => {
  return (
    <OtherContainer>
    <Column>
      <CenteredParagraph>WE PROVIDE AN EXCITING JOURNEY IN FINDING YOUR IDEAL USED CAR.</CenteredParagraph>
      <CenteredParagraph>we aim to provide a trustworthy platform , offering a diverse range of quality vehicles to suit every need and budget.</CenteredParagraph>
    </Column>
    <Column>
    <Image src="/usedcars.jpg" alt="Your Image" />
    </Column>
    </OtherContainer>
  )
}

export default Home


const OtherContainer = styled.div`
      display: flex;
      height: 70vh;
      /* background-color: red; */
`;

const Column = styled.div`
  flex: 1;
  padding: 20px;
  padding-top: 50px;
`;

const CenteredParagraph = styled.p`
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  /* max-height: 100%; */
  height: 90%;
  margin: 0 auto ;
`;

// const Container = styled.div`
//   display: flex;
// `;
