export const Types = {
  RUN_CHAMPIONSHIP: "movies/RUN_CHAMPIONSHIP"
}

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null
};

export default function movies(state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case Types.RUN_CHAMPIONSHIP:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}

export const Creators = {
  runChampionship: (movies) => ({
    type: Types.RUN_CHAMPIONSHIP,
    payload: { movies }
  })
}
