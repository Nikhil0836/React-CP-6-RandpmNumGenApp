// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenApp extends Component {
  state = {num: 0}

  onRandomNumGen = () => {
    const getRandom = Math.ceil(Math.random() * 100)

    this.setState({num: getRandom})
  }

  render() {
    const {num} = this.state
    return (
      <div className="bg-container">
        <div className="random-num-card">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="generate-btn"
            type="button"
            onClick={this.onRandomNumGen}
          >
            Generate
          </button>
          <p className="num">{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenApp
