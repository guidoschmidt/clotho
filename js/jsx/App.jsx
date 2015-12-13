import React from 'react'
import { render } from 'react-dom'
// Custom components
import OptionPresenter from './OptionPresenter.jsx'
import Finished from './Finished.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sequence: [0, 1, 2],
      finished: []
    };
  }

  handleClickNext() {
    if(this.state.sequence.length == 0) {
      return;
    }
    var randomSequenceId = Math.round( Math.random() * this.state.sequence.length-1 );
    var selectedElement = this.state.sequence[randomSequenceId];
    this.setState(state => {
      state.finished.push(state.sequence.splice(randomSequenceId, 1));
    });
  }

  render() {
    var display = this.state.sequence.length == 0 ? <Finished /> : <OptionPresenter />
    return (
      <div className="app-wrapper">
        <button onClick={this.handleClickNext.bind(this)}>next</button>
        {display}
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('app-mount')
)
