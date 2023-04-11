//Inizializzo lo stato del reducer FavoriteReducer
import { ADD_TO_FAVORITE,  REMOVE_FROM_FAVORITE } from "../action"
const initialState = {
    favorits :{
        content: [],
    }
}
//Creco il reduce per aggiungere ai preferiti un'azienda
const favoriteReducer = (state = initialState, action)=>{
    switch(action.type) {
        case ADD_TO_FAVORITE:
            return{
            favorits :{
                content :[...state.favorits.content, action.payload],
            }, 
        }
        case REMOVE_FROM_FAVORITE:
            return {
                favorits:{
                    content: state.favorits.content.filter((fav,i)=> i !==action.payload)
                },
            }
            default :
            return state
    }
}

export default favoriteReducer