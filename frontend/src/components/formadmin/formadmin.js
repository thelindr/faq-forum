import React from "react"

class Formadmin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: "",
      lastname: "",
      answer: "",
      question: props.question //någon props..
    }
  }

  handleFirstname = event => {
    this.setState({
      firstname: event.target.value
    })
  }

  handleLastname = event => {
    this.setState({
      lastname: event.target.value
    })
  }

  handleAnswer = event => {
    this.setState({
      answer: event.target.value
    })
  }

//update this function with the id from the question Api
  handleQuestion = event => {
    this.setState({
      question: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch("http://localhost:8080/answers", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(response => (
      response.json()
    ))
  }

  render() {
    return (
      <div className="form-container">
        <h1>Add your answer</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.firstname} onChange={this.handleFirstname} placeholder="First name" />
          <input type="text" value={this.state.lastname} onChange={this.handleLastame} placeholder="Last name" />
          <input type="text" value={this.state.answer} onChange={this.handleAnswer} placeholder="Enter you answer" />
          <input type="hidden" value={this.props.question} onChange={this.handleQuestion} placeholder="Antal" />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default Formadmin
