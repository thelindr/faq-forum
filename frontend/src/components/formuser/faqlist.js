import React from "react"
// import { Link } from "react-router-dom"
import Faqitem from "./faqitem"
// import CurrentFAQ from "currectFAQ"

const currentFaq = require("./currectFAQ.js")

export default class Faqlist extends React.Component {

  render() {
    return (
      <div className="Faq-list">
        {currentFaq.map(item => (
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
