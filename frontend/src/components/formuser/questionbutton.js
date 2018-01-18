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
