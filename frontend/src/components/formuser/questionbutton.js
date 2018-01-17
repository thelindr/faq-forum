import React from "react"
import "./style.css"
import Formuser from "./formuser"

class Questionbutton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true
    }
  }

  toggleHiddenbox = () => {
    this.setState({
      isHidden: !this.state.isHidden
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
          isHidden: true
        }, () => { console.log("State has been reset", response, response.status) })
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleHiddenbox.bind(this)}>ask us a question</button>
        {!this.state.isHidden && <Formuser />}
      </div>
    )
  }
}
export default Questionbutton
