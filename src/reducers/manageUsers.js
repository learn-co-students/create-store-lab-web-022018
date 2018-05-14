export default function manageUsers(state, action){
  console.log(state={users:[]}, action)
  switch (action.type){
    case 'ADD_USER':
      const newState = state.users.push({
        username: action.user.username,
        hometown: action.user.hometown
      })
      return ({...state})
    default:
      return state;

  }

}
