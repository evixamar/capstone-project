import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HeaderDropDown extends Component {
  render() {
    return (
      <div>
        {this.props.dropDown.map(item => {
          return (
            <h5 className="dropDownCell white">
              <Link to={`/players/${item}`}>{item}</Link>
            </h5>
          )
        })}
      </div>
    )
  }
}

export default HeaderDropDown
