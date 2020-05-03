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
    await axios.post('/api', urlObj)
    window.location.href = '/kairos'
  }
  render() {
    return (
      <form className="image" onSubmit={this.handleSubmit}>
        <input placeholder="enter url here" name="url" />
        <button id="buttonFlex" type="submit">
          {' '}
          Get Analysis{' '}
        </button>
      </form>
    )
  }
}
export default ImageUploadForm
