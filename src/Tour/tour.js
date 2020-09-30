import React, { Component } from "react";
import "./tour.scss";

export default class Tour extends Component {
  state = {
    isShowing: false
  };

  handleInfo = () => {
    this.setState({
      isShowing: !this.state.isShowing
    });
  };
  render() {
    console.log(this.props.tour);
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="photo of the city" />
          <span className="close-btn" onClick={() => removeTour(id)}>
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <span>
            <i className="fas fa-caret-square-down" onClick={this.handleInfo} />
          </span>
          {this.state.isShowing && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
