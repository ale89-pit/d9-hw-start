import { SHOW_JOB_ENT } from "../action";

const initialState = {
    jobEnt :{
        content:[],
    }
}

const showJobEntReducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_JOB_ENT:
        return {
          ...state,
          jobEnt: {
            content:  action.payload,
          },
        };
     
  
      default:
        return state;
    }
  };

  export default showJobEntReducer