export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE"
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE"
export const ADD_JOB_ANN = "ADD_JOB_ANN"
export const SHOW_JOB_ENT = "ADD_JOB_ENT"
//action per aggiungere ai preferiti
export const addToFav = (ent)=>{
    return {
        type : ADD_TO_FAVORITE,
        payload : ent,
    }
}
//action per rimuovere dai preferiti 
export const removeFromFav = (i)=>{
    return {
        type: REMOVE_FROM_FAVORITE,
        payload: i,
    }
}
//action per salvare nello state i risultati della fetch della ricerca
export const addJob = (jobAnn) =>{
    return {
        type : ADD_JOB_ANN,
        payload : jobAnn,
    }
}


export const addJobAnnWithThunk = (query) =>{
    return async (dispatch, getState)=>{
        try {
          
            
            const response = await fetch('https://strive-benchmark.herokuapp.com/api/jobs?search='+ query + '&limit=20')
            if (response.ok) {
              const  {data}  = await response.json()
              dispatch(addJob(data))
              console.log(getState)
            } else {
              alert('Error fetching results')
            }
          } catch (error) {
            console.log(error)
          }
    }
}

export const showJobEnt = (jobEnt)=>{
    return {
        type: SHOW_JOB_ENT,
        payload : jobEnt,
    }
}

export const showJobEntWithThunk = (params)=>{
    return async (dispatch,getState) =>{
        try {
              let resp = await fetch ('https://strive-benchmark.herokuapp.com/api/jobs?company='+params
        )
        if(resp.ok){
            const {data} = await resp.json()
            dispatch(showJobEnt(data))
        }else {
            alert("errore fetch")
        }
        } catch (error) {
            console.log(error)
        }
      
    }
}

