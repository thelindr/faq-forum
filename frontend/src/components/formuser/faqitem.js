import React from "react"
// import { Link } from "react-router-dom"

export default class Faqitem extends React.Component {

  render() {
    return (
      <div className="Faq-item">
        <div className="faq-question">
          {this.props.question}
        </div>
        <div className="faq-answer">
          {this.props.answer}
        </div>
      </div>
    )
  }

}
