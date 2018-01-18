import React from "react"
// import { Link } from "react-router-dom"

export default class Faqitem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isHidden: true
    }
  }

  handleClick = () => {
    const toggleMode = !this.state.isHidden
    this.setState({ isHidden: toggleMode })
  }

  render() {
    const Answer = () => (
      <div className="accordion-answer-content">
        <p>{this.props.answer}</p>
      </div>
    )

    return (
      <div>
        <div className="accordion-question" onClick={this.handleClick}>
          <h3>{this.props.question}</h3>
        </div>
        {!this.state.isHidden && <Answer />}
      </div>

    )
  }

}
