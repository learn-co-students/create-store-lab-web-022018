export default function manageUsers(state = {users: []}, action){
  // 1) returns the initial state after redux dispatches its initial action
  console.log("*********************STATE");
  console.log(state);
  switch (action.type) {
    case "ADD_USER":
      console.log(action);
      return Object.assign({}, state, {users: state.users.concat({"username": action.username, "hometown": action.hometown})})
      // break;
    default:
      return state
  }//switch
}//manageUsers


// write a reducer in the reducers/manageUsers.js
