import React from 'react'

class Option extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className="test-option">
        {content}
      </div>
    )
  }
}
Option.defaultProps = {

}
Option.propTypes = {

}

export default Option
