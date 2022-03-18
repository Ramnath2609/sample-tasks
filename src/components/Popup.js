import { PopUpBox, PopupHeader, Box, CloseButton } from './styles.js';

export function Popup(props) {
    return (
        <PopUpBox isVisible={props.isVisible}>
            <Box>
                <PopupHeader>
                    <div>Pop Header</div>
                    <CloseButton onClick={props.handleClose}>X</CloseButton>
                </PopupHeader>
                {props.content}
            </Box>
        </PopUpBox>
    )
}