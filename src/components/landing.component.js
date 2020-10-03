import React, { Component } from "react"
import axios from "axios"
import ScrollIntoView from "react-scroll-into-view"

import Gallery from "react-grid-gallery"

const IMAGES = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "Leaf Images",
  },
  {
    src:
      "https://images.unsplash.com/photo-1557234195-bd9f290f0e4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1557234195-bd9f290f0e4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    thumbnailWidth: 280,
    thumbnailHeight: 219,
    caption: "Leaf Images",
  },

  {
    src:
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
    thumbnailWidth: 400,
    thumbnailHeight: 212,
    caption: "Leaf Images",
  },
  {
    src:
      "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    thumbnailWidth: 250,
    thumbnailHeight: 212,
    caption: "Leaf Images",
  },
  {
    src:
      "https://images.unsplash.com/photo-1530541835461-dedaf9cf368a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1530541835461-dedaf9cf368a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80",
    thumbnailWidth: 250,
    thumbnailHeight: 212,
    caption: "Leaf Images",
  },
  {
    src:
      "https://images.unsplash.com/photo-1457530378978-8bac673b8062?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1457530378978-8bac673b8062?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    thumbnailWidth: 400,
    thumbnailHeight: 212,
    caption: "Leaf Images",
  },
  {
    src:
      "https://images.unsplash.com/photo-1563201515-adbe35c669c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1563201515-adbe35c669c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
    thumbnailWidth: 400,
    thumbnailHeight: 212,
    caption: "Leaf Images",
  },
  {
    src:
      "https://images.unsplash.com/photo-1529313780224-1a12b68bed16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1529313780224-1a12b68bed16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    thumbnailWidth: 200,
    thumbnailHeight: 212,
    caption: "Leaf Images",
  },
  {
    src:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    thumbnailWidth: 350,
    thumbnailHeight: 212,
    caption: "Leaf Images",
  },
  {
    src:
      "https://images.unsplash.com/photo-1522579479806-486feddb6d25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1522579479806-486feddb6d25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    thumbnailWidth: 200,
    thumbnailHeight: 212,
    caption: "Leaf Images",
  },
  {
    src:
      "https://images.unsplash.com/photo-1551924769-258e56dae218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1551924769-258e56dae218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80",
    thumbnailWidth: 400,
    thumbnailHeight: 212,
    caption: "Leaf Images",
  },
  {
    src:
      "https://images.unsplash.com/uploads/141247613151541c06062/c15fb37d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    thumbnail:
      "https://images.unsplash.com/uploads/141247613151541c06062/c15fb37d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    thumbnailWidth: 400,
    thumbnailHeight: 212,
    caption: "Leaf Images",
  },
  {
    src:
      "https://images.unsplash.com/photo-1518994603110-1912b3272afd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1518994603110-1912b3272afd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80",
    thumbnailWidth: 200,
    thumbnailHeight: 212,
    caption: "Leaf Images",
  },
  {
    src:
      "https://images.unsplash.com/photo-1560466683-62821c7ab0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1560466683-62821c7ab0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    thumbnailWidth: 200,
    thumbnailHeight: 212,
    caption: "Leaf Images",
  },
  {
    src:
      "https://images.unsplash.com/photo-1536330256861-f31e792c966d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1536330256861-f31e792c966d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    thumbnailWidth: 400,
    thumbnailHeight: 212,
    caption: "Leaf Images",
  },
  {
    src:
      "https://images.unsplash.com/photo-1575527820586-5f350ab37c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1575527820586-5f350ab37c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    thumbnailWidth: 350,
    thumbnailHeight: 212,
    caption: "Leaf Images",
  },
  {
    src:
      "https://images.unsplash.com/photo-1438274754346-45322cac87e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1438274754346-45322cac87e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
    thumbnailWidth: 350,
    thumbnailHeight: 212,
    caption: "Leaf Images",
  },
  {
    src:
      "https://images.unsplash.com/photo-1568625734678-08e520f82905?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1568625734678-08e520f82905?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80",
    thumbnailWidth: 200,
    thumbnailHeight: 212,
    caption: "Leaf Images",
  },
  {
    src:
      "https://images.unsplash.com/photo-1531657593754-31271b7d06dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1531657593754-31271b7d06dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    thumbnailWidth: 200,
    thumbnailHeight: 212,
    caption: "Leaf Images",
  },
]

class Landing extends Component {
  state = {
    selectedFile: null,
    imagePreviewUrl: null,
    disease: [],
    uploadSuccess: false,
    moreInfo: false,
  }

  fileChangedHandler = (e) => {
    this.setState({
      selectedFile: e.target.files[0],
    })

    let reader = new FileReader()

    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result,
      })
    }

    reader.readAsDataURL(e.target.files[0])
  }

  onSubmit = (e) => {
    e.preventDefault()

    const file = this.state.selectedFile

    let formData = new FormData()
    formData.append("image", file)

    axios
      .post("http://localhost:5000", formData)
      .then((res) => {
        this.setState({
          disease: res.data,
          uploadSuccess: true,
        })
        console.log(res.data)
      })
      .catch((err) => console.log("error occurred"))

    console.log("uploaded")
  }

  onKnowMore = (e) => {
    e.preventDefault()

    this.setState({
      moreInfo: true,
    })
  }

  render() {
    let $imagePreview = <div className="previewText image-container"></div>
    if (this.state.imagePreviewUrl) {
      $imagePreview = (
        <div className="image-container">
          <img src={this.state.imagePreviewUrl} alt="icon" width="150" />{" "}
        </div>
      )
    }

    const { disease, uploadSuccess, moreInfo } = this.state

    return (
      <div>
        <div className="mt-3 mb-3">
          <div className="b3 black-color">
            <p>
              Test <span className="theme-color">your leaf</span>
            </p>
          </div>
          <hr className="h-row"></hr>
          <hr className="h-row mb-3"></hr>
          <div className="container-2 ml-10">
            <div className="row d-flex justify-content-center pt-5 mb-2">
              <div className="custom-file col-6">
                <input
                  type="file"
                  name="avatar"
                  className="custom-file-input"
                  onChange={this.fileChangedHandler}
                />
                <br />
                <br />
                <label className="custom-file-label" htmlFor="customFile">
                  <span className="file-choose-label">
                    know your leaf better...
                  </span>
                </label>
              </div>
              <div className="col-4 d-flex align-items-end">
                <button
                  className="theme-btn"
                  type="button"
                  onClick={this.onSubmit}
                >
                  <i className="fa fa-upload" aria-hidden="true"></i> Upload
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-8">{$imagePreview}</div>
            </div>
            <div className="row">
              {uploadSuccess ? (
                <div className="col-12">
                  <div className="dark-bg d-flex justify-content-center align-items-center">
                    <div className="white-color">
                      {disease.prediction.result === "healthy"
                        ? `Leaf is ${disease.prediction.accuracy}% healthy`
                        : `Leaf is ${
                            disease.prediction.accuracy
                          }% unhealthy and has a disease of ${disease.prediction.result.replace(
                            /_/g,
                            " "
                          )}`}
                    </div>
                  </div>
                  <ScrollIntoView selector="#moreInfo">
                    <button
                      className="theme-btn"
                      type="button"
                      onClick={this.onKnowMore}
                    >
                      See Details
                    </button>
                  </ScrollIntoView>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="container-3 mt-3 mb-3">
          <div className="b3 black-color">
            <p>
              Our <span className="theme-color">Gallery</span>
            </p>
          </div>
          <hr className="h-row"></hr>
          <hr className="h-row mb-3"></hr>
          <Gallery className="img-fluid" images={IMAGES} />
        </div>
        <div className="container-4 mt-3 mb-3">
          <div className="b3 black-color">
            <p>
              Our <span className="theme-color">Team</span>
            </p>
          </div>
          <hr className="h-row"></hr>
          <hr className="h-row mb-3"></hr>
        </div>

        <div className="container-6">
          <div className="b3 black-color">
            <p>
              About <span className="theme-color">Us</span>
            </p>
          </div>
          <hr className="h-row"></hr>
          <hr className="h-row mb-3"></hr>
        </div>
        <div className="container-7">
          <div className="b3 black-color">
            <p>
              Frequently <span className="theme-color">Asked Questions</span>
            </p>
          </div>
          <hr className="h-row"></hr>
          <hr className="h-row mb-3"></hr>
        </div>

        <div id="moreInfo" className="container-5 mt-3">
          <div className="container">
            {moreInfo ? (
              <div>
                <div className="row">
                  <span className="col-12 h1 black-color">
                    Get a detailed issue
                  </span>
                  <br />{" "}
                  <span className="col-12 h3 theme-color">of your Leaf</span>
                </div>
                <div className="row">
                  <table className="table mt-2 table-bg">
                    <tbody
                      style={{ textAlign: "left" }}
                      className="theme-color"
                    >
                      <tr>
                        <th scope="row">1</th>
                        <td colSpan="2">Result : </td>
                        <td>{disease.prediction.result.replace(/_/g, " ")}</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td colSpan="2">Accuracy : </td>
                        <td>{disease.prediction.accuracy}</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td colSpan="2">Bacterial Spot : </td>
                        <td>{disease.probability.Bacterial_Spot}</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td colSpan="2">Early blight : </td>
                        <td>{disease.probability.Early_Blight}</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td colSpan="2">Late blight : </td>
                        <td>{disease.probability.Late_Blight}</td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td colSpan="2">Leaf Mold : </td>
                        <td>{disease.probability.Leaf_Mold}</td>
                      </tr>
                      <tr>
                        <th scope="row">7</th>
                        <td colSpan="2">Septoria Leaf Spot : </td>
                        <td>{disease.probability.Septoria_Leaf_Spot}</td>
                      </tr>
                      <tr>
                        <th scope="row">8</th>
                        <td colSpan="2">Target Spot : </td>
                        <td>{disease.probability.Target_Spot}</td>
                      </tr>
                      <tr>
                        <th scope="row">9</th>
                        <td colSpan="2">Two-spotted Spider Mites : </td>
                        <td>{disease.probability.Two_spotted_Spider_Mites}</td>
                      </tr>
                      <tr>
                        <th scope="row"></th>
                        <td colSpan="2">Yellow Leaf Curl Virus : </td>
                        <td>{disease.probability.Yellow_Leaf_Curl_Virus}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="footer white-color">Copyright</div>
      </div>
    )
  }
}

export default Landing
