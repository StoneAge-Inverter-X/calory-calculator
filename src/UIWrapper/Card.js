import { Component } from "react";
import cssClasses from "./Card.module.css";

class Card extends Component {
  render() {
    console.log(this.props.children);
    return <div className={cssClasses.card}>{this.props.children}</div>;
  }
}

export default Card;
