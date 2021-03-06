export const Types = {
  RUN_CHAMPIONSHIP: "movies/RUN_CHAMPIONSHIP",
  SET_RESULT: "movies/SET_RESULT",
  ERROR_RESULT: "movies/ERROR_RESULT"
}

const INITIAL_STATE = {
  loading: false,
  data: null,
  error: null
};

export default function movies(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.RUN_CHAMPIONSHIP:
      return {
        ...state,
        loading: true
      };
    case Types.SET_RESULT:
      return {
        ...state,
        loading: false,
        data: action.payload.data
      }
    case Types.ERROR_RESULT:
      return {
        ...state,
        loading: false,
        data: null
      }
    default:
      return state;
  }
}

export const Creators = {
  runChampionship: movies => ({
    type: Types.RUN_CHAMPIONSHIP,
    payload: { movies }
  }),

  setResult: data => ({
    type: Types.SET_RESULT,
    payload: { data }
  }),

  setErrorResult: () => ({
    type: Types.ERROR_RESULT,
    payload: {}
  })
}
