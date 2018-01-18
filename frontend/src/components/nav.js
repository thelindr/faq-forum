import React from "react"
import { Link } from "react-router-dom"
import Login from "./formadmin/login"
import telogo from "./formuser/categories/telogo.png"

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true
    }
  }

  toggleHiddenlogin = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  getAdminbuttontext = () => {
    if (this.state.isHidden) {
      return "ADMIN"
    } else {
      return "X"
    }
  }

  render() {
    return (
      <div>
        {/* <button> <Link to="/formuser"> Formuser </Link></button> */}
        <button className="adminbutton" onClick={this.toggleHiddenlogin.bind(this)}> {this.getAdminbuttontext()} </button>
        {!this.state.isHidden && <Login />}
      </div>
    )
  }
}
