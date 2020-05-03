/* eslint-disable no-unused-vars */
const axios = require('axios')
const router = require('express').Router()
const Emotion = require('../db/models/emotions')
const EmotionScore = require('../db/models/emotionScore')
const cloudinary = require('cloudinary')
router.use('/users', require('./users'))

cloudinary.config({
  cloud_name: 'dh1ppbypq',
  api_key: '452681428295647',
  api_secret: 'PWKHH_13TQKvZPFtDwlBWf7QTQc'
})

// cloudinary.v2.uploader
//   .upload(
//     'server/api/emoteVid.mov',
//     {resource_type: 'video', public_id: 'Stackathon_Video_stills/me_emotions'},
//     function (error, result) {
//       console.log(result, error)
//     }
//   )
//   .then((response) => {
//     console.log(response)
//   })
//   .catch((err) => console.log(err))

const headers = {
  'Content-Type': 'application/json',
  app_id: '49086789',
  app_key: 'fa6bc2eac8f3b1ba46263e55f00b0885'
}

router.post('/', (req, resp, next) => {
  try {
    for (let i = 100; i < 200; i++) {
      cloudinary.v2.uploader.upload(
        `./server/api/cass/ezgif-frame-${i}.jpg`,
        function(error, result) {
          console.log(result, error)
          let payload = {
            image: result.url
          }
          let postEmotionUrl = `http://api.kairos.com/v2/media?source=${
            payload.image
          }`
          axios
            .post(postEmotionUrl, payload, {
              headers: headers
            })
            .then(async function(response) {
              if (
                response &&
                response.data &&
                response.data.frames &&
                response.data.frames[0].people
              ) {
                console.log(response.data.frames[0].people)
                let people = response.data.frames[0].people
                for (let j = 0; j < people.length; j++) {
                  let body = people[j].emotions
                  body.pictureId = response.data.id
                  console.log(response.data.id)
                  await Emotion.create(body)
                }
                let getAnalyticsUrl = `http://api.kairos.com/v2/analytics/${
                  response.data.id
                }`
                axios
                  .get(getAnalyticsUrl, {
                    headers: headers
                  })
                  .then(async function(res) {
                    if (res && res.data && res.data.impressions) {
                      let impressions = res.data.impressions
                      for (let k = 0; k < impressions.length; k++) {
                        console.log(impressions[k].emotion_score)
                        await EmotionScore.create(impressions[k].emotion_score)
                      }
                    }
                  })
                  .catch(function(err) {
                    console.log(err)
                  })
              }
            })
            .catch(function(err) {
              console.log(err)
            })
        }
      )
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const emotions = await Emotion.findAll()
    res.json(emotions)
  } catch (err) {
    console.log('there was an error fetching the emotions from the database')
    next(err)
  }
})

router.get('/impressions', async (req, res, next) => {
  try {
    const impressions = await EmotionScore.findAll()
    res.json(impressions)
  } catch (err) {
    console.log('there was an error fetching the emotions from the database')
    next(err)
  }
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
