import React from "react"
// import { Link } from "react-router-dom"

export default class Faqitem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isHidden: true
    }
  }

  handleClick = e => {
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
        <div className="accordion-question" onClick={e => this.handleClick(e)}>
          <h2>{this.props.question}</h2>
        </div>
        {!this.state.isHidden && <Answer />}
      </div>

    )
  }

}
