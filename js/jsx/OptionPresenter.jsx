import React from 'react'
// Custom components
import Instructions from './Instructions.jsx'
import Option from './Option.jsx'
// HTML
import Paragraphs from '../fonts-textblocks.jsx'

class OptionPresenter extends React.Component {
  optionSelected(name, config) {
    var { evaluateSelection } = this.props;
    evaluateSelection(name, config);
  }

  render() {
    const { config } = this.props;

    return (
      <div className="option-presenter" >
          <Instructions key="instructions" text={config.instructions} />
          <div className="test-options" key="options">
            <Option
              name="A"
              config={config.A}
              handleSelection={this.optionSelected.bind(this)} />
            <Option
              name="B"
              config={config.B}
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
