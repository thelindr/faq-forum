import React from "react"
// import { BrowserRouter } from "react-router-dom"
import Formuser from "../components/formuser/formuser"
import Formadmin from "../components/formadmin/formadmin"
// import QList from "../components/formadmin/qlist"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questionAPI: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/questions").then(response => (
      response.json()
    )).then(json => {
      console.log(json)
      this.setState({ questionAPI: json })
    })
  }

  render() {
    return (
      <div>
        {/* <QList
          notAnsweredQuestions={this.state.questionAPI.filter((item => item.answered === false))} /> */}
        <Formuser />
        <Formadmin
          questions={this.state.questionAPI} />
      </div>
    )
  }

}

export default App
