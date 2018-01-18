import React from "react"
import { Link } from "react-router-dom"

console.log("I'm in CategoryButton Component")

class CategoryButton extends React.Component {

  render() {
    return (
      <div className="oneCategory">
        <Link className="link" to={`/${this.props.item}`}>
          <button id="buttonuser">
            <h2 className="category-navigation">
              {this.props.item}
            </h2>
          </button>
        </Link>
      </div>
    )
  }

}

export default CategoryButton
