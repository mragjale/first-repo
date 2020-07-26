/*

export const changeNameAction = (name) => {
    return {
        type: 'CHANGE_NAME', payload: name
    }
}
*/


export const changeNameAction = () => {
    return (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(resp => {
          dispatch({type: 'CHANGE_NAME', payload: resp[0].name})
      });
    }
}

export const addWishAction = () => {
    return {
        type: 'ADD_WISH', payload: 'wake up'
    }
}
