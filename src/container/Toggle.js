import React, { Component } from 'react'

export default class Toggle extends Component {
  state = {
    isToggled: false,
  }

  toggleMe = () => {
    const { isToggled } = this.state
    this.setState({ isToggled: !isToggled })
  }

  render() {
    return (
      <React.Fragment>
        {this.props.toggle(this.state.isToggled, this.toggleMe)}
      </React.Fragment>
    )
  }
}
