import React from "react"
import Formuser from "../components/formuser/formuser"
import QList from "../components/formadmin/qlist"

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
        <QList />
      </div>
    )
  }

}

export default App
