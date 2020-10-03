import React, { Component } from "react"

class ImageSlider extends Component {
  render() {
    return (
      <div className="container-1 mt-1">
        <div className="outer d-flex justify-content-center align-items-center">
          <div>
            <span className="b3 theme-color">We make your land </span> <br />{" "}
            <span className="b5 theme-color">with the best value</span>
            <div className="mt-4">
              <button className="theme-btn mb-1 mr-lg-3" type="button">
                Our Guidelines
              </button>
              <button className="theme-btn mt-1 ml-lg-3" type="button">
                Make a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ImageSlider
