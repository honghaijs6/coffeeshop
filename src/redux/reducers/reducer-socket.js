 
const initState = {
    name:'Socket',
    res:{},
    appState:'active'
}

export default function(state=initState,action){

    switch(action.type){
        
        case 'appstate-change':
        
            return {
                ...state,
                appState:action.appState
            }

        break ;

        case 'reset-socket':
         
         return {
           ...state,   
           res:action.res
         }
     
       break ; 
       
       default:
    
       return state;
    
    }
}