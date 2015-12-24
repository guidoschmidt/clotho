import React from 'react'
import { render } from 'react-dom'
// Custom components
import Start from './Start.jsx'
import OptionPresenter from './OptionPresenter.jsx'
import Finish from './Finish.jsx'
import UserSurvey from './UserSurvey.jsx'
import configFromFile from '../../config.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: ['start', 'survey', 'options', 'finish'],
      currentConfig: undefined,
      configSequence: configFromFile,
      finished: [],
      progress: 0,
      testLength: configFromFile.length,
      showFinished: false
    };
  }

  handleClickNext() {
    this.setState(state => {
      state.order.splice(0, 1);
      state.progress++;
    });
    if(this.state.order[1] == 'options') {
      this.handlePresentNextOption();
    }
  }

  handlePresentNextOption() {
    if(this.state.configSequence.length == 0) {
      this.handleClickNext();
      return;
    }
    var randomSequenceId = Math.round( Math.random() * this.state.configSequence.length-1 );
    this.setState(state => {
      state.progress++;
      state.currentConfig = state.configSequence.splice(randomSequenceId, 1)[0];
      state.finished.push(state.currentConfig);
    });
  }

  handleOptionSelection(name, config) {
    mixpanel.track( String(name) );
    this.handlePresentNextOption();
  }

  render() {
    // Switch between components
    var render;
    switch(this.state.order[0]) {
      case 'start':
        render = <Start onClick={this.handleClickNext.bind(this)} />;
        break;
      case 'survey':
        render = (
          <UserSurvey onClick={this.handleClickNext.bind(this)} />
        );
        break;
      case 'options':
        render = (
          <OptionPresenter
            config={this.state.currentConfig}
            evaluateSelection={this.handleOptionSelection.bind(this)} />
        );
        break;
      case 'finish':
        render = <Finish />;
        break;
    }

    let progress = this.state.progress;
    console.log( progress );

    return (
      <div className="app-wrapper">
        <progress value={progress} max={this.state.testLength + 3} />
        {render}
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('app-mount')
)
