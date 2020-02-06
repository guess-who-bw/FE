


const initialState = {
  email: 'testing',
  password: '123456',
  score: 0,
  isEditing: false
}

export const Reducer = (state = initialState, action) => {

  switch(action.type) {
      case 'UPDATE_SCORE':
          console.log(state.score);
          return {
              ...state,
              // score: ++state.score
          }
      case 'TOGGLE_EDIT':
          return {
              ...state,
            isEditing: !state.editing
          }
      default:
          return state;
  }
}