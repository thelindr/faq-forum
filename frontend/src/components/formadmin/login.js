import React from "react"

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      message: ""
    }
  }

handleUsername = event => {
  this.setState({
    username: event.target.value
  })
}

handlePassword = event => {
  this.setState({
    password: event.target.value
  })
}

handleSubmit = event => {
  event.preventDefault()
  if (this.validateFields() === false) {
    this.setState({ message: "All fields required" })
  } else {
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(response => {
      if (response.ok) {
        this.setState({ message: `Welcome ${this.state.username}` })
      } else {
        this.setState({ message: "unknown user" })
      }
      this.setState({
        username: "",
        password: ""
      }, () => { console.log("State has been reset", response, response.status) })
    })
  }
}

validateFields = () => {
  if (this.state.username && this.state.password) {
    return true
  }
  return false
}

validate = () => {
  if (this.state.username !== this.state.password) {
    return false
  }
}

getMessage = () => {
  if (this.state.message.includes("Welcome")) {
    return <p id="message">{this.state.message} {this.state.username}</p>
  } else if (this.state.message === "unknown user") {
    return <p id="message">{this.state.message}</p>
  }
}

render() {
  return (
    <div>
      <div className="form">
        <form className="loginform" onSubmit={this.handleSubmit}>
          <p>log in</p>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsername}
            placeholder="username" />
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePassword}
            placeholder="password"
            pattern=".{6,}"
            title="password must contain atleast 6 characters" />
          <div className="message">
            {this.getMessage()}
          </div>
          <button>✓</button>
        </form>
      </div>
    </div>

  )
}
}

export default Login
