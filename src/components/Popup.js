import { PopUpBox, PopupHeader, Box, CloseButton } from './styles.js';
import FontAwesome from 'react-fontawesome';

export function Popup({ isVisible, handleClose, content }) {
    return (
        <PopUpBox isVisible={isVisible}>
            <Box>
                <PopupHeader>
                    <div>Nature</div>
                    <CloseButton onClick={handleClose}>
                        <FontAwesome name="close" />
                    </CloseButton>
                </PopupHeader>
                {content}
            </Box>
        </PopUpBox>
    )
}