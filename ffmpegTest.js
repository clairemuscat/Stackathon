let ffmpeg = require('ffmpeg')

try {
  let process = new ffmpeg('./server/api/cassandra.mov')
  process.then(
    function(video) {
      // Callback mode
      console.log(video)
      video.fnExtractFrameToJPG(
        './public/frames',
        {
          frame_rate: 1,
          number: 5,
          file_name: 'my_frame_%t_%s'
        },
        function(error, files) {
          console.log('Frames: ' + files)
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
