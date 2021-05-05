import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TagStateType, TagType } from "store/types/tags";

const initialState: TagStateType = {
  data: [],
  isLoading: false,
  error: {},
};

export const TagSlice = createSlice({
  name: "Tag",
  initialState,
  reducers: {
    setTagData: (state, action: PayloadAction<Array<TagType>>) => {
      state.data = action.payload;
    },
    setTagLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setTagError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
  },
});

export const { setTagData, setTagLoading, setTagError } = TagSlice.actions;
