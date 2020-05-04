import React from 'react'
import axios from 'axios'

class ImageUploadForm extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = async () => {
    event.preventDefault()
    let urlObj = {}
    urlObj.url = event.target.url.value
    try {
      await axios.post('/api', urlObj)
    } catch (err) {
      alert('There was an issue analyzing your media')
    }
  }
  render() {
    return (
      <form className="image" onSubmit={this.handleSubmit}>
        <input placeholder="enter url here" name="url" />
        <button className="button-3" type="submit">
          {' '}
          Get Analysis{' '}
        </button>
      </form>
    )
  }
}
export default ImageUploadForm
