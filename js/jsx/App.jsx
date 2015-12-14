import React from 'react'
import { render } from 'react-dom'
// Custom components
import OptionPresenter from './OptionPresenter.jsx'
import Finished from './Finished.jsx'
import Start from './Start.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentConfig: undefined,
      configSequence: [
        {
          instructions: "Test 1",
          A: {},
          B: {}
        },
        {
          instructions: "Test 2",
          A: {},
          B: {}
        },
        {
          instructions: "Test 3",
          A: {},
          B: {}
        }
      ],
      finished: [],
      showFinished: false
    };
  }

  handleClickNext() {
    if(this.state.configSequence.length == 0) {
      this.setState({showFinished: true});
      return;
    }
    var randomSequenceId = Math.round( Math.random() * this.state.configSequence.length-1 );
    this.setState(state => {
      state.currentConfig = state.configSequence.splice(randomSequenceId, 1)[0];
      state.finished.push(state.currentConfig);
    });
  }

  handleOptionSelection(name, config) {
    console.log( "Option " + name + " selected." );
    console.log( config );
    this.handleClickNext();
    mixpanel.track(name);
  }

  render() {
    var display
    if(this.state.currentConfig == undefined) {
      display = <Start onClick={this.handleClickNext.bind(this)} />;
    }
    else {
      display = this.state.showFinished ? <Finished /> :
      <OptionPresenter
        config={this.state.currentConfig}
        evaluateSelection={this.handleOptionSelection.bind(this)}/>
    }
    return (
      <div className="app-wrapper">
        {display}
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('app-mount')
)
