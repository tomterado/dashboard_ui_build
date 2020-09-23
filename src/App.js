import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainContainer } from "./styles"
import LeftCol from "./components/LeftCol"
import RightCol from "./components/RightCol"

/*
  Building this out
    1. Left Column
      - Logo
      - Navigation Titles / Menus
      - Referral Box
    2. Right Column
      - Profile nNavigation
      - Placeholder box for the content
      - DummyData (JSON format) on the community contnet
      - Filter
    3. Icing on cake

 */

function App() {
  return (
    <MainContainer>
      <LeftCol/>
      <RightCol/>
    </MainContainer>
  );
}

export default App;
