export const sendMessage = (message) => {
    return function(dispatch){
        dispatch({
            type: 'MESSAGE',
            message
        })
    }
}