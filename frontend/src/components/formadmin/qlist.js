import React from "react"
import QListItem from "./qlistitem"

export default class QList extends React.Component {
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
    const notAnsweredQuestions = this.state.questionAPI.filter((item => item.answered === false))
    return (
      <div>
        {notAnsweredQuestions.length}
        {notAnsweredQuestions.map(item => (
          <QListItem
            question={item.question}
            title={item.question}
            category={item.category}
            firstname={item.firstname}
            email={item.email} />
        ))}
      </div>
    )
  }
}
