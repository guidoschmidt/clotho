import React from 'react'

class Start extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className="start">
        <h1 onClick={onClick}>Start</h1>
      </div>
    )
  }
}
Start.defaultProps = {

}
Start.propTypes = {

}

export default Start
