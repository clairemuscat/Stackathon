import * as React from 'react'
import {connect} from 'react-redux'
import {getEmotionsThunk} from '../store/emotionData'
import {getImpressionsThunk} from '../store/impressions'
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
  VictoryLabel,
  VictoryPie,
  VictoryBrushContainer
} from 'victory'

export class ThreePointVis extends React.Component {
  componentDidMount() {
    this.props.getAllEmotions()
    this.props.getAllImpressions()
  }
  render() {
    let emotions = this.props.emotions
    let joyAvg =
      emotions.reduce((accum, val) => accum + parseFloat(val.joy), 0) /
      emotions.length
    let joyPoint = [{joy: 1, average: joyAvg}]

    let angerAvg =
      emotions.reduce((accum, val) => accum + parseFloat(val.anger), 0) /
      emotions.length
    let angerPoint = [{anger: 3, average: angerAvg}]

    let disgustAvg =
      emotions.reduce((accum, val) => accum + parseFloat(val.disgust), 0) /
      emotions.length
    let disgustPoint = [{disgust: 5, average: disgustAvg}]

    let sadnessAvg =
      emotions.reduce((accum, val) => accum + parseFloat(val.sadness), 0) /
      emotions.length
    let sadnessPoint = [{sadness: 6, average: sadnessAvg}]

    let surpriseAvg =
      emotions.reduce((accum, val) => accum + parseFloat(val.surprise), 0) /
      emotions.length
    let surprisePoint = [{surprise: 2, average: surpriseAvg}]

    let fearAvg =
      emotions.reduce((accum, val) => accum + parseFloat(val.fear), 0) /
      emotions.length
    let fearPoint = [{fear: 4, average: fearAvg}]

    let impressions = this.props.impressions
    let negative =
      impressions.reduce((accum, val) => accum + parseFloat(val.negative), 0) /
      impressions.length
    let positive =
      impressions.reduce((accum, val) => accum + parseFloat(val.positive), 0) /
      impressions.length
    let neutral =
      impressions.reduce((accum, val) => accum + parseFloat(val.neutral), 0) /
      impressions.length

    return (
      <>
        <div id="victoryPage">
          <VictoryPie
            theme={VictoryTheme.material}
            id="pieChart"
            padding={1}
            radius={50}
            colorScale={['grey', 'white', 'navy']}
            data={[
              {x: 'Neutral', y: neutral},
              {x: 'Positive', y: positive},
              {x: 'Negative', y: negative}
            ]}
          />
          <VictoryLabel
            x={200}
            y={200}
            style={{fontSize: 30}}
            text="Emotions & Impressions"
            id="impLabel"
          />
          {this.props.emotions ? (
            <VictoryChart
              domainPadding={10}
              id="victory"
              style={{parent: {maxWidth: '50%'}, data: {stroke: 'teal'}}}
              width={600}
              height={500}
              theme={VictoryTheme.material}
              containerComponent={
                <VictoryBrushContainer
                  brushDomain={{x: [1, 7], y: [-3, 3]}}
                  brushDimension="y"
                  brushStyle={{fill: 'teal', opacity: 0.2}}
                />
              }
            >
              <VictoryAxis
                tickValues={[
                  'Joy',
                  'Surprise',
                  'Anger',
                  'Fear',
                  'Disgust',
                  'Sadness'
                ]}
              />
              <VictoryAxis dependentAxis />
              <VictoryStack colorScale="cool">
                <VictoryBar data={joyPoint} x="joy" y="average" />
                <VictoryBar data={surprisePoint} x="surprise" y="average" />
                <VictoryBar data={angerPoint} x="anger" y="average" />
                <VictoryBar data={fearPoint} x="fear" y="average" />
                <VictoryBar data={disgustPoint} x="disgust" y="average" />
                <VictoryBar data={sadnessPoint} x="sadness" y="average" />
              </VictoryStack>
            </VictoryChart>
          ) : (
            'Loading'
          )}
        </div>
      </>
    )
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
