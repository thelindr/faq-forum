import React from "react"
import CategoryButton from "./categorybutton"

const categories = [
  "OP-1",
  "pocket operator",
  "OD-11",
  "checkout and shipping"
]

export default class Categories extends React.Component {

  render() {
    return (
      <div className="buttoncategorys">
        {categories.map(item => (
          <CategoryButton
            item={item} />
        ))}
      </div>
    )
  }
}
