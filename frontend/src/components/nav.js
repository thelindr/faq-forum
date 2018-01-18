import React from "react"
import { Link } from "react-router-dom"
import Login from "./formadmin/login"

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

  render() {
    return (
      <div className="Nav">
        {/* <button> <Link to="/formuser"> Formuser </Link></button> */}
        <button className="adminbutton" onClick={this.toggleHiddenlogin.bind(this)}> admin </button>
        {!this.state.isHidden && <Login />}
      </div>
    )
  }
}
