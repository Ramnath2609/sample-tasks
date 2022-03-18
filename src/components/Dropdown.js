import * as React from 'react';
import FontAwesome from 'react-fontawesome';
import { DropdownHeader, DropdownList, DropdownWrapper, LoadMoreButton } from './styles';
import { ListItem } from './ListItem';

export function Dropdown({ options }) {
    const [limit, setLimit] = React.useState(5);
    const [selectedItem, setSelectedItem] = React.useState(null);
    const listRef = React.createRef();
    const ref = React.createRef();
    const listItemRef = React.createRef();
    const [headerTitle, setHeaderTitle] = React.useState('Select');
    const [isListOpen, setIsListOpen] = React.useState(false);
    const toggleList = React.useCallback(() => setIsListOpen(!isListOpen), [isListOpen]);

    React.useEffect(() => {
        if (selectedItem) {
            listItemRef.current?.scrollIntoView({ behavior: 'smooth' });
        } else {
            ref.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [listItemRef, ref, selectedItem]);

    const onChange = React.useCallback((title) => {
        setHeaderTitle(title);
        setSelectedItem(title);
        toggleList();
    }, [toggleList]);

    const increaseLimit = React.useCallback(() => {
        setLimit(options.length);
    }, [options.length]);

    console.log('ref', listRef, selectedItem);

    return (
        <DropdownWrapper>
            <DropdownHeader onClick={toggleList}>
                <span>{headerTitle}</span>
                {isListOpen
                    ? <FontAwesome name="angle-up" size="2x" />
                    : <FontAwesome name="angle-down" size="2x" />}
            </DropdownHeader>
            {isListOpen && (
                <DropdownList ref={listRef}>
                    {options.slice(0, limit).map(option => (
                        <ListItem isSelected={selectedItem === option.title} key={option.id} onChange={onChange} title={option.title} />
                    ))}
                    {(limit !== options.length) ? <LoadMoreButton onClick={increaseLimit}>Load More <FontAwesome name='spinner' /></LoadMoreButton> : <div ref={ref}></div>}
                </DropdownList>
            )}
        </DropdownWrapper>
    );
}