import React from "react"
// import { BrowserRouter } from "react-router-dom"
import Formuser from "../components/formuser/formuser"
import Formadmin from "../components/formadmin/formadmin"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Formuser />
        <Formadmin />
      </div>
    )
  }

}

export default App
