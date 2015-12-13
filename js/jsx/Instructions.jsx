import React from 'react'

class Instructions extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <div className="test-instructions">
        <h1>{text}</h1>
      </div>
    )
  }
}
Instructions.defaultProps = {

}
Instructions.propTypes = {

}

export default Instructions
