import React, { Component } from 'react'

class HeaderDropDown extends Component {
  render() {
    return (
      <div>
        {this.props.dropDown.map(item => {
          return <h5 className="dropDownCell white">{item}</h5>
        })}
      </div>
    )
  }
}

export default HeaderDropDown
