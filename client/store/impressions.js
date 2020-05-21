import axios from 'axios'

const GET_IMPRESSIONS_DATA = 'GET_IMPRESSIONS_DATA'

export const getImpressions = impressions => ({
  type: GET_IMPRESSIONS_DATA,
  impressions
})

export const getImpressionsThunk = () => async dispatch => {
  try {
    const response = await axios.get('/api/impressions')
    const impressions = response.data
    dispatch(getImpressions(impressions))
  } catch (err) {
    console.error(err)
  }
}

let initialState = []

export const allImpressionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMPRESSIONS_DATA:
      return action.impressions
    default:
      return state
  }
}
