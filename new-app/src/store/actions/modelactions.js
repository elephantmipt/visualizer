export const removeModel = (model) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        
        const firestore = getFirestore();
        firestore.collection('models')
        .doc(model.id)
        .delete().then(() => {
            dispatch({type: 'REMOVE_SUCCESS'})
        })
        .catch(err => {
            dispatch({type: 'REMOVE_ERROR', err})
        })
    }
}