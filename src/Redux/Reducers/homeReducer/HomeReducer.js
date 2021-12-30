const stateDefault = {
  congViecTheoTen: [],
};

export const HomeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "GET_API_CONGVIEC_THEOTEN": {
      state.congViecTheoTen = action.data;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
