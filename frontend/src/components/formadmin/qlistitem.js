import React from "react"

export default class QListItem extends React.Component {

  render() {
    return (
      <div className="q-item">
        <p>Category: {this.props.category}</p>
        <p>Title: {this.props.title}</p>
        <p>Question: {this.props.question}</p>
      </div>
    )
  }
}
