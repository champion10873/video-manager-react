import { createSlice } from "@reduxjs/toolkit";
import BlockData from "../../data/BlocksData";

const initialState = {
  BlockData: BlockData,
};

// ==============================|| SLICE - SNACKBAR ||============================== //

const snackbar = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    addBlockEvent(state, action) {
      const { id, title, sourceCode, interactivity } = action.payload;
      let newBlock = state.BlockData;
      state.BlockData = [
        ...newBlock,
        {
          id,
          title,
          sourceCode,
          interactivity,
        },
      ];
    },
    addComponentEvent(state, action) {
      const { label, defaultType, defaultValue, defaultColor, Block_id } =
        action.payload;
      let interactivity = state.BlockData[Block_id - 1].interactivity;
      state.BlockData[Block_id - 1].interactivity = [
        ...interactivity,
        {
          label,
          defaultType,
          defaultValue,
          defaultColor,
        },
      ];
    },
    changeDropButton1Value(state, action) {
      state.BlockData[action.payload.BLOCK_ID].interactivity.forEach((one) => {
        if (one.label === action.payload.LABEL) {
          one.defaultType = action.payload.VALUE;
        }
      });
    },
    changeDropButton2Value(state, action) {
      state.BlockData[action.payload.BLOCK_ID].interactivity.forEach((one) => {
        if (one.label === action.payload.LABEL) {
          one.defaultValue = action.payload.VALUE;
        }
      });
    },
    changeInputValue(state, action) {
      state.BlockData[action.payload.BLOCK_ID].interactivity.forEach((one) => {
        if (one.label === action.payload.LABEL) {
          one.defaultValue = action.payload.VALUE;
        }
      });
    },
    changeColor(state, action) {
      state.BlockData[action.payload.BLOCK_ID].interactivity.forEach((one) => {
        if (one.label === action.payload.LABEL) {
          one.defaultColor = action.payload.VALUE;
        }
      });
    },
  },
});

export default snackbar.reducer;

export const {
  addBlockEvent,
  addComponentEvent,
  changeDropButton1Value,
  changeDropButton2Value,
  changeInputValue,
  changeColor,
} = snackbar.actions;
