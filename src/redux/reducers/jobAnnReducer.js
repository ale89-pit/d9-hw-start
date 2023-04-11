//reducer per salvare i dati della fetch sullo state jobAnn

import { ADD_JOB_ANN } from "../action";
const initialState = {
  jobAnn: {
    content: [],
    
  },
};

const jobAnnReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOB_ANN:
      return {
        ...state,
        jobAnn: {
          content:  action.payload,
        },
      };
   

    default:
      return state;
  }
};

export default jobAnnReducer;
