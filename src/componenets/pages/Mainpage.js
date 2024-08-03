import React, { Component } from "react";
import data from "./Imagedata";
import "./mainpage.css";
import Slider from "./Slider";

export default class Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      arrow: "right",
    };
  }
  prevSlide() {
    this.setState({
      slideIndex:
        this.state.slideIndex === 0
          ? data.length - 1
          : this.state.slideIndex - 1,
      arrow: "left",
    });
  }
  nextSlide() {
    this.setState({
      slideIndex:
        this.state.slideIndex === data.length - 1
          ? 0
          : this.state.slideIndex + 1,
      arrow: "right",
    });
  }
  componentDidMount() {
    this.timer = setInterval(() => this.autoPlay(), 5000);
  }
  autoPlay() {
    if (this.state.arrow === "left") {
      this.setState({
        slideIndex:
          this.state.slideIndex === 0
            ? data.length - 1
            : this.state.slideIndex - 1,
      });
    } else {
      this.setState({
        slideIndex:
          this.state.slideIndex === data.length - 1
            ? 0
            : this.state.slideIndex + 1,
      });
    }
  }
  render() {
    return (
      <div className="App">
       
        <div className="container">
          <div className="slideshow-container">
            <Slider slideIndex={this.state.slideIndex} />
            <span className="prev" onClick={() => this.prevSlide()}>
              &#10094;
            </span>
            <span className="next" onClick={() => this.nextSlide()}>
              &#10095;
            </span>
          </div>
        </div>
      </div>
    );
  }
}
