import React from "react"
import { Link } from "react-router-dom"

console.log("I'm in CategoryButton Component")

class CategoryButton extends React.Component {

  render() {
    return (
      <div className="oneCategory">

        <h2 className="category-navigation">
          <Link className="link" to={`/${this.props.item}`}>{this.props.item}</Link>
        </h2>

      </div>
    )
  }

}

export default CategoryButton
