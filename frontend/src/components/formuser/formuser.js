import React from "react"
import "./style.css"

class Formuser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      title: "",
      question: "",
      category: ""
    }
  }

  handleFirstname = event => {
    this.setState({
      firstname: event.target.value
    })
  }

    handleLastname= event => {
      this.setState({
        lastname: event.target.value
      })
    }

    handleEmail = event => {
      this.setState({
        email: event.target.value
      })
    }

    handleTitle = event => {
      this.setState({
        title: event.target.value
      })
    }

    handleQuestion = event => {
      this.setState({
        question: event.target.value
      })
    }

    handleCategory = event => {
      this.setState({
        category: event.target.value
      })
    }

  handleSubmit = event => {
    event.preventDefault()
    fetch("http://localhost:8080/questions", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(response => {
      if (response.ok) {
        this.setState({
          firstname: "",
          lastname: "",
          email: "",
          title: "",
          question: "",
          category: ""
        }, () => { console.log("State has been reset", response, response.status) })
      } else {
        // errors...
      }
    })
  }

  render() {
    return (
      <div>
        <form className="ask" onSubmit={this.handleSubmit}>
          <p>teenage engineering</p>
          <input
            type="text"
            value={this.state.firstname}
            onChange={this.handleFirstname}
            placeholder="firstname" />
          <input
            type="text"
            value={this.state.lastname}
            onChange={this.handleLastname}
            placeholder="lastname" />
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleEmail}
            placeholder="email" />
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleTitle}
            placeholder="title" />
          <textarea id="usertextarea"
            type="text"
            value={this.state.question}
            onChange={this.handleQuestion}
            placeholder="question"
            spellCheck="false" />
          <select
            type="text"
            value={this.state.category}
            onChange={this.handleCategory}
            placeholder="category">
            <option value="" selected disabled hidden>Choose category here</option>
            <option
              value="OP-1">OP-1
            </option>
            <option
              value="PocketOperator">PocketOperator
            </option>
            <option
              value="OD-11">OD-11
            </option>
            <option
              value="other">Other
            </option>
          </select>
          <button type="submit">ask</button>
        </form>
      </div>
    )
  }
}

export default Formuser
