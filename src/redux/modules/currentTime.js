export const types = {
  'FETCH_NEW_TIME': 'FETCH_NEW_TIME'
};

const initialState = {
  currentTime: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_NEW_TIME:
      return {...state, currentTime: action.payload.dateString};
    default:
      return state;
  }
}

const host = 'https://fullstacktime.herokuapp.com'
export const actions = {
  updateTime: ({timezone = 'pst', str='now'}) => ({
    type: types.FETCH_NEW_TIME,
    meta: {
      type: 'api',
      url: `${host}/${timezone}/${str}.json`,
      method: 'GET'
    }
  })
}
