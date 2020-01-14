

const initState = {
    models: null,
    listErr: null
};


const listReducer = (state = initState, action) => {
    switch(action.type){
        case 'REMOVE_SUCCED':
            return {
                ...state,
                listErr: null
            }
        case 'REMOVE_ERROR':
            return {
                ...state,
                listErr: 'Something went wrong...'
            }
        
        
    }
    return null;
};

export default listReducer;