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
      category: "",
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
    }).then(response => (
      this.setState({
        firstname: "",
        lastname: "",
        email: "",
        title: "",
        question: "",
        category: ""
    }, () => { console.log("State has been reset", response, response.status) })
  ))
}


  render() {
    return (
      <div>
        <form className="ask" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.firstname} onChange={this.handleFirstname} placeholder="firstname" />
          <input type="text" value={this.state.lastname} onChange={this.handleLastname} placeholder="lastname" />
          <input type="text" value={this.state.email} onChange={this.handleEmail} placeholder="email" />
          <input type="text" value={this.state.title} onChange={this.handleTitle} placeholder="title" />
          <input className="question" type="text" value={this.state.question} onChange={this.handleQuestion} placeholder="question" />
          <select type="text" value={this.state.category} onChange={this.handleCategory} placeholder="category">
            <option value="value1">OP-1</option>
            <option value="value2">PocketOperator</option>
            <option value="value3">OD-11</option>
          </select>
          <button type="submit">ask</button>
        </form>
      </div>
    )
  }
}

export default Formuser
