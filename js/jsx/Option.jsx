import React from 'react'
import $ from 'jquery'


class Option extends React.Component {

  handleClick() {
    const { name, config } = this.props;
    var { handleSelection } = this.props;

    handleSelection(name, config);
  }

  loadHTMLResource(id) {
    const { config } = this.props;
    $.ajax({
      url: config.html,
      cache: false
    }).success(data => {
      $('#' + id).append(data);
    }).error((xhr, status, err) => {
      console.error(err);
    });
  }

  componentWillMount() {
    const { name } = this.props;
    const id = 'mount-' + name;
    this.loadHTMLResource(id);
  }

  componentWillReceiveProps() {
    const { name } = this.props;
    const id = 'mount-' + name;
    $('#mount-A').empty();
    $('#mount-B').empty();
    this.loadHTMLResource(id);
  }

  render() {
    const { config, name } = this.props;
    const id = 'mount-' + name;
    var classNames = name == 'A' ? config.options[0] : config.options[1];
    classNames += ' test-option';
    return (
      <div
        className={classNames}
        id={id}
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
