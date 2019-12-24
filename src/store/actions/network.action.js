

export const types = {
   LOADINGSTART : 'LOADINGSTART',
   LOADINGEND : 'LOADINGEND',
}

export const loading = (start) => dispatch => {
  
    if(start) {
        dispatch({
            type: types.LOADINGSTART
        })
    } else {
        dispatch({
            type: types.LOADINGEND
        })
    }
  


   
}

