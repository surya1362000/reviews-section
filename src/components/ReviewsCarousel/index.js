import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  previous = () => {
    this.setState(prevState => {
      if (prevState.index <= 0) {
        return {
          index: prevState.index,
        }
      }
      return {index: prevState.index - 1}
    })
  }

  next = () => {
    this.setState(prevState => {
      if (prevState.index >= 3) {
        return {index: prevState.index}
      }
      return {index: prevState.index + 1}
    })
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[index]

    return (
      <div className="main">
        <h1 className="heading">Reviews</h1>
        <ul className="uo-list">
          <li key={username}>
            <img src={imgUrl} alt={username} />
            <p className="name">{username}</p>
            <div className="btn-container">
              <button type="button" data-testid="leftArrow">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                  alt="left arrow"
                  onClick={this.previous}
                />
              </button>
              <button type="button" data-testid="rightArrow">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                  alt="right arrow"
                  onClick={this.next}
                />
              </button>
            </div>
            <p>{companyName}</p>
            <p className="desc">{description}</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default ReviewsCarousel
