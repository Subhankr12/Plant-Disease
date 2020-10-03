import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.css"
import "bootstrap/dist/css/bootstrap.css"

import Landing from "./components/landing.component"
import ImageSlider from "./components/imageslider.component"

function App() {
  return (
    <Router>
      <div className="App">
        <ImageSlider />
        <Route path="/" exact component={Landing} />
      </div>
    </Router>
  )
}

export default App
