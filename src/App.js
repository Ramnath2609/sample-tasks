import * as React from 'react';
import { Dropdown, Popup } from './components';
import { OpenPopup } from './components/styles';
import data from './components/data';
import './App.css';
function App() {
  const [showPopup, setShowPopup] = React.useState(false);

  const renderContent = React.useCallback(() => (
    <div className='image-holder'>
      <img className='image' alt='nature' src='https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=' />
    </div>
  ), [])

  const togglePopup = React.useCallback(() => setShowPopup(!showPopup), [showPopup]);

  return (
    <div className="App">
      <Dropdown options={data} />
      <Popup isVisible={showPopup} content={renderContent()} handleClose={togglePopup} />
      <OpenPopup type='button' onClick={togglePopup}>Open Popup</OpenPopup>
    </div>
  );
}

export default App;
