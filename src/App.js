import * as React from 'react';
import { Dropdown, Popup } from './components';
import styled from 'styled-components';
import { OpenPopup } from './components/styles';
import data from './components/data';

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
    height: 100%;
    object-fit: fill;
`;

const ImageHolder = styled.div`
  width: 100%;
  height: auto;
  padding: 16px;
  box-sizing: border-box;
`;

function App() {
  const [showPopup, setShowPopup] = React.useState(false);

  const renderContent = React.useCallback(() => (
    <ImageHolder>
      <Image alt='nature' src='https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=' />
    </ImageHolder>
  ), [])

  const togglePopup = React.useCallback(() => setShowPopup(!showPopup), [showPopup]);

  return (
    <AppContainer>
      <Dropdown options={data} />
      <Popup isVisible={showPopup} content={renderContent()} handleClose={togglePopup} />
      <OpenPopup type='button' onClick={togglePopup}>Open Popup</OpenPopup>
    </AppContainer>
  );
}

export default App;
