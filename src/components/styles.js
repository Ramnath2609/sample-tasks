import styled from 'styled-components';

export const PopUpBox = styled.div`
  position: fixed;
  opacity: ${props => props.isVisible ? 1 : 0};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,.5);
  width: 100%;
  height: 100%;
  transition: 0.3s ease-in;
  z-index: 100;
`;

export const Box = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 30px calc(100% - 40px);
  grid-row-gap: 10px;
  max-width: 70%;
  height: auto;
  max-height: 70vh;
  background: #fff;
  border-radius: 8px;
  border: none;
  overflow: auto;
  box-sizing: border-box;
`;

export const PopupHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 20px;
  width: 100%;
  padding: 4px 12px; 
  box-sizing: border-box;
  place-items: center;
  background: #222f3e;
  color: white;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: #222f3e;
  color: white;
`;

export const DropdownWrapper = styled.div`
    margin: 20px;
`;

export const DropdownHeader = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    padding: 8px 12px;
    width: 200px;
    border-radius: 8px;
    box-sizing: border-box;
    cursor: pointer;
`;

export const DropdownList = styled.div`
    position: absolute;
    box-sizing: border-box;
    width: 200px;
    margin-top: 8px;
    border-radius: 8px;
    max-height: 250px;
    overflow: auto;
    border: 1px solid #b2bec3;
    *::-webkit-scrollbar{
        width: 10px;
        height: 10px;
        background-color: #E4E4E4;
    }
    *::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #CECECE;
    }
    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        background-color: #E4E4E4;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #CECECE;
    }
`;

export const DropdownListItem = styled.div`
    padding: 8px;
    cursor: pointer;
    transition: 0.2s ease-in;
    background: ${props => props.isSelected ? '#0077D9' : 'white'};
    color: ${props => props.isSelected ? 'white' : 'black'};
    :hover {
        background: #0077D9;
        color: white;
    }
`;

export const LoadMoreButton = styled.button`
    border: none;
    padding: 8px;
    color: white;
    background: #667287;
    cursor: pointer;
    width: 100%;
`;

export const OpenPopup = styled.button`
  padding: 14px;
  background: #0984e3;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.1s ease-in;
  :hover {
    transform: scale(1.1);
  }
`;
