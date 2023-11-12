import Navbar from "./Navbar"
import Pricing from "./pages/Pricing"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import styled from "styled-components"

function App() {
  return (
    <Container>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      
    </Container>
  )
}

export default App;

const Container = styled.div`
    /* background-color: black; */
    height: 100vh;
`;
