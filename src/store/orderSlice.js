import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    ordered_items: [],
  },
  reducers: {
    set: (state, action) => {
      state.ordered_items = action.payload;
    },
    add: (state, action) => {
      const orderedItem = state.ordered_items.find(
        (e) => e.item_id === action.payload
      );
      if (orderedItem) orderedItem.count++;
      else
        state.ordered_items = state.ordered_items.concat({
          item_id: action.payload,
          count: 1,
        });
    },
    remove: (state, action) => {
      state.ordered_items = state.ordered_items.filter(
        (ordered_item) => ordered_item.item_id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove, set } = orderSlice.actions;

export default orderSlice.reducer;
