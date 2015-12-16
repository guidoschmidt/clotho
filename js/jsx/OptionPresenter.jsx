import React from 'react'
// Custom components
import Instructions from './Instructions.jsx'
import Option from './Option.jsx'


class OptionPresenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
  }

  optionSelected(name, config) {
    var { evaluateSelection } = this.props;
    evaluateSelection(name, config);
  }

  changeState() {
    this.setState({visible: true});
  }

  componentWillReceiveProps() {
    this.setState({visible: false});
    setTimeout(this.changeState.bind(this), 500);
  }

  render() {
    const { config, progress } = this.props;

    var classNames = this.state.visible ? 'visible' : 'invisible';
    classNames += ' option-presenter'

    var options = ['A', 'B'];
    var optionNameOne = String(Math.random() <= 0.5 ? options.splice(0, 1) : options.splice(1, 1));
    var optionNameTwo = String(options[0]);

    return (
      <div className={classNames} >
          <Instructions key="instructions" text={config.instructions} />
          <div className="test-options" key="options">
            <Option
              name={optionNameOne}
              config={config}
              handleSelection={this.optionSelected.bind(this)} />
            <Option
              name={optionNameTwo}
              config={config}
              handleSelection={this.optionSelected.bind(this)} />
          </div>
      </div>
    )
  }
}
OptionPresenter.defaultProps = {

}
OptionPresenter.propTypes = {

}

export default OptionPresenter
