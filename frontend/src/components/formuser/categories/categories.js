import React from "react"
import CategoryButton from "./categorybutton"
import Formuser from "../formuser"
import telogo from "./telogo.png"

const categories = [
  "OP-1",
  "pocket operator",
  "OD-11",
  "checkout and shipping"
]

export default class Categories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true
    }
  }

  toggleHiddenbox = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  // askQuesetionbuttontext

  askQuesetionbuttontext = () => {
    if (this.state.isHidden) {
      return "ask us a question"
    } else {
      return "close"
    }
  }

  render() {
    return (
      <div>
        <div className="headertext">
          <img src={telogo} alt="TELOGO" width="40%"/>
          <h1 id="nomargin"> frequently asked questions</h1>
          <p id="notopmargin">choose your category</p>
        </div>
        <div className="buttoncategorys">
          {categories.map(item => (
            <CategoryButton
              item={item} />
          ))}
        </div>
        <div className="questionbutton">
          <button className="buttoncat" onClick={this.toggleHiddenbox.bind(this)}>{this.askQuesetionbuttontext()} </button>
          <div id="newfaqtoggle">
            {!this.state.isHidden && <Formuser />}
          </div>
        </div>
      </div>
    )
  }
}
