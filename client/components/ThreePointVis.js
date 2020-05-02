import * as React from 'react'
import {connect} from 'react-redux'
import {getEmotionsThunk} from '../store/emotionData'
import {getImpressionsThunk} from '../store/impressions'
import NavBar from './navbar'

export class ThreePointVis extends React.Component {
  componentDidMount() {
    this.props.getAllEmotions()
    this.props.getAllImpressions()
  }
  render() {
    if (this.props.emotions) {
      let emotions = this.props.emotions
      let anger =
        emotions.reduce((accum, val) => accum + parseFloat(val.anger), 0) /
        emotions.length
      let disgust =
        emotions.reduce((accum, val) => accum + parseFloat(val.disgust), 0) /
        emotions.length
      let joy =
        emotions.reduce((accum, val) => accum + parseFloat(val.joy), 0) /
        emotions.length
      let sadness =
        emotions.reduce((accum, val) => accum + parseFloat(val.sadness), 0) /
        emotions.length
      let surprise =
        emotions.reduce((accum, val) => accum + parseFloat(val.surprise), 0) /
        emotions.length
      let fear =
        emotions.reduce((accum, val) => accum + parseFloat(val.fear), 0) /
        emotions.length
      let averages = {anger, disgust, joy, sadness, surprise, fear}
      if (this.props.impressions) {
        let impressions = this.props.impressions
        let negative =
          impressions.reduce(
            (accum, val) => accum + parseFloat(val.negative),
            0
          ) / impressions.length
        let positive =
          impressions.reduce(
            (accum, val) => accum + parseFloat(val.positive),
            0
          ) / impressions.length
        let neutral =
          impressions.reduce(
            (accum, val) => accum + parseFloat(val.neutral),
            0
          ) / impressions.length
        let impAverages = {negative, positive, neutral}
        console.log(impAverages)
      }
    }
    return <header>Nuance</header>
  }
}

const mapState = state => {
  return {
    email: state.user.email,
    emotions: state.emotions,
    impressions: state.impressions
  }
}

const mapDispatch = dispatch => {
  return {
    getAllEmotions: () => dispatch(getEmotionsThunk()),
    getAllImpressions: () => dispatch(getImpressionsThunk())
  }
}

export default connect(mapState, mapDispatch)(ThreePointVis)
