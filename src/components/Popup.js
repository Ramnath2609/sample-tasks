import { PopUpBox, PopupHeader, Box, CloseButton } from './styles.js';
import FontAwesome from 'react-fontawesome';

export function Popup(props) {
    return (
        <PopUpBox isVisible={props.isVisible}>
            <Box>
                <PopupHeader>
                    <div>Nature</div>
                    <CloseButton onClick={props.handleClose}>
                        <FontAwesome name="close" />
                    </CloseButton>
                </PopupHeader>
                {props.content}
            </Box>
        </PopUpBox>
    )
}