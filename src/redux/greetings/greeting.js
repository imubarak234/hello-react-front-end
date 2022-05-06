import Axios from 'axios';

const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST';
const ADD_STUFF = 'ADD_STUFF';

export const getThings = () => ({
  type: GET_THINGS_REQUEST,
});

export const addThings = (payload) => ({
  type: ADD_STUFF,
  payload,
});

export const fetchGreetingApi = () => async (dispatch) => {
  const value = await Axios.get('/v1/greetings');
  const { greeting } = value.data;
  dispatch(addThings(greeting));
};

export const initialState = [];

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_THINGS_REQUEST:
      return state;
    case ADD_STUFF:
      return [action.payload];
    default:
      return state;
  }
}

export default rootReducer;
