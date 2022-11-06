let defaultState = {
  selectedItems: {items: [], restaurantName: ''},
  itemSelected: {},
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      let newState = {...state};

      if (action.payload.checkboxValue == true) {
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],

          restaurantName: action.payload.restaurantName,
        };
      } else {
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              item => item.id !== action.payload.id,
            ),
          ],
          restaurantName: action.payload.restaurantName,
        };
      }

      return newState;
    }

    default:
      return state;
  }
};
export default cartReducer;
