import React from 'react'
// Custom components
import Instructions from './Instructions.jsx'
import Option from './Option.jsx'

class OptionPresenter extends React.Component {
  render() {
    return (
      <div>
        <Instructions text="Is this the real world?"/>
        <div className="test-options">
          <Option />
          <Option />
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
