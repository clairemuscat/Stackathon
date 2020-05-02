import axios from 'axios'

const GET_EMOTION_DATA = 'GET_EMOTION_DATA'

export const getEmotions = emotions => ({type: GET_EMOTION_DATA, emotions})

export const getEmotionsThunk = () => async dispatch => {
  try {
    const response = await axios.get('/api')
    const emotions = response.data
    dispatch(getEmotions(emotions))
  } catch (err) {
    console.error(err)
  }
}

let initialState = []

export const allEmotionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMOTION_DATA:
      return action.emotions
    default:
      return state
  }
}
