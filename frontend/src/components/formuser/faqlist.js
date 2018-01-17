import React from "react"
// import { Link } from "react-router-dom"
import Faqitem from "./faqitem"
import CurrentFAQ from "./currectFAQ"

export default class Faqlist extends React.Component {

  render() {
    // const categories = CurrentFAQ
    // const selectedCategory = categories.match.params.category
    // console.log(selectedCategory)
    return (
      <div className="Faq-list">
        {CurrentFAQ.map(item => (
          <Faqitem
            key={item.id}
            id={item.id}
            category={item.category}
            question={item.question}
            answer={item.answer} />
        ))}
      </div>
    )
  }
}
