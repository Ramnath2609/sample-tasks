import * as React from 'react';
import { DropdownListItem } from './styles';

export function ListItem({ isSelected, onChange, title }) {
    const ref = React.createRef();

    React.useEffect(() => {
        if (isSelected) {
            ref.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isSelected, ref]);

    const onSelect = React.useCallback(() => onChange(title), [onChange, title]);

    return (
        <DropdownListItem ref={ref} isSelected={isSelected} onClick={onSelect}>{title}</DropdownListItem>
    );
}