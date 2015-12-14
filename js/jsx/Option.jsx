import React from 'react'
import $ from 'jquery'


class Option extends React.Component {

  handleClick() {
    const { name, config } = this.props;
    var { handleSelection } = this.props;

    handleSelection(name, config);
  }

  render() {
    const { config } = this.props;
    return (
      <div
        className="test-option"
        onClick={this.handleClick.bind(this)}>
      </div>
    )
  }
}
Option.defaultProps = {

}
Option.propTypes = {

}

export default Option
