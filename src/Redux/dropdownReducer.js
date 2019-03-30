const defaultMenu = {
    value: 1,
    text: 'Responses'
};

export const mainMenuDropdown = (state = defaultMenu, action) => {
    switch (action.type) {
        case 'MENU_CHANGE':
            return (
                state = action.menu
            )
        default:
            return state;
    }
}

