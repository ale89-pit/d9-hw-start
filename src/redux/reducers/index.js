const initialState = {
  favorits: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorits: {
          content: [...state.favorits.content, action.payload],
        },
      };
    case "DELETE":
      return {
        ...state,
        favorits: {
          content: [
            ...state.favorits.content.filter((el, i) => i !== action.payload),
          ],
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
