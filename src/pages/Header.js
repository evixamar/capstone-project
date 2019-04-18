import React, { Component } from 'react'
import HeaderDropDown from './HeaderDropDown'
import { Link } from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu1: false,
      showMenu2: false
    }
  }
  _showMenu1 = () => {
    this.setState({
      showMenu1: !this.state.showMenu1,
      showMenu2: false
    })
  }
  _showMenu2 = () => {
    this.setState({
      showMenu2: !this.state.showMenu2,
      showMenu1: false
    })
  }
  render() {
    return (
      <nav>
        <header>
          <h5 className="headerOption white">Home</h5>

          <h5 className="headerOption white" onClick={this._showMenu1}>
            Stats
          </h5>

          <h5 className="headerOption white" onClick={this._showMenu2}>
            Draft Year
          </h5>

          <Link to="/about">
            <h5 className="headerOption white">About</h5>
          </Link>
        </header>
        {this.state.showMenu2 ? (
          <div>
            <HeaderDropDown dropDown={[2016, 2017, 2018]} />
          </div>
        ) : null}
        {this.state.showMenu1 ? (
          <HeaderDropDown dropDown={['College', 2016, 2017, 2018]} />
        ) : null}
      </nav>
    )
  }
}

export default Header
