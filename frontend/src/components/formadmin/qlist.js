import React from "react"
import QListItem from "./qlistitem"

export default class QList extends React.Component {

  render() {
    return (
      <div>
        {this.props.notAnsweredQuestions.length}
        {this.props.notAnsweredQuestions.map(item => (
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
