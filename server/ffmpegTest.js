let ffmpeg = require('ffmpeg')

function help() {
  try {
    var process = new ffmpeg('../public/hairburning.mp4')
    process.then(
      function(video) {
        // Callback mode
        video.fnExtractFrameToJPG(
          '../public/frames',
          {
            frame_rate: 1,
            number: 5,
            file_name: 'my_frame_%t_%s'
          },
          function(error, files) {
            if (!error) console.log('Frames: ' + files)
          }
        )
      },
      function(err) {
        console.log('Error: ' + err)
      }
    )
  } catch (e) {
    console.log(e.code)
    console.log(e.msg)
  }
}

help()
